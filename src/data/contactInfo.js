/**
 * Contact Information configuration
 * Note: Country code format without + or leading 0 (e.g., 233XXXXXXXXX)
 */
export const CONTACT_INFO = {
    email: 'joenyarko2001@gmail.com',
    
    // Business phone: tel: link (with country code)
    // NOTE: Default placeholder until user provides confirmed official business number
    businessPhoneRaw: '233242528504',
    businessPhoneFormatted: '+233 24 252 8504',
    phoneDisplay: '+233 24 252 8504',
    
    // WhatsApp: wa.me link with country code, no + or leading 0
    whatsappNumber: '233242528504',
    whatsappFormatted: '+233 24 252 8504',

    // Physical Location
    location: 'Mamprobi, Accra, Ghana',
    hours: 'Monday – Friday, 8:00 AM – 6:00 PM GMT'
};

export const getTelHref = () => `tel:${CONTACT_INFO.businessPhoneRaw}`;
export const getWhatsAppHref = () => `https://wa.me/${CONTACT_INFO.whatsappNumber}`;
