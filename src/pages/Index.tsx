import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { ArrowRight, MapPin, Calendar, Search, Phone, Camera, TreePine, Heart, Shield, Award, Mail } from 'lucide-react';
import { AdPopup } from '@/components/AdPopup';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AdPopup />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Call Now Button */}
        <div className="fixed bottom-32 right-4 z-40 md:bottom-24">
          <a 
            href="tel:+918277385225" 
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110 animate-bounce"
          >
            <Phone size={20} />
            <span className="font-medium">कॉल करें</span>
          </a>
        </div>
        
        {/* Quick Links Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
                त्वरित सेवाएं
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                अपनी दंतेवाड़ा यात्रा को आसानी से योजनाबद्ध करें
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Calendar,
                  title: 'यात्रा योजना बनाएं',
                  description: 'अपनी परफेक्ट यात्रा डिज़ाइन करें',
                  link: '/booking',
                  color: 'text-primary'
                },
                {
                  icon: MapPin,
                  title: 'पैकेज बुक करें',
                  description: 'सबसे अच्छे टूर पैकेज चुनें',
                  link: '/booking',
                  color: 'text-accent'
                },
                {
                  icon: Search,
                  title: 'स्थलों का अन्वेषण करें',
                  description: 'प्रमुख आकर्षण खोजें',
                  link: '/activities',
                  color: 'text-primary'
                },
                {
                  icon: Phone,
                  title: 'संपर्क करें',
                  description: 'तुरंत सहायता पाएं',
                  link: '/contact',
                  color: 'text-accent'
                }
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="group bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border hover:border-primary/20"
                >
                  <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm font-medium">अधिक जानें</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Dantewada Section */}
        <section className="section-padding container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="relative">
                <img 
                  src="/Images-uploads/44997248-2a7d-4c4b-8656-13d704d35b37.png" 
                  alt="दंतेश्वरी मंदिर" 
                  className="w-full h-[500px] object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" 
                />
                <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-xl hidden md:block hover:shadow-2xl transform hover:scale-110 transition-all duration-300">
                  <img 
                    src="/Images-uploads/968e9c7f-6872-4c43-ad59-1dd92c92d29a.png" 
                    alt="इंद्रावती राष्ट्रीय उद्यान" 
                    className="w-40 h-32 object-cover rounded-md" 
                  />
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up animation-delay-200">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                दंतेवाड़ा की खोज करें
              </h2>
              <p className="text-muted-foreground mb-6">
                छत्तीसगढ़ के दक्षिणी भाग में स्थित दंतेवाड़ा एक आध्यात्मिक और प्राकृतिक खजाना है। माँ दंतेश्वरी मंदिर से लेकर इंद्रावती राष्ट्रीय उद्यान तक, यहाँ हर यात्री के लिए कुछ न कुछ विशेष है।
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start group hover-lift p-3 rounded-lg transition-all duration-300 hover:bg-secondary/50">
                  <div className="mr-4 p-2 bg-secondary rounded-full text-primary group-hover:bg-primary/10 transition-colors duration-300">
                    <Heart size={20} className="group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-medium group-hover:text-primary transition-colors duration-300">
                      आध्यात्मिक यात्रा
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      माँ दंतेश्वरी मंदिर और अन्य पवित्र स्थलों की दिव्य यात्रा
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group hover-lift p-3 rounded-lg transition-all duration-300 hover:bg-secondary/50">
                  <div className="mr-4 p-2 bg-secondary rounded-full text-primary group-hover:bg-primary/10 transition-colors duration-300">
                    <TreePine size={20} className="group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-medium group-hover:text-primary transition-colors duration-300">
                      प्राकृतिक सुंदरता
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      हरे-भरे जंगल, जलप्रपात और वन्यजीव अभयारण्य का अनुभव
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group hover-lift p-3 rounded-lg transition-all duration-300 hover:bg-secondary/50">
                  <div className="mr-4 p-2 bg-secondary rounded-full text-primary group-hover:bg-primary/10 transition-colors duration-300">
                    <Shield size={20} className="group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-medium group-hover:text-primary transition-colors duration-300">
                      जनजातीय संस्कृति
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      गोंड और अन्य आदिवासी समुदायों की समृद्ध परंपरा और कला
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about" className="inline-flex items-center text-primary hover:underline group">
                  और जानें <ArrowRight size={16} className="ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <Link to="/contact" className="inline-flex items-center text-primary hover:underline group">
                  दिशा-निर्देश पाएं <ArrowRight size={16} className="ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-4">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                प्रमुख पर्यटन स्थल
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                दंतेवाड़ा के सबसे खूबसूरत और महत्वपूर्ण स्थानों की खोज करें
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "माँ दंतेश्वरी मंदिर",
                  image: "/Images-uploads/44997248-2a7d-4c4b-8656-13d704d35b37.png",
                  description: "छत्तीसगढ़ के 52 शक्तिपीठों में से एक प्रमुख मंदिर",
                  distance: "शहर के केंद्र में",
                  bestTime: "अक्टूबर से मार्च",
                  delay: 0
                },
                {
                  title: "इंद्रावती राष्ट्रीय उद्यान",
                  image: "/Images-uploads/968e9c7f-6872-4c43-ad59-1dd92c92d29a.png",
                  description: "बाघ, तेंदुआ और अन्य वन्यजीवों का घर",
                  distance: "दंतेवाड़ा से 60 किमी",
                  bestTime: "नवंबर से जून",
                  delay: 200
                },
                {
                  title: "फुलपाड़ जलप्रपात",
                  image: "/Images-uploads/cc6dd7ad-c5fb-4fef-9dd0-f8dca5d5a10d.png",
                  description: "प्राकृतिक सुंदरता से भरपूर मनमोहक जलप्रपात",
                  distance: "दंतेवाड़ा से 25 किमी",
                  bestTime: "जुलाई से दिसंबर",
                  delay: 400
                }
              ].map((destination, index) => (
                <div 
                  key={index}
                  className="overflow-hidden rounded-xl group shadow-lg animate-slide-up hover-lift bg-card"
                  style={{ animationDelay: `${destination.delay}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                      {destination.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      {destination.description}
                    </p>
                    <div className="space-y-2 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <MapPin size={12} className="mr-1 text-primary" />
                        <span>{destination.distance}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1 text-primary" />
                        <span>सर्वोत्तम समय: {destination.bestTime}</span>
                      </div>
                    </div>
                    <Link to="/activities" className="text-primary hover:underline inline-flex items-center group text-sm">
                      विस्तार से देखें <ArrowRight size={14} className="ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
              <Link to="/activities" className="btn-primary hover-scale">
                सभी स्थल देखें
              </Link>
            </div>
          </div>
        </section>

        {/* Accommodations Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                आवास सुविधाएं
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                आरामदायक और प्राकृतिक वातावरण में ठहरने की सुविधा
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "लक्जरी रिसॉर्ट",
                  image: "/Images-uploads/e254561c-a576-4abe-ba9b-a057e1ddc8d7.png",
                  description: "सभी आधुनिक सुविधाओं के साथ आरामदायक कमरे",
                  price: "₹3,999",
                  features: ["एसी कमरे", "स्विमिंग पूल", "रेस्टोरेंट"],
                  delay: 0
                },
                {
                  title: "इको-फ्रेंडली लॉज",
                  image: "/Images-uploads/507d9972-fed7-467f-90af-7506080a19b4.png",
                  description: "पर्यावरण के अनुकूल प्राकृतिक आवास",
                  price: "₹2,499",
                  features: ["प्राकृतिक सामग्री", "जैविक भोजन", "योग केंद्र"],
                  delay: 200
                },
                {
                  title: "बजट होटल",
                  image: "/Images-uploads/54f9733a-3115-43f8-8702-ac90313ce5aa.png",
                  description: "किफायती दरों में साफ-सुथरे कमरे",
                  price: "₹1,499",
                  features: ["साफ कमरे", "24x7 सेवा", "पार्किंग"],
                  delay: 400
                }
              ].map((accommodation, index) => (
                <div 
                  key={index}
                  className="overflow-hidden rounded-xl group shadow-lg animate-slide-up hover-lift bg-card"
                  style={{ animationDelay: `${accommodation.delay}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={accommodation.image} 
                      alt={accommodation.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                      {accommodation.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      {accommodation.description}
                    </p>
                    <p className="text-primary font-semibold mb-3 text-lg">
                      {accommodation.price} प्रति रात
                    </p>
                    <ul className="text-xs text-muted-foreground mb-4 space-y-1">
                      {accommodation.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/accommodation" className="text-primary hover:underline inline-flex items-center group text-sm">
                      बुक करें <ArrowRight size={14} className="ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
              <Link to="/accommodation" className="btn-primary hover-scale">
                सभी आवास देखें
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-4">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                फोटो गैलरी
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                दंतेवाड़ा की खूबसूरती को तस्वीरों में देखें
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "/Images-uploads/b4c6f3a5-3500-43ad-97e1-e69041317e64.png",
                "/Images-uploads/d6a0abf8-3fb5-4717-9fff-6a3a99f2becf.png",
                "/Images-uploads/45ac4715-903c-4b9d-aaf3-c8fbe391b9a7.png",
                "/Images-uploads/ac22646b-1aa2-41fc-8799-5ece999eabac.png"
              ].map((image, index) => (
                <div 
                  key={index}
                  className="aspect-square overflow-hidden rounded-lg group hover-lift animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img 
                    src={image} 
                    alt={`दंतेवाड़ा गैलरी ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Link to="/gallery" className="btn-primary hover-scale">
                <Camera className="w-4 h-4 mr-2" />
                पूरी गैलरी देखें
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                अपडेट पाएं
              </h2>
              <p className="text-primary-foreground/90 mb-8">
                नई गतिविधियों और विशेष ऑफर की जानकारी सबसे पहले पाने के लिए न्यूज़लेटर की सदस्यता लें
              </p>
              <form 
                className="flex flex-col sm:flex-row items-center max-w-md mx-auto gap-3" 
                onSubmit={(e) => {
                  e.preventDefault();
                  const emailInput = e.currentTarget.querySelector('input[type="email"]') as HTMLInputElement;
                  if (emailInput && emailInput.value) {
                    const { toast } = require("@/hooks/use-toast");
                    toast({
                      title: "सफल!",
                      description: "आपको न्यूज़लेटर की सदस्यता मिल गई है",
                      variant: "default",
                    });
                    emailInput.value = '';
                  }
                }}
              >
                <input 
                  type="email" 
                  placeholder="आपका ईमेल पता" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" 
                  required 
                />
                <Button 
                  type="submit" 
                  variant="secondary" 
                  className="w-full sm:w-auto hover:scale-105 transition-transform"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  सदस्यता लें
                </Button>
              </form>
              <p className="text-xs text-primary-foreground/70 mt-4">
                हम आपकी गोपनीयता का सम्मान करते हैं। किसी भी समय सदस्यता रद्द करें।
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
          <div className="container relative z-10 px-4">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                आपका सपनों का सफर शुरू करें!
              </h2>
              <p className="text-xl mb-8 text-muted-foreground">
                दंतेवाड़ा की आध्यात्मिक और प्राकृतिक सुंदरता का अनुभव करने के लिए आज ही बुकिंग करें
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/booking" 
                  className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform"
                >
                  अभी बुकिंग करें
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-md transition-all duration-300 hover:scale-105"
                >
                  संपर्क करें
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;