import { Instagram, Phone, MessageCircle, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

// Import all images
import mehndi1 from "@/assets/mehndi-1.jpg";
import mehndi2 from "@/assets/mehndi-2.jpg";
import mehndi3 from "@/assets/mehndi-3.jpg";
import mehndi4 from "@/assets/mehndi-4.jpg";
import mehndi5 from "@/assets/mehndi-5.jpg";
import mehndi6 from "@/assets/mehndi-6.jpg";
import mehndi7 from "@/assets/mehndi-7.jpg";
import mehndi8 from "@/assets/mehndi-8.jpg";
import mehndi9 from "@/assets/mehndi-9.jpg";
import mehndi10 from "@/assets/mehndi-10.jpg";
import nailart1 from "@/assets/nailart-1.jpg";
import nailart2 from "@/assets/nailart-2.jpg";
import nailart3 from "@/assets/nailart-3.jpg";
import nailart4 from "@/assets/nailart-4.jpg";
import nailart5 from "@/assets/nailart-5.jpg";
import nailart6 from "@/assets/nailart-6.jpg";
import nailart7 from "@/assets/nailart-7.jpg";
import nailart8 from "@/assets/nailart-8.jpg";
import nailart9 from "@/assets/nailart-9.jpg";
import nailart10 from "@/assets/nailart-10.jpg";

const galleryImages = [
  { src: mehndi1, alt: "Intricate mehndi design", category: "mehndi" },
  { src: mehndi2, alt: "Elegant floral mehndi", category: "mehndi" },
  { src: mehndi3, alt: "Traditional Arabic mehndi", category: "mehndi" },
  { src: mehndi4, alt: "Bridal mehndi art", category: "mehndi" },
  { src: mehndi5, alt: "Minimalist mehndi design", category: "mehndi" },
  { src: mehndi6, alt: "Rajasthani mehndi style", category: "mehndi" },
  { src: mehndi7, alt: "Contemporary mehndi design", category: "mehndi" },
  { src: mehndi8, alt: "Full hand mehndi", category: "mehndi" },
  { src: mehndi9, alt: "Moroccan mehndi patterns", category: "mehndi" },
  { src: mehndi10, alt: "Simple elegant mehndi", category: "mehndi" },
  { src: nailart1, alt: "French manicure with gold", category: "nailart" },
  { src: nailart2, alt: "Floral nail art design", category: "nailart" },
  { src: nailart3, alt: "Ombre glitter nails", category: "nailart" },
  { src: nailart4, alt: "Geometric nail art", category: "nailart" },
  { src: nailart5, alt: "Bridal nail art", category: "nailart" },
  { src: nailart6, alt: "Marble nail art", category: "nailart" },
  { src: nailart7, alt: "Chrome mirror nails", category: "nailart" },
  { src: nailart8, alt: "Tropical nail design", category: "nailart" },
  { src: nailart9, alt: "Matte black nails", category: "nailart" },
  { src: nailart10, alt: "Butterfly nail art", category: "nailart" },
];

const Index = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Animated blur background images - Multiple layers for rich effect */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large mehndi patterns */}
          <div className="absolute -top-20 -left-20 w-[600px] h-[600px] animate-float">
            <img src={mehndi2} alt="" className="w-full h-full object-cover blur-[80px] opacity-40" style={{ animationDuration: '10s' }} />
          </div>
          <div className="absolute top-1/4 -right-32 w-[700px] h-[700px] animate-float" style={{ animationDelay: '2s' }}>
            <img src={mehndi8} alt="" className="w-full h-full object-cover blur-[90px] opacity-35" style={{ animationDuration: '12s' }} />
          </div>
          <div className="absolute -bottom-32 left-1/4 w-[550px] h-[550px] animate-float" style={{ animationDelay: '4s' }}>
            <img src={mehndi4} alt="" className="w-full h-full object-cover blur-[85px] opacity-38" style={{ animationDuration: '11s' }} />
          </div>
          
          {/* Nail art accents */}
          <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] animate-float" style={{ animationDelay: '1s' }}>
            <img src={nailart5} alt="" className="w-full h-full object-cover blur-[70px] opacity-35" style={{ animationDuration: '9s' }} />
          </div>
          <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] animate-float" style={{ animationDelay: '3s' }}>
            <img src={nailart2} alt="" className="w-full h-full object-cover blur-[75px] opacity-32" style={{ animationDuration: '10s' }} />
          </div>
          
          {/* Additional subtle layers */}
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] animate-float" style={{ animationDelay: '5s' }}>
            <img src={mehndi6} alt="" className="w-full h-full object-cover blur-[95px] opacity-30" style={{ animationDuration: '13s' }} />
          </div>
          
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 animate-pulse" style={{ animationDuration: '4s' }}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/75 to-background/85"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10 py-20">
          <div className="animate-fade-in-up space-y-8">
            <div className="inline-block animate-bounce-gentle">
              <Heart 
                className="w-20 h-20 mx-auto mb-6 text-primary animate-glow-pulse" 
                fill="currentColor"
              />
            </div>
            <h1 className="text-7xl md:text-9xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer tracking-tight drop-shadow-2xl">
              artbyrutu
            </h1>
            <p className="text-3xl md:text-5xl font-bold text-primary mb-6 max-w-3xl mx-auto animate-fade-in-up tracking-wide" style={{ animationDelay: '0.2s', textShadow: '0 2px 10px rgba(236, 72, 153, 0.2)' }}>
              Exquisite Mehndi & Nail Art
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Transform your hands into masterpieces with intricate designs and stunning artistry
            </p>
            <div className="flex gap-4 md:gap-6 justify-center flex-wrap animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="mobile-touch-bounce bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] hover:bg-[length:100%_auto] animate-shimmer hover:animate-pulse-glow active:scale-95 transition-all duration-700 transform hover:scale-110 hover:-translate-y-2 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-2xl font-semibold shadow-elegant" 
                asChild
              >
                <a href="#gallery" className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 animate-spin-slow" />
                  View Gallery
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="mobile-touch-bounce border-2 border-primary/60 hover:border-primary hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 backdrop-blur-sm active:scale-95 transition-all duration-700 transform hover:scale-110 hover:-translate-y-2 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-2xl font-semibold hover:shadow-elegant" 
                asChild
              >
                <a href="#contact">Book Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-24 px-4 bg-gradient-to-b from-secondary/10 to-transparent transition-all duration-1000 ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
                About artbyrutu
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Welcome to artbyrutu, where tradition meets creativity. We specialize in creating 
                breathtaking mehndi designs and unique nail art that reflect your personality and style.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                With years of experience and a passion for artistry, we've adorned countless brides, 
                celebrants, and fashion enthusiasts with our intricate designs.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Every design is crafted with precision, care, and attention to detail, ensuring 
                you look and feel your absolute best.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="mobile-touch-bounce p-6 md:p-8 text-center backdrop-blur-sm bg-card/90 border-2 border-primary/30 hover:border-primary active:border-primary hover:shadow-2xl hover:shadow-primary/30 transition-all duration-700 transform hover:scale-110 hover:-translate-y-3 animate-bounce-in rounded-2xl hover:animate-pulse-glow cursor-pointer" style={{ animationDelay: '0ms' }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 md:mb-3 animate-fade-in-down">500+</div>
                <div className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wide">Happy Clients</div>
              </Card>
              <Card className="mobile-touch-bounce p-6 md:p-8 text-center backdrop-blur-sm bg-card/90 border-2 border-accent/30 hover:border-accent active:border-accent hover:shadow-2xl hover:shadow-accent/30 transition-all duration-700 transform hover:scale-110 hover:-translate-y-3 animate-bounce-in rounded-2xl hover:animate-pulse-glow cursor-pointer" style={{ animationDelay: '100ms' }}>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 md:mb-3 animate-fade-in-down" style={{ animationDelay: '100ms' }}>5+</div>
                <div className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wide">Years Experience</div>
              </Card>
              <Card className="mobile-touch-bounce p-6 md:p-8 text-center backdrop-blur-sm bg-card/90 border-2 border-primary/30 hover:border-primary active:border-primary hover:shadow-2xl hover:shadow-primary/30 transition-all duration-700 transform hover:scale-110 hover:-translate-y-3 animate-bounce-in rounded-2xl hover:animate-pulse-glow cursor-pointer" style={{ animationDelay: '200ms' }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 md:mb-3 animate-fade-in-down" style={{ animationDelay: '200ms' }}>100+</div>
                <div className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wide">Unique Designs</div>
              </Card>
              <Card className="mobile-touch-bounce p-6 md:p-8 text-center backdrop-blur-sm bg-card/90 border-2 border-accent/30 hover:border-accent active:border-accent hover:shadow-2xl hover:shadow-accent/30 transition-all duration-700 transform hover:scale-110 hover:-translate-y-3 animate-bounce-in rounded-2xl hover:animate-pulse-glow cursor-pointer" style={{ animationDelay: '300ms' }}>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 md:mb-3 animate-fade-in-down" style={{ animationDelay: '300ms' }}>4.9★</div>
                <div className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wide">Client Rating</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className={`py-24 px-4 bg-gradient-to-b from-transparent via-secondary/10 to-transparent transition-all duration-1000 ${visibleSections.has('gallery') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 animate-fade-in space-y-4">
            <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Our Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of stunning mehndi and nail art designs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {galleryImages.map((image, index) => (
              <Card 
                key={index} 
                className="mobile-touch-bounce overflow-hidden group cursor-pointer border-2 border-border/50 hover:border-primary active:border-primary transition-all duration-700 hover:shadow-2xl hover:shadow-primary/40 active:shadow-2xl active:shadow-primary/40 animate-fade-in-scale rounded-2xl backdrop-blur-sm bg-card/50 hover:animate-pulse-glow"
                style={{ animationDelay: `${index * 50}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onTouchStart={() => setHoveredIndex(index)}
                onTouchEnd={() => setTimeout(() => setHoveredIndex(null), 2000)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-110 group-active:brightness-110"
                    style={{
                      transform: hoveredIndex === index 
                        ? 'scale(1.15) rotate(2deg)' 
                        : 'scale(1) rotate(0deg)',
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-primary via-accent/30 to-transparent transition-all duration-700 flex items-end p-4 md:p-6 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                    <p className={`text-white text-base md:text-lg font-bold capitalize transition-all duration-700 drop-shadow-2xl ${hoveredIndex === index ? 'translate-y-0 animate-slide-up-fade' : 'translate-y-8'}`}>
                      {image.category} • Design {(index % 10) + 1}
                    </p>
                  </div>
                  <div className={`absolute top-3 right-3 md:top-4 md:right-4 transition-all duration-500 ${hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white animate-rotate-slow" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto animate-fade-in-up leading-relaxed">
            Ready to book your appointment? Contact us through your preferred platform
          </p>
          
          <Card className="p-6 md:p-10 backdrop-blur-sm bg-card/90 border-2 border-primary/30 hover:border-primary hover:shadow-2xl hover:shadow-primary/30 transition-all duration-700 animate-bounce-in mb-16 rounded-2xl hover:animate-pulse-glow">
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
              <Button 
                size="lg" 
                className="mobile-touch-bounce flex items-center gap-2 md:gap-3 px-6 md:px-10 py-5 md:py-6 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-shimmer hover:shadow-2xl hover:shadow-primary/60 active:shadow-2xl active:shadow-primary/60 active:scale-95 transition-all duration-700 transform hover:scale-110 hover:-translate-y-2 rounded-xl text-base md:text-lg font-semibold"
                asChild
              >
                <a href="https://instagram.com/artbyrutu" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                  Instagram
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="mobile-touch-bounce flex items-center gap-2 md:gap-3 px-6 md:px-10 py-5 md:py-6 border-2 border-primary/60 hover:border-primary active:border-primary hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 active:bg-gradient-to-r active:from-primary/20 active:to-accent/20 backdrop-blur-sm active:scale-95 transition-all duration-700 transform hover:scale-110 hover:-translate-y-2 rounded-xl text-base md:text-lg font-semibold hover:shadow-elegant"
                asChild
              >
                <a href="tel:+1234567890">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  Call Us
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="mobile-touch-bounce flex items-center gap-2 md:gap-3 px-6 md:px-10 py-5 md:py-6 border-2 border-accent/60 hover:border-accent active:border-accent hover:bg-gradient-to-r hover:from-accent/20 hover:to-primary/20 active:bg-gradient-to-r active:from-accent/20 active:to-primary/20 backdrop-blur-sm active:scale-95 transition-all duration-700 transform hover:scale-110 hover:-translate-y-2 rounded-xl text-base md:text-lg font-semibold hover:shadow-elegant"
                asChild
              >
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </Card>

          <Card className="p-10 max-w-2xl mx-auto backdrop-blur-sm bg-card/80 border-2 border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 animate-fade-in rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Business Hours</h3>
            <div className="space-y-3 text-lg text-muted-foreground">
              <p className="font-medium">Monday - Saturday: 10:00 AM - 7:00 PM</p>
              <p className="font-medium">Sunday: By Appointment Only</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-border/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p className="text-base">
            © 2025 artbyrutu. All rights reserved. | Mehndi & Nail Art Specialist
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
