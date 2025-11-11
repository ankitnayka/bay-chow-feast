import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import combo1 from "@/assets/combo1.jpg";

const combos = [
  {
    id: 1,
    name: "Lunch Special Combo",
    items: ["Manchow Soup", "Veg Fried Rice", "Veg Manchurian Gravy"],
    price: "₹399",
    originalPrice: "₹520",
    image: combo1,
    discount: "23% OFF",
  },
  {
    id: 2,
    name: "Family Feast Combo",
    items: ["2 Soups", "Spring Rolls", "Fried Rice", "Noodles", "Main Course"],
    price: "₹899",
    originalPrice: "₹1200",
    image: combo1,
    discount: "25% OFF",
  },
  {
    id: 3,
    name: "Pizza & Pasta Combo",
    items: ["Margherita Pizza", "Pasta Alfredo", "Garlic Bread", "Coke"],
    price: "₹649",
    originalPrice: "₹850",
    image: combo1,
    discount: "24% OFF",
  },
];

const ComboOffers = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Combo Offers</h2>
          <p className="text-muted-foreground text-lg">
            Save more with our special combo deals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {combos.map((combo, index) => (
            <Card
              key={combo.id}
              className="overflow-hidden food-card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={combo.image}
                  alt={combo.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1">
                  {combo.discount}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{combo.name}</h3>
                <ul className="space-y-2 mb-4">
                  {combo.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-primary">
                    {combo.price}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    {combo.originalPrice}
                  </span>
                </div>
                <Button className="w-full gradient-primary border-0">
                  Order Combo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComboOffers;
