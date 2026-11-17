// Reusable Project Data Model for Web Developer Portfolio & Job Applications
// All fields adhere to factual verification rules: unknown data is kept as draft/pending confirmation.

export const projectsData = [
  {
    id: 'adroit-bureau',
    slug: 'adroit-bureau',
    title: 'Adroit Bureau — Corporate Website',
    clientName: 'Adroit Bureau',
    publicationPermission: 'Pending developer & client confirmation',
    publicationStatus: 'candidate',
    candidateType: 'Client Website Candidate',
    dates: {
      start: '',
      end: '',
      status: 'Dates not specified'
    },
    engagementType: 'Informal / Third-party project (Unconfirmed paid status)',
    exactRole: 'Frontend Website Developer',
    collaborators: 'Third-party branding / Client contact (Pending confirmation)',
    problem: 'Adroit Bureau required a modern, responsive web presence to present their software consulting and enterprise service offerings to prospective corporate partners.',
    workPersonallyDelivered: [
      'Developed responsive website layout using modern HTML, CSS, and component structure.',
      'Implemented clean typography, navigation menu, and responsive page sections.',
      'Ensured cross-device compatibility across mobile, tablet, and desktop viewports.',
      'Integrated contact entry points and service overview sections.'
    ],
    confirmedStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    screenshots: [
      {
        src: '/images/Adroit.png',
        alt: 'Adroit Bureau website homepage presentation preview',
        caption: 'Adroit Bureau website homepage layout.'
      }
    ],
    liveUrl: 'https://home.adroitcloud.online/',
    liveStatus: 'Live Website',
    permittedCodeSample: 'Pending client code release approval',
    testingPerformed: 'Manual responsive testing across 320px, 390px, 768px, and 1280px viewports; cross-browser layout verification on Chromium and WebKit engines.',
    handover: 'Frontend templates and styling assets delivered to client hosting.',
    evidencedOutcome: 'Publicly accessible, functional corporate website currently live at home.adroitcloud.online.',
    scopeDisclaimer: 'Important Scope Note: Personally delivered the marketing and informational website layout for Adroit Bureau. This work does not claim development of any internal proprietary enterprise ERP systems operated by the client.',
    unresolvedFacts: [
      'Confirmation of exact project start and completion months/year.',
      'Formal client permission for public recruitment case-study citation.',
      'Confirmation of paid vs. informal/unpaid engagement status.'
    ]
  },
  {
    id: 'wiloty-foundation',
    slug: 'wiloty-foundation',
    title: 'Wiloty Foundation — NGO & Community Development Website',
    clientName: 'Wiloty Foundation (Ghana)',
    publicationPermission: 'Pending developer & client confirmation',
    publicationStatus: 'candidate',
    candidateType: 'NGO & Non-Profit Candidate',
    dates: {
      start: '',
      end: '',
      status: 'Dates not specified'
    },
    engagementType: 'Informal / Freelance (Arranged through a friend)',
    exactRole: 'Web Developer',
    collaborators: 'NGO organizers & volunteer contributors',
    problem: 'The Wiloty Foundation needed a dedicated digital platform to publicize grassroots community development initiatives, basic school support programs, and donor outreach across Ghana.',
    workPersonallyDelivered: [
      'Structured and built accessible website pages highlighting foundation missions and field work.',
      'Implemented responsive image galleries and campaign presentation cards.',
      'Optimized layout for mobile accessibility on low-bandwidth Ghanaian mobile networks.',
      'Configured contact and volunteer inquiry touchpoints.'
    ],
    confirmedStack: ['HTML5', 'CSS3', 'JavaScript', 'Mobile-First Layout'],
    screenshots: [
      {
        src: '/images/wiloty.jpg',
        alt: 'Wiloty Foundation community outreach initiative preview',
        caption: 'Wiloty Foundation community development page.'
      }
    ],
    liveUrl: 'https://wilotyfoundation.org/',
    liveStatus: 'Live Website',
    permittedCodeSample: 'Pending client code release approval',
    testingPerformed: 'Tested for mobile responsiveness down to 320px width; verified contrast on key headings; checked touch-target sizes for mobile navigation.',
    handover: 'HTML/CSS templates and imagery assets handed over to foundation coordinator.',
    evidencedOutcome: 'Live NGO advocacy website actively accessible to local and international partners.',
    scopeDisclaimer: 'Delivered web presentation and digital presence for the foundation (informal freelance engagement arranged through a friend).',
    unresolvedFacts: [
      'Written confirmation from organization director for case study publication.'
    ]
  },
  {
    id: 'shop-viotor',
    slug: 'shop-viotor',
    title: 'Shop Viotor — Campus & Community E-Commerce Marketplace',
    clientName: 'Shop Viotor (ATU Marketplace)',
    publicationPermission: 'Pending developer & client confirmation',
    publicationStatus: 'candidate',
    candidateType: 'E-Commerce Candidate',
    dates: {
      start: '',
      end: '',
      status: 'Dates not specified'
    },
    engagementType: 'Informal / Campus e-commerce project (Solo storefront build)',
    exactRole: 'Frontend Web Developer (Solo Build)',
    collaborators: 'Solo frontend storefront build (coordinated with ATU student marketplace founders)',
    problem: 'Student entrepreneurs and local vendors at Accra Technical University (ATU) required an accessible, mobile-first marketplace to display product listings and facilitate customer ordering.',
    workPersonallyDelivered: [
      'Built responsive e-commerce storefront interfaces including product grids, category filtering, and item detail views.',
      'Integrated mobile navigation and search bars tailored for quick mobile browsing.',
      'Implemented customer inquiry and order routing interface.',
      'Focused on fast-loading image display across mobile network conditions.'
    ],
    confirmedStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI Components'],
    screenshots: [
      {
        src: '/images/shopviotor.png',
        alt: 'Shop Viotor Marketplace branding and portal preview',
        caption: 'Shop Viotor e-commerce platform interface.'
      }
    ],
    liveUrl: 'https://www.shopviotor.com/',
    liveStatus: 'Live Marketplace',
    permittedCodeSample: 'Pending client code release approval',
    testingPerformed: 'Simulated mobile phone viewports (320px–420px); tested product filter interactions and tap targets.',
    handover: 'Web templates and frontend application files deployed to hosting.',
    evidencedOutcome: 'Deployed live marketplace accessible to student vendors and consumers.',
    scopeDisclaimer: 'Work focused on frontend storefront development and user interface integration delivered solo. All order volume, transaction metrics, and usage statistics are strictly omitted.',
    unresolvedFacts: [
      'Publication permission confirmation with marketplace owner.'
    ]
  },
  {
    id: 'sappcloud',
    slug: 'sappcloud',
    title: 'SappCloud — Microsoft SQL Training Portal',
    clientName: 'SappCloud',
    publicationPermission: 'Pending developer & client confirmation',
    publicationStatus: 'candidate',
    candidateType: 'Web Application Candidate',
    dates: {
      start: '',
      end: '',
      status: 'Dates not specified'
    },
    engagementType: 'Informal / Educational collaboration (Pending confirmation)',
    exactRole: 'Web Developer',
    collaborators: 'Technical instructor & community coordinators',
    problem: 'SappCloud needed an accessible web platform to share free Microsoft SQL Server curriculum details, session schedules, and learning materials with students and aspiring data professionals.',
    workPersonallyDelivered: [
      'Engineered clean educational web pages detailing course curriculum and session schedules.',
      'Developed structured layout for session registration and resource distribution.',
      'Maintained readable typographic hierarchy for database script references and study outlines.'
    ],
    confirmedStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Layout'],
    screenshots: [
      {
        src: '/images/B.A.png',
        alt: 'SappCloud database training platform interface',
        caption: 'SappCloud technical session portal.'
      }
    ],
    liveUrl: 'https://sappcloud.net/',
    liveStatus: 'Live Web Platform',
    permittedCodeSample: 'Pending client code release approval',
    testingPerformed: 'Verified responsive layout across mobile and desktop; tested registration link destinations.',
    handover: 'Web files and documentation delivered to project lead.',
    evidencedOutcome: 'Live educational website serving technical training announcements and student resources.',
    scopeDisclaimer: 'Delivered website frontend and content presentation for training sessions.',
    unresolvedFacts: [
      'Developer to confirm start and end dates.',
      'Confirmation of whether backend session tracking was delivered by developer or third party.'
    ]
  },
  {
    id: 'embryan-electronics',
    slug: 'embryan-electronics',
    title: 'Embryan IT Solutions — Electronics Retail Storefront',
    clientName: 'Embryan IT Solutions (Ghana)',
    publicationPermission: 'Pending developer & client confirmation',
    publicationStatus: 'candidate',
    candidateType: 'E-Commerce Candidate',
    dates: {
      start: '',
      end: '',
      status: 'Dates not specified'
    },
    engagementType: 'Informal / Client website delivery (Pending confirmation)',
    exactRole: 'Frontend Website Developer',
    collaborators: 'Retail business owner',
    problem: 'A local IT and electronics merchant required an online product catalog and digital storefront to display computing equipment and receive customer orders.',
    workPersonallyDelivered: [
      'Constructed responsive product display cards, category groupings, and promotional banners.',
      'Created clear product specification layouts for computer hardware and accessories.',
      'Implemented clean WhatsApp/phone order routing buttons for direct customer inquiries.'
    ],
    confirmedStack: ['HTML5', 'CSS3', 'JavaScript', 'E-Commerce Layout'],
    screenshots: [
      {
        src: '/images/ECOM.png',
        alt: 'Embryan electronics e-commerce storefront preview',
        caption: 'Embryan electronics product catalog interface.'
      }
    ],
    liveUrl: 'https://embryanitsolutions.site/',
    liveStatus: 'Live Storefront',
    permittedCodeSample: 'Pending client code release approval',
    testingPerformed: 'Validated responsive grid collapse on mobile screens; tested direct messaging and order links.',
    handover: 'Website files deployed to web hosting.',
    evidencedOutcome: 'Live electronics retail website active at embryanitsolutions.site.',
    scopeDisclaimer: 'Delivered product showcase layout and customer contact workflows.',
    unresolvedFacts: [
      'Exact timeline to be confirmed.',
      'Client confirmation for full portfolio case study citation.'
    ]
  },
  {
    id: 'sbinc-solutions',
    slug: 'sbinc-solutions',
    title: 'Sbinc Solutions — Agency Portfolio Website',
    clientName: 'Sbinc Solutions',
    publicationPermission: 'Pending developer & client confirmation',
    publicationStatus: 'candidate',
    candidateType: 'Corporate Website Candidate',
    dates: {
      start: '',
      end: '',
      status: 'Dates not specified'
    },
    engagementType: 'Informal / Collaborative agency build (Pending confirmation)',
    exactRole: 'Web Developer',
    collaborators: 'Creative design partners',
    problem: 'Creative agency required a sleek portfolio website to showcase graphic design, branding, and multimedia project deliverables.',
    workPersonallyDelivered: [
      'Developed modern portfolio presentation pages with responsive project visual cards.',
      'Implemented interactive UI components and clean section transitions.',
      'Optimized layout for smooth mobile viewing without horizontal overflow.'
    ],
    confirmedStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive CSS'],
    screenshots: [
      {
        src: '/images/sbinc.png',
        alt: 'Sbinc Solutions agency website branding preview',
        caption: 'Sbinc Solutions creative portfolio site.'
      }
    ],
    liveUrl: 'https://sbincsolutions.vercel.app/',
    liveStatus: 'Live Website',
    permittedCodeSample: 'Pending client code release approval',
    testingPerformed: 'Checked mobile viewports down to 320px; verified cross-browser CSS grid layout.',
    handover: 'Deployed to Vercel hosting platform.',
    evidencedOutcome: 'Active web presence live at sbincsolutions.vercel.app.',
    scopeDisclaimer: 'Delivered web development implementation of agency portfolio design.',
    unresolvedFacts: [
      'Timeline dates pending confirmation.',
      'Client signoff on public code/case-study excerpts.'
    ]
  },
  {
    id: 'neziz-cloud',
    slug: 'neziz-cloud',
    title: 'Neziz Cloud — Retail Layby Management Web Application',
    clientName: 'Neziz Cloud (Personal / Internal SaaS Project)',
    publicationPermission: 'Developer-owned project (Full permission)',
    publicationStatus: 'candidate',
    candidateType: 'Web Application & SaaS Candidate',
    dates: {
      start: 'Month TBD, 2026',
      end: 'Present',
      status: 'Ongoing development'
    },
    engagementType: 'Personal SaaS / Proprietary project',
    exactRole: 'Full-Stack Developer (Solo)',
    collaborators: 'Solo project',
    problem: 'Small retail merchants struggle to manage multi-part customer layaway (layby) purchases and installment tracking manually in physical notebooks or disconnected spreadsheets.',
    workPersonallyDelivered: [
      'Architected web application views for tracking customer layby orders and installment progress.',
      'Designed database schema concepts for installment schedules and item reservation holds.',
      'Built responsive administrative dashboard interface for tracking active layaway balances.'
    ],
    confirmedStack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'PHP', 'MySQL'],
    screenshots: [
      {
        src: '/images/Neziz-mockup.png',
        alt: 'Neziz Cloud layby management web application interface preview',
        caption: 'Neziz Cloud installment management portal.'
      }
    ],
    liveUrl: 'https://neziz.cloud/',
    liveStatus: 'Live SaaS Portal',
    permittedCodeSample: 'Available upon request (developer-owned code)',
    testingPerformed: 'Component-level testing of installment calculator formulas; responsive testing across desktop and tablet viewports.',
    handover: 'Self-hosted cloud deployment on neziz.cloud.',
    evidencedOutcome: 'Functional web application platform accessible at neziz.cloud.',
    scopeDisclaimer: 'Personal SaaS project exploring layaway accounting workflows and installment management. Payment processing is managed offline/manually by retail merchants (no live or sandbox payment gateway claims).',
    unresolvedFacts: [
      'Developer to confirm feature-readiness and public staging vs production boundaries.'
    ]
  },
  {
    id: 'nezizinvento',
    slug: 'nezizinvento',
    title: 'NezizInvento — Desktop Inventory & Point-of-Sale Tool',
    clientName: 'NezizInvento (Personal / Standalone Tool)',
    publicationPermission: 'DRAFT_ONLY',
    publicationStatus: 'archived_draft',
    isArchived: true,
    candidateType: 'Archived Draft',
    dates: {
      start: '',
      end: '',
      status: 'Archived Draft'
    },
    engagementType: 'Personal software build / Draft',
    exactRole: 'Software Developer (Solo)',
    collaborators: 'Solo project',
    problem: 'Small retail shops require offline-first point-of-sale and inventory record management.',
    workPersonallyDelivered: [
      'Designed screen layouts for stock valuation, low-stock warnings, and sales logging.'
    ],
    confirmedStack: ['Desktop UI Design', 'Offline User Flow'],
    screenshots: [
      {
        src: '/images/nezizinvento.jpg',
        alt: 'NezizInvento desktop inventory dashboard interface',
        caption: 'NezizInvento desktop interface design.'
      }
    ],
    liveUrl: null,
    liveStatus: 'Archived Draft',
    permittedCodeSample: null,
    testingPerformed: 'Internal layout verification.',
    handover: 'Archived in local drafts.',
    evidencedOutcome: 'Archived draft pending technical confirmation.',
    scopeDisclaimer: 'Archived draft pending confirmation of underlying desktop framework, local database, and runtime specifications.',
    unresolvedFacts: [
      'Archived until developer confirms underlying desktop framework and local database engine.'
    ]
  },
  {
    id: 'bank-recon-prototype',
    slug: 'bank-recon-prototype',
    title: 'Bank Reconciliation Tool — Prototype',
    clientName: 'Internal Prototype Project',
    publicationPermission: 'Developer-owned prototype',
    publicationStatus: 'prototype',
    candidateType: 'Prototype Project',
    dates: {
      start: 'Month TBD, 2026',
      end: 'Month TBD, 2026',
      status: 'Prototype build'
    },
    engagementType: 'Personal experimental prototype',
    exactRole: 'Developer (Prototype)',
    collaborators: 'Solo experiment',
    problem: 'Exploring algorithmic matching of bank statement entries against internal accounting transaction records to identify ledger variances.',
    workPersonallyDelivered: [
      'Developed prototype interface for viewing mock bank records alongside ledger accounts.',
      'Prototyped rule-based comparison logic for matching dates, reference numbers, and amounts.',
      'Designed discrepancy highlight views to flag unmatched transactions.'
    ],
    confirmedStack: ['HTML5', 'CSS3', 'JavaScript', 'Prototype Logic'],
    screenshots: [
      {
        src: '/images/Bankrecon.png',
        alt: 'Bank reconciliation software prototype user interface',
        caption: 'Bank reconciliation experimental prototype interface.'
      }
    ],
    liveUrl: null,
    liveStatus: 'Prototype (Not in live production use)',
    permittedCodeSample: 'Available for technical review',
    testingPerformed: 'Tested matching accuracy against sample CSV datasets of synthetic bank statement rows.',
    handover: 'Proof-of-concept prototype stored in local repository.',
    evidencedOutcome: 'Demonstrated feasibility of automated ledger variance detection in prototype test cases.',
    scopeDisclaimer: 'Important: This project is an experimental prototype. It is NOT in live banking production or commercial institutional deployment.',
    unresolvedFacts: [
      'Formal status confirmed as prototype; keep labeled as prototype until production client deployment is confirmed.'
    ]
  },
  {
    id: 'willies-woodwork',
    slug: 'willies-woodwork',
    title: 'Willies Woodwork — Craftsman & Carpentry Portfolio Website',
    clientName: 'Willies Woodwork (Archived Draft)',
    publicationPermission: 'DRAFT_ONLY',
    publicationStatus: 'archived_draft',
    isArchived: true,
    candidateType: 'Archived Draft',
    dates: {
      start: '',
      end: '',
      status: 'Archived Draft'
    },
    engagementType: 'Informal / Client website build (Unconfirmed details)',
    exactRole: 'Website Developer',
    collaborators: 'Business owner',
    problem: 'Woodworking and custom furniture workshop required an online photo portfolio to display finished projects.',
    workPersonallyDelivered: [
      'Developed portfolio gallery layout to showcase carpentry and woodworking products.',
      'Built mobile-responsive navigation and contact call-to-action buttons.'
    ],
    confirmedStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    screenshots: [
      {
        src: '/images/willies.png',
        alt: 'Willies Woodwork website presentation preview',
        caption: 'Willies Woodwork craftsman portfolio website.'
      }
    ],
    liveUrl: null,
    liveStatus: 'Archived Draft',
    permittedCodeSample: null,
    testingPerformed: 'Basic responsive checks.',
    handover: 'Delivered to client.',
    evidencedOutcome: 'Archived draft pending developer confirmation of details.',
    scopeDisclaimer: 'Archived draft. Kept private until developer confirms dates, scope, and client permissions.',
    unresolvedFacts: [
      'Moved to archived drafts until developer confirms details.'
    ]
  },
  {
    id: 'rock-and-redeemer',
    slug: 'rock-and-redeemer',
    title: 'Rock & Redeemer (R&R) — Community Organization Website',
    clientName: 'Rock & Redeemer (R&R) (Archived Draft)',
    publicationPermission: 'DRAFT_ONLY',
    publicationStatus: 'archived_draft',
    isArchived: true,
    candidateType: 'Archived Draft',
    dates: {
      start: '',
      end: '',
      status: 'Archived Draft'
    },
    engagementType: 'Informal / Volunteer project (Unconfirmed details)',
    exactRole: 'Website Developer',
    collaborators: 'Community leaders',
    problem: 'Community initiative required a digital presence to share announcements and mission statements.',
    workPersonallyDelivered: [
      'Created multi-page responsive web layout with mission, activities, and contact sections.',
      'Designed clear typography and mobile-friendly navigation.'
    ],
    confirmedStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    screenshots: [
      {
        src: '/images/r&r.png',
        alt: 'Rock & Redeemer website preview',
        caption: 'Rock & Redeemer community website.'
      }
    ],
    liveUrl: null,
    liveStatus: 'Archived Draft',
    permittedCodeSample: null,
    testingPerformed: 'Responsive device simulation.',
    handover: 'Provided to organizers.',
    evidencedOutcome: 'Archived draft pending developer confirmation of details.',
    scopeDisclaimer: 'Archived draft. Kept private until developer confirms details.',
    unresolvedFacts: [
      'Moved to archived drafts until developer confirms details.'
    ]
  },
  {
    id: 'saly-project',
    slug: 'saly-project',
    title: 'Saly — Client Website Project',
    clientName: 'Saly (Archived Draft)',
    publicationPermission: 'DRAFT_ONLY',
    publicationStatus: 'archived_draft',
    isArchived: true,
    candidateType: 'Archived Draft',
    dates: {
      start: '',
      end: '',
      status: 'Archived Draft'
    },
    engagementType: 'Informal / Client project (Unconfirmed details)',
    exactRole: 'Web Developer',
    collaborators: 'Pending confirmation',
    problem: 'Details unconfirmed.',
    workPersonallyDelivered: [
      'Frontend web development layout (scope unconfirmed).'
    ],
    confirmedStack: ['HTML5', 'CSS3', 'JavaScript'],
    screenshots: [],
    liveUrl: null,
    liveStatus: 'Archived Draft',
    permittedCodeSample: null,
    testingPerformed: 'Pending confirmation.',
    handover: 'Pending confirmation.',
    evidencedOutcome: 'Archived draft.',
    scopeDisclaimer: 'Archived draft. Kept private until developer confirms details.',
    unresolvedFacts: [
      'Moved to archived drafts until developer confirms details.'
    ]
  },
  {
    id: 'radiant-trust',
    slug: 'radiant-trust',
    title: 'Radiant Trust International (RTI) — NGO Website',
    clientName: 'Radiant Trust International (Ghana)',
    publicationPermission: 'Pending developer & client confirmation',
    publicationStatus: 'candidate',
    candidateType: 'NGO & Non-Profit Candidate',
    dates: {
      start: 'Month TBD, 2026',
      end: 'Month TBD, 2026',
      status: 'Pending confirmation'
    },
    engagementType: 'Informal / Community delivery',
    exactRole: 'Web Developer',
    collaborators: 'RTI coordinators',
    problem: 'Social enterprise and humanitarian NGO needed a platform to share vocational outreach initiatives and social welfare programs across Ghana.',
    workPersonallyDelivered: [
      'Developed responsive website pages showcasing NGO programs and impact initiatives.',
      'Implemented mobile-friendly navigation and contact inquiry options.'
    ],
    confirmedStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    screenshots: [
      {
        src: '/images/radianttrust.png',
        alt: 'Radiant Trust International NGO website preview',
        caption: 'Radiant Trust International NGO website.'
      }
    ],
    liveUrl: 'https://www.radianttrust.org/',
    liveStatus: 'Live Website',
    permittedCodeSample: 'Pending client code release approval',
    testingPerformed: 'Verified responsive layout and link destinations.',
    handover: 'Web files deployed to organization hosting.',
    evidencedOutcome: 'Live NGO portal accessible at radianttrust.org.',
    scopeDisclaimer: 'Work delivered website frontend and program presentation.',
    unresolvedFacts: [
      'Developer to confirm timeline and formal publication permission.'
    ]
  },
  {
    id: 'shade-microcredit',
    slug: 'shade-microcredit',
    title: 'Shade Micro-Credit Enterprise — Informational Website',
    clientName: 'Shade Micro-Credit Enterprise (Accra)',
    publicationPermission: 'Pending developer & client confirmation',
    publicationStatus: 'candidate',
    candidateType: 'Corporate Website Candidate',
    dates: {
      start: 'Month TBD, 2026',
      end: 'Month TBD, 2026',
      status: 'Pending confirmation'
    },
    engagementType: 'Informal / Client website build',
    exactRole: 'Frontend Website Developer',
    collaborators: 'Enterprise management',
    problem: 'Accra-based micro-lending enterprise needed a clear web portal to explain micro-credit loan packages and receive inquiries from small business owners.',
    workPersonallyDelivered: [
      'Built accessible website detailing loan packages, eligibility requirements, and FAQ sections.',
      'Implemented responsive inquiry form and direct phone/WhatsApp contact buttons.'
    ],
    confirmedStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    screenshots: [
      {
        src: '/images/shade.png',
        alt: 'Shade Micro-Credit Enterprise website preview',
        caption: 'Shade Micro-Credit Enterprise web portal.'
      }
    ],
    liveUrl: 'https://shademicrocredit.vercel.app/',
    liveStatus: 'Live Website',
    permittedCodeSample: 'Pending client code release approval',
    testingPerformed: 'Checked responsiveness on mobile viewports; verified inquiry form layout.',
    handover: 'Deployed on Vercel.',
    evidencedOutcome: 'Live informational website active at shademicrocredit.vercel.app.',
    scopeDisclaimer: 'Delivered informational website and inquiry forms; did not develop financial loan processing software.',
    unresolvedFacts: [
      'Developer to confirm exact project timeline.',
      'Confirmation of client permission for case study citation.'
    ]
  }
];

// Helper functions for filtering and lookup
export const getPublishedProjects = () => {
  return projectsData.filter(p => p.publicationStatus !== 'archived_draft' && !p.isArchived);
};

export const getProjectBySlug = (slug) => {
  return projectsData.find(p => p.slug === slug || p.id === slug);
};

export const getProjectsByCategory = (category) => {
  const published = getPublishedProjects();
  if (!category || category === 'All') return published;
  return published.filter(p => p.candidateType.toLowerCase().includes(category.toLowerCase()));
};

