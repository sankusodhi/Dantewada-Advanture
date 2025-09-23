// दंतेवाड़ा पर्यटन स्थलों की जानकारी

import danteshwariTemple from '@/assets/danteshwari-temple.jpg';
import indravatiPark from '@/assets/indravati-national-park.jpg';
import fulpadWaterfall from '@/assets/fulpad-waterfall.jpg';
import mendriGhumarWaterfall from '@/assets/mendri-ghumar-waterfall.jpg';
import barsurTemples from '@/assets/barsur-temples.jpg';
import tribalCulture from '@/assets/tribal-culture.jpg';

export interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
  distance: string;
  bestTime: string;
  estimatedCost: string;
  category: string;
  highlights: string[];
  tips: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "दंतेश्वरी मंदिर",
    description: "दंतेवाड़ा का मुख्य आकर्षण, माता दंतेश्वरी का प्रसिद्ध मंदिर है। यह 600 साल पुराना मंदिर है जो शक्ति पीठों में से एक माना जाता है। यहाँ हर साल हजारों श्रद्धालु दर्शन के लिए आते हैं।",
    image: danteshwariTemple,
    distance: "शहर के केंद्र में स्थित",
    bestTime: "अक्टूबर से मार्च (सर्दी का मौसम)",
    estimatedCost: "₹500-1000 प्रति व्यक्ति",
    category: "धार्मिक स्थल",
    highlights: [
      "600 साल पुराना ऐतिहासिक मंदिर",
      "शक्ति पीठ का महत्वपूर्ण स्थान",
      "सुंदर पारंपरिक वास्तुकला",
      "दशहरा उत्सव का मुख्य केंद्र"
    ],
    tips: [
      "सुबह 6 बजे से रात 9 बजे तक खुला रहता है",
      "दर्शन के लिए कतार में इंतजार करना पड़ सकता है",
      "त्योहारों के दौरान भीड़ अधिक होती है",
      "मंदिर में फोटोग्राफी की अनुमति है"
    ],
    coordinates: { lat: 18.8948, lng: 81.3548 }
  },
  {
    id: 2,
    name: "इंद्रावती राष्ट्रीय उद्यान",
    description: "छत्तीसगढ़ का सबसे बड़ा राष्ट्रीय उद्यान, जो बाघों, तेंदुओं और विभिन्न वन्यजीवों का घर है। 2799 वर्ग किमी में फैला यह पार्क प्रकृति प्रेमियों के लिए स्वर्ग है।",
    image: indravatiPark,
    distance: "दंतेवाड़ा से 70 किमी",
    bestTime: "नवंबर से अप्रैल",
    estimatedCost: "₹2000-4000 प्रति व्यक्ति (सफारी सहित)",
    category: "वन्यजीव अभयारण्य",
    highlights: [
      "बाघ रिजर्व और राष्ट्रीय उद्यान",
      "200+ पक्षी प्रजातियाँ",
      "जंगली भैंसे और हिरण",
      "इंद्रावती नदी का प्राकृतिक सौंदर्य"
    ],
    tips: [
      "सफारी के लिए अग्रिम बुकिंग आवश्यक",
      "गाइड के साथ ही जंगल में जाएं",
      "पानी और स्नैक्स साथ रखें",
      "शोर न करें, वन्यजीवों को परेशान न करें"
    ],
    coordinates: { lat: 18.9167, lng: 81.5667 }
  },
  {
    id: 3,
    name: "फुलपाड़ जलप्रपात",
    description: "प्राकृतिक सुंदरता से भरपूर यह जलप्रपात 20 मीटर की ऊंचाई से गिरते पानी के लिए प्रसिद्ध है। मानसून के दौरान इसका रूप और भी आकर्षक हो जाता है।",
    image: fulpadWaterfall,
    distance: "दंतेवाड़ा से 35 किमी",
    bestTime: "जुलाई से फरवरी (मानसून के बाद)",
    estimatedCost: "₹300-800 प्रति व्यक्ति",
    category: "प्राकृतिक स्थल",
    highlights: [
      "20 मीटर ऊंचा खूबसूरत जलप्रपात",
      "प्राकृतिक स्विमिंग पूल",
      "चट्टानी संरचनाएं और हरियाली",
      "ट्रेकिंग और फोटोग्राफी"
    ],
    tips: [
      "स्विमिंग कॉस्टयूम साथ लाएं",
      "चप्पल/जूते जो गीले हो सकें",
      "सुरक्षा के लिए सावधानी बरतें",
      "कूड़ा-करकट न फैलाएं"
    ],
    coordinates: { lat: 18.7833, lng: 81.4167 }
  },
  {
    id: 4,
    name: "मेंद्री घुमर जलप्रपात",
    description: "तीन स्तरों में गिरने वाला यह खूबसूरत जलप्रपात प्रकृति प्रेमियों और एडवेंचर के शौकीनों के लिए आदर्श है। यहाँ का शांत वातावरण मन को सुकून देता है।",
    image: mendriGhumarWaterfall,
    distance: "दंतेवाड़ा से 28 किमी",
    bestTime: "अगस्त से जनवरी",
    estimatedCost: "₹400-1000 प्रति व्यक्ति",
    category: "प्राकृतिक स्थल",
    highlights: [
      "तीन स्तरीय जलप्रपात",
      "प्राकृतिक रॉक फॉर्मेशन",
      "हरे-भरे जंगल का दृश्य",
      "शांत और सुंदर वातावरण"
    ],
    tips: [
      "थोड़ी सी ट्रेकिंग करनी पड़ती है",
      "आरामदायक जूते पहनें",
      "पानी की बोतल साथ रखें",
      "सूर्यास्त का समय बेहतरीन है"
    ],
    coordinates: { lat: 18.8167, lng: 81.3833 }
  },
  {
    id: 5,
    name: "बारसूर के प्राचीन मंदिर",
    description: "12वीं सदी के ये प्राचीन मंदिर अपनी शानदार कलाकृति और वास्तुकला के लिए प्रसिद्ध हैं। यहाँ गणेश मंदिर और मामा-भांजा मंदिर मुख्य आकर्षण हैं।",
    image: barsurTemples,
    distance: "दंतेवाड़ा से 80 किमी",
    bestTime: "अक्टूबर से मार्च",
    estimatedCost: "₹600-1200 प्रति व्यक्ति",
    category: "ऐतिहासिक स्थल",
    highlights: [
      "12वीं सदी की प्राचीन वास्तुकला",
      "गणेश मंदिर की उत्कृष्ट कलाकृति",
      "मामा-भांजा मंदिर परिसर",
      "पुरातत्व विभाग द्वारा संरक्षित"
    ],
    tips: [
      "गाइड की सेवा लेना उपयोगी होगा",
      "इतिहास में रुचि रखने वालों के लिए आदर्श",
      "फोटोग्राफी की अनुमति है",
      "दिन के उजाले में जाना बेहतर"
    ],
    coordinates: { lat: 19.0833, lng: 81.9167 }
  },
  {
    id: 6,
    name: "जनजातीय संस्कृति केंद्र",
    description: "दंतेवाड़ा की समृद्ध आदिवासी संस्कृति को समझने के लिए यह केंद्र बेहतरीन है। यहाँ स्थानीय कला, शिल्प और परंपराओं का प्रदर्शन देखा जा सकता है।",
    image: tribalCulture,
    distance: "दंतेवाड़ा शहर में स्थित",
    bestTime: "पूरे साल (त्योहारों के दौरान विशेष)",
    estimatedCost: "₹200-500 प्रति व्यक्ति",
    category: "सांस्कृतिक स्थल",
    highlights: [
      "आदिवासी कला और शिल्प प्रदर्शनी",
      "पारंपरिक नृत्य प्रदर्शन",
      "स्थानीय हस्तकला की दुकानें",
      "सांस्कृतिक कार्यक्रम"
    ],
    tips: [
      "त्योहारों के दौरान विशेष कार्यक्रम होते हैं",
      "स्थानीय हस्तकला खरीदने का अवसर",
      "फोटोग्राफी से पहले अनुमति लें",
      "स्थानीय गाइड से बातचीत करें"
    ],
    coordinates: { lat: 18.8948, lng: 81.3548 }
  }
];

export const getDestinationsByCategory = (category: string) => {
  return destinations.filter(dest => dest.category === category);
};

export const getDestinationById = (id: number) => {
  return destinations.find(dest => dest.id === id);
};