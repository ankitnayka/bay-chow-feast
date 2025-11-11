import { Star, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            China – By The Bay
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-6">
            Authentic Chinese, Fast Food, Italian, Pizza & Momos
          </p>
          
          {/* Ratings */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="rating-badge bg-green-600 text-white">
              <Star className="w-4 h-4 fill-current" />
              <span>4.2 Dining</span>
            </div>
            <div className="rating-badge bg-green-600 text-white">
              <Star className="w-4 h-4 fill-current" />
              <span>4.4 Delivery</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-2 text-white">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Marine Drive, Mumbai, Maharashtra 400002</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Phone className="w-5 h-5 text-primary" />
              <span>+91 98765 43210</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gradient-primary border-0 hover:opacity-90">
              Order Now
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-foreground">
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
