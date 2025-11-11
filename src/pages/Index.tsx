import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import ComboOffers from "@/components/ComboOffers";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Menu />
      <ComboOffers />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
