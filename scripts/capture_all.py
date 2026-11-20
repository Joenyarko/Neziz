import os
import sys
import time
import shutil
import subprocess
import threading
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

DIST_DIR = r"C:\Users\joeny\OneDrive\Desktop\Neziz\dist"
ARTIFACTS_DIR = r"C:\Users\joeny\.gemini\antigravity\brain\1a4cd503-da52-46d7-aa75-5d783289befc"
LOCAL_OUT = r"C:\Users\joeny\OneDrive\Desktop\Neziz\test_artifacts\screenshots"
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
PORT = 4173

os.makedirs(LOCAL_OUT, exist_ok=True)
os.makedirs(ARTIFACTS_DIR, exist_ok=True)

class SPAHandler(SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.0"
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIST_DIR, **kwargs)

    def do_GET(self):
        path = self.path.split('?')[0].split('#')[0]
        full_path = os.path.join(DIST_DIR, path.lstrip('/'))

        if os.path.isdir(full_path) and os.path.exists(os.path.join(full_path, 'index.html')):
            self.path = os.path.join(path, 'index.html')
            return super().do_GET()
        elif os.path.isfile(full_path):
            return super().do_GET()
        else:
            self.path = '/index.html'
            return super().do_GET()

def start_server():
    httpd = ThreadingHTTPServer(('127.0.0.1', PORT), SPAHandler)
    httpd.serve_forever()

server_thread = threading.Thread(target=start_server, daemon=True)
server_thread.start()
time.sleep(1)
print(f"Static SPA server running on http://127.0.0.1:{PORT}")

targets = [
    # Desktop captures (1280 wide)
    {
        "name": "desktop_home_teaser.png",
        "url": f"http://127.0.0.1:{PORT}/?no_splash",
        "size": "1280,1800"
    },
    {
        "name": "desktop_about_team.png",
        "url": f"http://127.0.0.1:{PORT}/about/?no_splash",
        "size": "1280,1800"
    },
    {
        "name": "desktop_contact_overview.png",
        "url": f"http://127.0.0.1:{PORT}/contact/?no_splash",
        "size": "1280,1200"
    },
    {
        "name": "desktop_privacy_policy.png",
        "url": f"http://127.0.0.1:{PORT}/privacy/?no_splash",
        "size": "1280,1400"
    },
    {
        "name": "desktop_security_policy.png",
        "url": f"http://127.0.0.1:{PORT}/security/?no_splash",
        "size": "1280,1400"
    },
    # Mobile captures (390 wide)
    {
        "name": "mobile_home_teaser.png",
        "url": f"http://127.0.0.1:{PORT}/?no_splash",
        "size": "390,2000"
    },
    {
        "name": "mobile_about_team_stacked.png",
        "url": f"http://127.0.0.1:{PORT}/about/?no_splash",
        "size": "390,2400"
    },
    {
        "name": "mobile_contact_split_cards.png",
        "url": f"http://127.0.0.1:{PORT}/contact/?no_splash",
        "size": "390,1600"
    },
    {
        "name": "mobile_privacy_policy.png",
        "url": f"http://127.0.0.1:{PORT}/privacy/?no_splash",
        "size": "390,1800"
    }
]

for t in targets:
    local_path = os.path.join(LOCAL_OUT, t["name"])
    artifact_path = os.path.join(ARTIFACTS_DIR, t["name"])
    
    cmd = [
        CHROME,
        "--headless=new",
        "--disable-gpu",
        f"--window-size={t['size']}",
        "--hide-scrollbars",
        f"--screenshot={local_path}",
        t["url"]
    ]
    
    try:
        res = subprocess.run(cmd, capture_output=True, text=True, timeout=15)
        if os.path.exists(local_path):
            shutil.copyfile(local_path, artifact_path)
            print(f"  ✓ Captured: {t['name']} ({os.path.getsize(local_path)} bytes)")
        else:
            print(f"  ✗ Failed: {t['name']}, stderr: {res.stderr}")
    except subprocess.TimeoutExpired:
        print(f"  ✗ Timeout capturing {t['name']}")

print("\nScreenshot capture process finished!")
