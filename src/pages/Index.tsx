import { Instagram, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            artbyrutu
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Exquisite Mehndi & Nail Art Designs
          </p>
          <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto mb-12">
            Transform your special moments with stunning mehndi designs and creative nail art. 
            From traditional bridal mehndi to modern nail art, we bring your vision to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="text-lg" asChild>
              <a href="#gallery">View Gallery</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <a href="#contact">Book Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:py-24 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                About artbyrutu
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Welcome to artbyrutu, where tradition meets creativity. We specialize in creating 
                breathtaking mehndi designs and unique nail art that reflect your personality and style.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                With years of experience and a passion for artistry, we've adorned countless brides, 
                celebrants, and fashion enthusiasts with our intricate designs.
              </p>
              <p className="text-lg text-muted-foreground">
                Every design is crafted with precision, care, and attention to detail, ensuring 
                you look and feel your absolute best.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Unique Designs</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">4.9★</div>
                <div className="text-sm text-muted-foreground">Client Rating</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 md:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Our Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of stunning mehndi and nail art designs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium capitalize">
                      {image.category}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to book your appointment? Contact us through your preferred platform
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <Button 
              size="lg" 
              className="text-lg flex items-center gap-3 px-8"
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
              className="text-lg flex items-center gap-3 px-8"
              asChild
            >
              <a href="tel:+1234567890">
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </Button>
            
            <Button 
              size="lg" 
              className="text-lg flex items-center gap-3 px-8 bg-accent hover:bg-accent/90"
              asChild
            >
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
          </div>

          <Card className="mt-12 p-8 max-w-2xl mx-auto">
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
