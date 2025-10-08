import { Instagram, Phone, MessageCircle, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background" onMouseMove={handleMouseMove}>
      {/* Floating decorative mehndi elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute top-20 left-10 w-32 h-32 opacity-20 animate-float"
          style={{ 
            animationDuration: '8s',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        >
          <img src={mehndi3} alt="" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]" />
        </div>
        <div 
          className="absolute top-1/3 right-16 w-24 h-24 opacity-15 animate-float"
          style={{ 
            animationDuration: '10s',
            animationDelay: '2s',
            transform: `translate(${-mousePosition.x * 0.8}px, ${-mousePosition.y * 0.8}px)`
          }}
        >
          <img src={nailart4} alt="" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(217,119,6,0.6)]" />
        </div>
        <div 
          className="absolute bottom-32 left-1/4 w-28 h-28 opacity-15 animate-float"
          style={{ 
            animationDuration: '12s',
            animationDelay: '4s',
            transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.6}px)`
          }}
        >
          <img src={mehndi7} alt="" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]" />
        </div>
        <div 
          className="absolute bottom-1/4 right-1/3 w-20 h-20 opacity-20 animate-float"
          style={{ 
            animationDuration: '9s',
            animationDelay: '1s',
            transform: `translate(${-mousePosition.x * 1.2}px, ${-mousePosition.y * 1.2}px)`
          }}
        >
          <img src={nailart8} alt="" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(217,119,6,0.5)]" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          <div className="animate-fade-in-up">
            <Heart className="w-14 h-14 mx-auto mb-6 text-primary animate-bounce-gentle drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]" fill="currentColor" />
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer drop-shadow-2xl">
              artbyrutu
            </h1>
            <p className="text-2xl md:text-4xl text-primary font-semibold mb-6 max-w-2xl mx-auto animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
              Exquisite Mehndi & Nail Art Designs
            </p>
            <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-xl mx-auto leading-relaxed font-medium animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Transform your hands into works of art with intricate mehndi designs and stunning nail artistry
            </p>
            <div className="flex gap-4 justify-center flex-wrap animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-glow)] transition-all duration-300 transform hover:scale-110 text-lg" asChild>
                <a href="#gallery">
                  <Sparkles className="w-5 h-5 mr-2" />
                  View Gallery
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110 text-lg" asChild>
                <a href="#contact">Book Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary/10 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                About artbyrutu
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Welcome to artbyrutu, where tradition meets creativity. We specialize in creating 
                breathtaking mehndi designs and unique nail art that reflect your personality and style.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                With years of experience and a passion for artistry, we've adorned countless brides, 
                celebrants, and fashion enthusiasts with our intricate designs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every design is crafted with precision, care, and attention to detail, ensuring 
                you look and feel your absolute best.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center backdrop-blur-sm bg-card/50 border-2 hover:shadow-[var(--shadow-elegant)] transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: '0ms' }}>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </Card>
              <Card className="p-6 text-center backdrop-blur-sm bg-card/50 border-2 hover:shadow-[var(--shadow-elegant)] transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: '100ms' }}>
                <div className="text-4xl font-bold text-accent mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="p-6 text-center backdrop-blur-sm bg-card/50 border-2 hover:shadow-[var(--shadow-elegant)] transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: '200ms' }}>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Unique Designs</div>
              </Card>
              <Card className="p-6 text-center backdrop-blur-sm bg-card/50 border-2 hover:shadow-[var(--shadow-elegant)] transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: '300ms' }}>
                <div className="text-4xl font-bold text-accent mb-2">4.9★</div>
                <div className="text-sm text-muted-foreground">Client Rating</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-transparent via-secondary/10 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Our Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of stunning mehndi and nail art designs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 perspective-1000">
            {galleryImages.map((image, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group cursor-pointer border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-[var(--shadow-elegant)] animate-scale-in"
                style={{ 
                  animationDelay: `${index * 30}ms`,
                  transformStyle: 'preserve-3d',
                  transform: hoveredIndex === index 
                    ? 'translateZ(40px) rotateX(5deg) rotateY(5deg)' 
                    : 'translateZ(0) rotateX(0) rotateY(0)',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-700"
                    style={{
                      transform: hoveredIndex === index 
                        ? 'scale(1.2) rotateZ(3deg)' 
                        : 'scale(1) rotateZ(0deg)',
                      filter: hoveredIndex === index ? 'brightness(1.1)' : 'brightness(1)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                      <p className="text-white text-sm font-semibold capitalize mb-1 drop-shadow-lg">
                        {image.category} • Design {(index % 10) + 1}
                      </p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Sparkles key={i} className="w-3 h-3 text-white/80 animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* 3D depth effect overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(236,72,153,0.1) 0%, rgba(217,119,6,0.1) 100%)',
                    }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up">
            Ready to book your appointment? Contact us through your preferred platform
          </p>
          
          <Card className="p-8 backdrop-blur-sm bg-card/50 border-2 hover:shadow-[var(--shadow-elegant)] transition-all duration-500 animate-scale-in mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="flex items-center gap-3 px-8 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                asChild
              >
                <a href="https://instagram.com/artbyrutu" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="flex items-center gap-3 px-8 border-2 hover:bg-primary/10 hover:border-primary transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                asChild
              >
                <a href="tel:+1234567890">
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="flex items-center gap-3 px-8 border-2 hover:bg-accent/10 hover:border-accent transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                asChild
              >
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </Card>

          <Card className="p-8 max-w-2xl mx-auto backdrop-blur-sm bg-card/50 border-2 hover:shadow-[var(--shadow-elegant)] transition-all duration-500 animate-fade-in">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Business Hours</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
              <p>Sunday: By Appointment Only</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p className="text-sm">
            © 2025 artbyrutu. All rights reserved. | Mehndi & Nail Art Specialist
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
