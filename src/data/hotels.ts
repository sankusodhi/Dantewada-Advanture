// दंतेवाड़ा आवास विकल्प

import hotelRoom from '@/assets/hotel-room.jpg';

export interface Hotel {
  id: number;
  name: string;
  type: string;
  description: string;
  image: string;
  priceRange: string;
  rating: number;
  location: string;
  amenities: string[];
  roomTypes: string[];
  contact: string;
  features: string[];
  checkIn: string;
  checkOut: string;
}

export const hotels: Hotel[] = [
  {
    id: 1,
    name: "होटल दंतेश्वरी पैलेस",
    type: "होटल",
    description: "दंतेवाड़ा का प्रमुख होटल, जो आधुनिक सुविधाओं के साथ आरामदायक रहने की व्यवस्था प्रदान करता है। व्यापारिक और अवकाश दोनों यात्रियों के लिए उपयुक्त।",
    image: hotelRoom,
    priceRange: "₹2,500-4,500 प्रति रात",
    rating: 4.2,
    location: "मुख्य बाजार, दंतेवाड़ा",
    amenities: [
      "एयर कंडीशनिंग",
      "WiFi",
      "रेस्टोरेंट",
      "24x7 रूम सर्विस",
      "पार्किंग",
      "लॉन्ड्री सेवा"
    ],
    roomTypes: ["डीलक्स रूम", "सुपर डीलक्स", "स्वीट"],
    contact: "+91 9876543220",
    features: ["कॉन्फ्रेंस हॉल", "बैंक्वेट हॉल", "टूर गाइड सेवा", "कार रेंटल"],
    checkIn: "दोपहर 2:00 बजे",
    checkOut: "सुबह 11:00 बजे"
  },
  {
    id: 2,
    name: "बस्तर रिज़ॉर्ट",
    type: "रिज़ॉर्ट",
    description: "प्राकृतिक सुंदरता के बीच स्थित यह रिज़ॉर्ट शांति और आराम के लिए आदर्श है। परिवार और हनीमून कपल्स के लिए परफेक्ट।",
    image: hotelRoom,
    priceRange: "₹3,500-6,000 प्रति रात",
    rating: 4.5,
    location: "इंद्रावती पार्क के पास",
    amenities: [
      "स्विमिंग पूल",
      "स्पा सेवा",
      "रेस्टोरेंट",
      "बार",
      "गार्डन",
      "बोनफायर एरिया"
    ],
    roomTypes: ["कॉटेज", "पूल व्यू रूम", "फैमिली सूट"],
    contact: "+91 9876543221",
    features: ["प्रकृति के बीच", "एडवेंचर एक्टिविटीज", "वेडिंग वेन्यू", "कैंपफायर"],
    checkIn: "दोपहर 3:00 बजे",
    checkOut: "सुबह 12:00 बजे"
  },
  {
    id: 3,
    name: "गेस्ट हाउस सरकारी",
    type: "गेस्ट हाउस",
    description: "सरकारी संचालित गेस्ट हाउस जो बुनियादी सुविधाओं के साथ किफायती दरों पर रहने की व्यवस्था प्रदान करता है।",
    image: hotelRoom,
    priceRange: "₹800-1,500 प्रति रात",
    rating: 3.5,
    location: "जिला कलेक्टोरेट के पास",
    amenities: [
      "बुनियादी कमरे",
      "फैन/एयर कूलर",
      "साझा बाथरूम",
      "सामान्य बैठक क्षेत्र"
    ],
    roomTypes: ["सिंगल बेड", "डबल बेड", "डॉर्मेटरी"],
    contact: "+91 9876543222",
    features: ["बजट फ्रेंडली", "सरकारी कर्मचारियों के लिए छूट", "केंद्रीय स्थान"],
    checkIn: "दोपहर 1:00 बजे",
    checkOut: "सुबह 10:00 बजे"
  },
  {
    id: 4,
    name: "जंगल कैंप होमस्टेय",
    type: "होमस्टेय",
    description: "स्थानीय परिवारों के साथ रहने का अनुभव। आदिवासी संस्कृति को करीब से जानने का मौका।",
    image: hotelRoom,
    priceRange: "₹1,200-2,500 प्रति रात",
    rating: 4.0,
    location: "गांव के पास, जंगल क्षेत्र",
    amenities: [
      "पारंपरिक कमरे",
      "घर का बना खाना",
      "स्थानीय अनुभव",
      "प्राकृतिक वातावरण"
    ],
    roomTypes: ["ट्रेडिशनल हट", "फैमिली रूम"],
    contact: "+91 9876543223",
    features: ["सांस्कृतिक अनुभव", "जैविक भोजन", "प्रकृति के साथ जुड़ाव", "स्थानीय गाइड"],
    checkIn: "दिन में कभी भी",
    checkOut: "सुविधानुसार"
  },
  {
    id: 5,
    name: "होटल हिल व्यू",
    type: "होटल",
    description: "पहाड़ी दृश्य के साथ आरामदायक रहने की व्यवस्था। मध्यम बजट के यात्रियों के लिए उपयुक्त।",
    image: hotelRoom,
    priceRange: "₹1,800-3,200 प्रति रात",
    rating: 3.8,
    location: "बस स्टैंड से 2 किमी",
    amenities: [
      "एयर कंडीशनिंग",
      "होट वॉटर",
      "रेस्टोरेंट",
      "पार्किंग",
      "WiFi"
    ],
    roomTypes: ["स्टैंडर्ड रूम", "डीलक्स रूम"],
    contact: "+91 9876543224",
    features: ["पहाड़ी दृश्य", "शांत वातावरण", "आसान पहुंच"],
    checkIn: "दोपहर 2:00 बजे",
    checkOut: "सुबह 11:00 बजे"
  },
  {
    id: 6,
    name: "वॉटरफॉल कैंप साइट",
    type: "कैंपिंग",
    description: "जलप्रपात के पास टेंट में रहने का रोमांचक अनुभव। एडवेंचर प्रेमियों के लिए सबसे अच्छा विकल्प।",
    image: hotelRoom,
    priceRange: "₹1,000-2,000 प्रति रात",
    rating: 4.3,
    location: "फुलपाड़ जलप्रपात के पास",
    amenities: [
      "टेंट एकोमोडेशन",
      "कैंपफायर",
      "शेयर्ड बाथरूम",
      "आउटडोर कुकिंग"
    ],
    roomTypes: ["डबल टेंट", "फैमिली टेंट", "डॉर्म टेंट"],
    contact: "+91 9876543225",
    features: ["प्रकृति के बीच", "एडवेंचर एक्टिविटीज", "ट्रेकिंग", "नाइट कैंपफायर"],
    checkIn: "शाम 4:00 बजे",
    checkOut: "सुबह 10:00 बजे"
  }
];

export const getHotelsByType = (type: string) => {
  return hotels.filter(hotel => hotel.type.toLowerCase() === type.toLowerCase());
};

export const getBudgetHotels = (maxPrice: number) => {
  return hotels.filter(hotel => {
    const price = parseInt(hotel.priceRange.split('-')[0].replace(/[^\d]/g, ''));
    return price <= maxPrice;
  });
};

export const getTopRatedHotels = () => {
  return hotels.filter(hotel => hotel.rating >= 4.0);
};