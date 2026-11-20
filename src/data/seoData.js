/**
 * SEO metadata definition per route
 * Supports static generation (visible without JavaScript) and client-side transitions
 */
export const SITE_URL = 'https://neziz.online';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/Neziz-logo2.png`;

export const SEO_DATA = {
    '/': {
        title: 'Neziz — Enterprise Software & Digital Solutions Studio',
        description: 'Neziz is a modern digital engineering studio in Accra, Ghana. We build custom web applications, cloud ERP platforms, mobile apps, and e-commerce stores.',
        canonical: `${SITE_URL}/`,
        ogTitle: 'Neziz — Enterprise Software & Digital Solutions Studio',
        ogDescription: 'We architect scalable web apps, cloud ERP systems, and modern digital stores for ambitious organizations.',
        ogImage: DEFAULT_OG_IMAGE,
        ogType: 'website'
    },
    '/about': {
        title: 'About Us — Meet the People Behind Neziz',
        description: 'Meet the small team behind Neziz. Joseph Nyarko and Fitzgerald Quaye build websites, web applications, and software for businesses.',
        canonical: `${SITE_URL}/about`,
        ogTitle: 'About Neziz — Meet the Team Behind the Software',
        ogDescription: "We're a small team building websites and software for businesses. Meet the people behind the work.",
        ogImage: DEFAULT_OG_IMAGE,
        ogType: 'website'
    },
    '/services': {
        title: 'Digital Engineering Services — Neziz',
        description: 'From modern e-commerce and SaaS platforms to desktop POS systems and enterprise cloud portals, explore digital solutions engineered by Neziz.',
        canonical: `${SITE_URL}/services`,
        ogTitle: 'Bespoke Software & Digital Solutions — Neziz',
        ogDescription: 'Explore our full spectrum of software services: Web Apps, E-Commerce, Desktop POS, Cloud Portals, and Enterprise IT.',
        ogImage: DEFAULT_OG_IMAGE,
        ogType: 'website'
    },
    '/portfolio': {
        title: 'Portfolio & Case Studies — Neziz',
        description: 'Explore live enterprise software, SaaS platforms, and digital commerce applications built by Neziz across Africa and global markets.',
        canonical: `${SITE_URL}/portfolio`,
        ogTitle: 'Verified Client Work & Live Deployments — Neziz',
        ogDescription: 'Real live software products including NezizInvento, Neziz Cloud ERP, Shop Viotor, and enterprise systems.',
        ogImage: DEFAULT_OG_IMAGE,
        ogType: 'website'
    },
    '/contact': {
        title: 'Contact Us — Start Your Project with Neziz',
        description: 'Get in touch with the software team at Neziz. Request a project consultation, proposal, or discuss your technical requirements.',
        canonical: `${SITE_URL}/contact`,
        ogTitle: 'Initiate a Conversation — Neziz',
        ogDescription: 'Let’s build something exceptional together. Direct email, phone, and WhatsApp contact options.',
        ogImage: DEFAULT_OG_IMAGE,
        ogType: 'website'
    },
    '/privacy': {
        title: 'Privacy Policy — Neziz',
        description: 'Learn how Neziz handles information submitted through our contact form. We collect only what is needed to scope your project with zero third-party sharing.',
        canonical: `${SITE_URL}/privacy`,
        ogTitle: 'Privacy Policy — Neziz',
        ogDescription: 'Transparent privacy policy based strictly on what our contact form collects.',
        ogImage: DEFAULT_OG_IMAGE,
        ogType: 'website'
    },
    '/security': {
        title: 'Security & Confidentiality — Neziz',
        description: 'How Neziz protects client inquiries, proprietary project data, and communications using modern encryption and architectural rigor.',
        canonical: `${SITE_URL}/security`,
        ogTitle: 'Security Standards — Neziz',
        ogDescription: 'Enterprise security, encrypted communication, and strict confidentiality protocols.',
        ogImage: DEFAULT_OG_IMAGE,
        ogType: 'website'
    }
};
