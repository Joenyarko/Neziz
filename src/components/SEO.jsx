import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO_DATA } from '../data/seoData';

/**
 * Client-side SEO manager
 * Updates document.title and Open Graph / Meta tags dynamically on SPA transitions
 */
const SEO = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const meta = SEO_DATA[pathname] || SEO_DATA['/'];
        if (!meta) return;

        // Title
        document.title = meta.title;

        // Helper to set or create meta tag
        const setMeta = (attr, key, content) => {
            let el = document.querySelector(`meta[${attr}="${key}"]`);
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute(attr, key);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };

        // Helper for canonical
        let canonicalEl = document.querySelector('link[rel="canonical"]');
        if (!canonicalEl) {
            canonicalEl = document.createElement('link');
            canonicalEl.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalEl);
        }
        canonicalEl.setAttribute('href', meta.canonical);

        // Standard Meta
        setMeta('name', 'description', meta.description);

        // Open Graph
        setMeta('property', 'og:title', meta.ogTitle);
        setMeta('property', 'og:description', meta.ogDescription);
        setMeta('property', 'og:url', meta.canonical);
        setMeta('property', 'og:type', meta.ogType);
        setMeta('property', 'og:image', meta.ogImage);

        // Twitter Card
        setMeta('name', 'twitter:card', 'summary_large_image');
        setMeta('name', 'twitter:title', meta.ogTitle);
        setMeta('name', 'twitter:description', meta.ogDescription);
        setMeta('name', 'twitter:image', meta.ogImage);
    }, [pathname]);

    return null;
};

export default SEO;
