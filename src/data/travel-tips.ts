// दंतेवाड़ा यात्रा गाइड और टिप्स

export interface TravelTip {
  id: number;
  category: string;
  title: string;
  description: string;
  icon: string;
  priority: 'high' | 'medium' | 'low';
}

export interface SafetyTip {
  id: number;
  title: string;
  description: string;
  category: 'general' | 'wildlife' | 'trekking' | 'cultural';
}

export interface SeasonInfo {
  season: string;
  months: string;
  weather: string;
  temperature: string;
  pros: string[];
  cons: string[];
  bestFor: string[];
}

export const travelTips: TravelTip[] = [
  {
    id: 1,
    category: "परिवहन",
    title: "दंतेवाड़ा कैसे पहुंचें",
    description: "रायपुर से 350 किमी दूर स्थित दंतेवाड़ा बस, कार या ट्रेन से पहुंचा जा सकता है। निकटतम रेलवे स्टेशन दल्ली राजहरा (50 किमी) है।",
    icon: "🚌",
    priority: "high"
  },
  {
    id: 2,
    category: "आवास",
    title: "कहाँ रुकें",
    description: "दंतेवाड़ा में सरकारी गेस्ट हाउस, होटल और होमस्टेय उपलब्ध हैं। अग्रिम बुकिंग की सलाह दी जाती है।",
    icon: "🏨",
    priority: "high"
  },
  {
    id: 3,
    category: "भोजन",
    title: "स्थानीय व्यंजन",
    description: "छत्तीसगढ़ी व्यंजन जैसे बोरे बासी, चीला और बफ़ौरी जरूर ट्राई करें। स्थानीय महुआ का स्वाद भी लें।",
    icon: "🍽️",
    priority: "medium"
  },
  {
    id: 4,
    category: "खरीदारी",
    title: "स्मृति चिन्ह",
    description: "स्थानीय हस्तशिल्प, बांस के सामान, और आदिवासी कला की वस्तुएं खरीदने के लिए स्थानीय बाजार जाएं।",
    icon: "🛍️",
    priority: "low"
  },
  {
    id: 5,
    category: "मौसम",
    title: "यात्रा का सर्वोत्तम समय",
    description: "अक्टूबर से मार्च तक का समय सबसे अच्छा है। मानसून के बाद जलप्रपात अपने पूरे रूप में होते हैं।",
    icon: "🌤️",
    priority: "high"
  },
  {
    id: 6,
    category: "संस्कृति",
    title: "स्थानीय परंपराएं",
    description: "आदिवासी संस्कृति का सम्मान करें। तस्वीरें लेने से पहले अनुमति लें और स्थानीय रीति-रिवाजों का पालन करें।",
    icon: "🎭",
    priority: "medium"
  }
];

export const safetyTips: SafetyTip[] = [
  {
    id: 1,
    title: "वन्यजीव सुरक्षा",
    description: "राष्ट्रीय उद्यान में हमेशा गाइड के साथ रहें। शोर न करें और वन्यजीवों से सुरक्षित दूरी बनाए रखें।",
    category: "wildlife"
  },
  {
    id: 2,
    title: "ट्रेकिंग सुरक्षा",
    description: "उचित जूते पहनें, पानी साथ रखें और अकेले न जाएं। मौसम की जानकारी पहले से लें।",
    category: "trekking"
  },
  {
    id: 3,
    title: "सामान्य सुरक्षा",
    description: "रात के समय अकेले घूमने से बचें। महत्वपूर्ण दस्तावेजों की फोटोकॉपी साथ रखें।",
    category: "general"
  },
  {
    id: 4,
    title: "सांस्कृतिक संवेदनशीलता",
    description: "स्थानीय समुदाय के साथ सम्मानजनक व्यवहार करें। धार्मिक स्थलों पर उचित पोशाक पहनें।",
    category: "cultural"
  }
];

export const seasonalInfo: SeasonInfo[] = [
  {
    season: "सर्दी (अक्टूबर - फरवरी)",
    months: "अक्टूबर से फरवरी",
    weather: "सुखद और ठंडी",
    temperature: "15°C - 25°C",
    pros: [
      "मौसम सबसे अच्छा",
      "आउटडोर एक्टिविटीज के लिए परफेक्ट",
      "हरियाली अपने चरम पर",
      "जलप्रपात पूरे प्रवाह में"
    ],
    cons: [
      "सबसे ज्यादा भीड़",
      "होटल के रेट अधिक",
      "अग्रिम बुकिंग जरूरी"
    ],
    bestFor: ["सामान्य पर्यटन", "फैमिली ट्रिप", "फोटोग्राफी", "ट्रेकिंग"]
  },
  {
    season: "गर्मी (मार्च - जून)",
    months: "मार्च से जून",
    weather: "गर्म और शुष्क",
    temperature: "25°C - 40°C",
    pros: [
      "कम भीड़",
      "होटल रेट कम",
      "वन्यजीव देखने के लिए अच्छा समय"
    ],
    cons: [
      "अत्यधिक गर्मी",
      "दिन में बाहरी गतिविधियां मुश्किल",
      "कुछ जलप्रपात सूख जाते हैं"
    ],
    bestFor: ["वन्यजीव सफारी", "इंडोर एक्टिविटीज"]
  },
  {
    season: "मानसून (जुलाई - सितंबर)",
    months: "जुलाई से सितंबर",
    weather: "बारिश और आर्द्रता",
    temperature: "22°C - 30°C",
    pros: [
      "प्रकृति अपने चरम सौंदर्य पर",
      "जलप्रपात पूरे जोश में",
      "हवा साफ और स्वच्छ",
      "कम भीड़"
    ],
    cons: [
      "सड़कें फिसलन भरी",
      "कुछ रास्ते बंद हो सकते हैं",
      "आउटडोर प्लान कैंसल हो सकते हैं"
    ],
    bestFor: ["बारिश का आनंद", "प्रकृति फोटोग्राफी", "शांत यात्रा"]
  }
];

export const budgetGuide = {
  backpacker: {
    title: "बैकपैकर बजट (₹1000-2000 प्रति दिन)",
    accommodation: "गेस्ट हाउस, होमस्टेय या कैंपिंग",
    food: "स्थानीय ढाबे और स्ट्रीट फूड",
    transport: "पब्लिक ट्रांसपोर्ट, शेयर्ड टैक्सी",
    activities: "फ्री एंट्री स्पॉट्स, ट्रेकिंग"
  },
  midRange: {
    title: "मध्यम बजट (₹2500-4500 प्रति दिन)",
    accommodation: "अच्छे होटल, प्राइवेट रूम",
    food: "होटल रेस्टोरेंट और अच्छे भोजनालय",
    transport: "प्राइवेट कार/टैक्सी",
    activities: "पेड एंट्री, गाइडेड टूर"
  },
  luxury: {
    title: "लक्जरी बजट (₹5000+ प्रति दिन)",
    accommodation: "प्रीमियम रिज़ॉर्ट्स और होटल",
    food: "फाइन डाइनिंग रेस्टोरेंट",
    transport: "प्राइवेट कार विद ड्राइवर",
    activities: "प्रीमियम एक्सपीरियंस, स्पेशल टूर"
  }
};

export const emergencyContacts = {
  police: "100",
  ambulance: "108",
  fire: "101",
  touristHelpline: "+91 9876543200",
  districtCollector: "+91 7788990011",
  forestDepartment: "+91 9876543201"
};