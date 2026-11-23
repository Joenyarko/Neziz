/**
 * Contact Information configuration
 * Phone & WhatsApp: 0242528504 (+233 24 252 8504)
 */
export const CONTACT_INFO = {
    email: 'joenyarko2001@gmail.com',
    
    // Business phone: tel: link
    businessPhoneRaw: '0242528504',
    businessPhoneFormatted: '024 252 8504',
    phoneDisplay: '024 252 8504',
    
    // WhatsApp: wa.me requires country code without + or leading 0 (233XXXXXXXXX)
    whatsappNumber: '233242528504',
    whatsappFormatted: '024 252 8504',
    whatsappInternational: '+233 24 252 8504',

    // Physical Location
    location: 'Mamprobi, Accra, Ghana',
    hours: 'Monday – Friday, 8:00 AM – 6:00 PM GMT'
};

export const getTelHref = () => `tel:${CONTACT_INFO.businessPhoneRaw}`;

export const getWhatsAppHref = (message = 'Hello Neziz, I would like to discuss a project.') => {
    if (!message) return `https://wa.me/${CONTACT_INFO.whatsappNumber}`;
    return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
