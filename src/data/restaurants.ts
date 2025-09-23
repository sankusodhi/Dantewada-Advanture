// दंतेवाड़ा रेस्टोरेंट और भोजनालय

import localRestaurant from '@/assets/local-restaurant.jpg';

export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  description: string;
  image: string;
  priceRange: string;
  rating: number;
  location: string;
  specialDishes: string[];
  contact: string;
  timings: string;
  features: string[];
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "बस्तर भोजनालय",
    cuisine: "छत्तीसगढ़ी/बस्तरिया",
    description: "पारंपरिक छत्तीसगढ़ी व्यंजनों का स्वाद लेने के लिए सबसे अच्छी जगह। यहाँ स्थानीय सामग्री से बने व्यंजन मिलते हैं।",
    image: localRestaurant,
    priceRange: "₹150-300 प्रति व्यक्ति",
    rating: 4.2,
    location: "मुख्य बाजार, दंतेवाड़ा",
    specialDishes: [
      "बोरे बासी (चावल का पानी)",
      "चीला (चावल का पैनकेक)",
      "बफ़ौरी (चावल की डम्पलिंग)",
      "चटनी पत्ता (स्थानीय चटनी)"
    ],
    contact: "+91 9876543210",
    timings: "सुबह 7:00 - रात 10:00",
    features: ["पारंपरिक वातावरण", "स्थानीय कलाकृति", "होम-स्टाइल खाना", "शाकाहारी विकल्प"]
  },
  {
    id: 2,
    name: "दंतेश्वरी होटल रेस्टोरेंट",
    cuisine: "उत्तर भारतीय/दक्षिण भारतीय",
    description: "व्यापक मेनू के साथ आरामदायक भोजन की व्यवस्था। यहाँ उत्तर और दक्षिण भारतीय दोनों तरह के व्यंजन मिलते हैं।",
    image: localRestaurant,
    priceRange: "₹200-500 प्रति व्यक्ति",
    rating: 4.0,
    location: "बस स्टैंड के पास, दंतेवाड़ा",
    specialDishes: [
      "मसाला डोसा",
      "दाल-चावल",
      "रोटी-सब्जी",
      "बिरयानी"
    ],
    contact: "+91 9876543211",
    timings: "सुबह 6:30 - रात 11:00",
    features: ["एयर कंडीशनिंग", "फैमिली डाइनिंग", "होम डिलीवरी", "पार्किंग सुविधा"]
  },
  {
    id: 3,
    name: "जंगल व्यू कैफे",
    cuisine: "कैफे/स्नैक्स",
    description: "प्राकृतिक सौंदर्य के बीच स्थित यह कैफे चाय-नाश्ते के लिए आदर्श है। यहाँ का वातावरण बेहद शांत और सुंदर है।",
    image: localRestaurant,
    priceRange: "₹100-250 प्रति व्यक्ति",
    rating: 4.3,
    location: "इंद्रावती नेशनल पार्क के पास",
    specialDishes: [
      "मसाला चाय",
      "समोसा",
      "मैगी",
      "टिकिया चाट"
    ],
    contact: "+91 9876543212",
    timings: "सुबह 8:00 - शाम 7:00",
    features: ["बाहरी बैठक", "प्राकृतिक दृश्य", "बच्चों के लिए उपयुक्त", "फोटोग्राफी स्पॉट"]
  },
  {
    id: 4,
    name: "आदिवासी रसोई",
    cuisine: "आदिवासी/ट्राइबल",
    description: "स्थानीय आदिवासी समुदाय द्वारा संचालित यह रेस्टोरेंट पारंपरिक व्यंजनों के लिए प्रसिद्ध है।",
    image: localRestaurant,
    priceRange: "₹120-280 प्रति व्यक्ति",
    rating: 4.1,
    location: "जनजातीय संस्कृति केंद्र के पास",
    specialDishes: [
      "पेज (महुआ का पेय)",
      "बांस की सब्जी",
      "जंगली मशरूम करी",
      "मड़िया रोटी"
    ],
    contact: "+91 9876543213",
    timings: "सुबह 9:00 - रात 9:00",
    features: ["सांस्कृतिक अनुभव", "जैविक सामग्री", "पारंपरिक परोसने का तरीका", "स्थानीय कलाकार"]
  },
  {
    id: 5,
    name: "हिल्स साइड ढाबा",
    cuisine: "पंजाबी/हाईवे",
    description: "यात्रियों के लिए उपयुक्त यह ढाबा तेज़ सेवा और स्वादिष्ट खाने के लिए जाना जाता है।",
    image: localRestaurant,
    priceRange: "₹180-400 प्रति व्यक्ति",
    rating: 3.9,
    location: "राष्ट्रीय राजमार्ग 30 पर",
    specialDishes: [
      "बटर चिकन",
      "दाल मखनी",
      "तंदूरी रोटी",
      "राजमा चावल"
    ],
    contact: "+91 9876543214",
    timings: "24 घंटे खुला",
    features: ["24x7 सेवा", "ट्रक पार्किंग", "बड़े ग्रुप के लिए उपयुक्त", "हाईवे लोकेशन"]
  },
  {
    id: 6,
    name: "वॉटरफॉल व्यू रेस्टोरेंट",
    cuisine: "मल्टी-कुज़ीन",
    description: "जलप्रपात के दृश्य के साथ भोजन का आनंद लेने के लिए यह जगह बेहतरीन है।",
    image: localRestaurant,
    priceRange: "₹250-600 प्रति व्यक्ति",
    rating: 4.4,
    location: "फुलपाड़ जलप्रपात के पास",
    specialDishes: [
      "ग्रिल्ड फिश",
      "वेज थाली",
      "चिकन करी",
      "फ्रेश जूस"
    ],
    contact: "+91 9876543215",
    timings: "सुबह 10:00 - रात 8:00",
    features: ["जलप्रपात का दृश्य", "फ्रेश एयर डाइनिंग", "फोटोग्राफी फ्रेंडली", "प्रकृति के बीच"]
  }
];

export const getRestaurantsByCuisine = (cuisine: string) => {
  return restaurants.filter(restaurant => 
    restaurant.cuisine.toLowerCase().includes(cuisine.toLowerCase())
  );
};

export const getTopRatedRestaurants = () => {
  return restaurants.filter(restaurant => restaurant.rating >= 4.0);
};