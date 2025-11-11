import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import soupImg from "@/assets/soup.jpg";
import springRollsImg from "@/assets/spring-rolls.jpg";
import friedRiceImg from "@/assets/fried-rice.jpg";
import momosImg from "@/assets/momos.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import sizzlerImg from "@/assets/sizzler.jpg";

const categories = [
  "All",
  "Soups",
  "Starters",
  "Main Course",
  "Fried Rice & Noodles",
  "Momos",
  "Pizza & Pasta",
  "Sizzlers",
];

const menuItems = [
  {
    id: 1,
    name: "Manchow Soup",
    category: "Soups",
    price: "₹180",
    description: "Spicy Chinese soup with vegetables and crispy noodles",
    image: soupImg,
    veg: true,
  },
  {
    id: 2,
    name: "Spring Rolls",
    category: "Starters",
    price: "₹220",
    description: "Crispy golden rolls with fresh vegetables",
    image: springRollsImg,
    veg: true,
  },
  {
    id: 3,
    name: "Veg Fried Rice",
    category: "Fried Rice & Noodles",
    price: "₹240",
    description: "Classic Chinese fried rice with mixed vegetables",
    image: friedRiceImg,
    veg: true,
  },
  {
    id: 4,
    name: "Steamed Momos",
    category: "Momos",
    price: "₹200",
    description: "Soft steamed dumplings with flavorful filling",
    image: momosImg,
    veg: true,
  },
  {
    id: 5,
    name: "Margherita Pizza",
    category: "Pizza & Pasta",
    price: "₹320",
    description: "Classic Italian pizza with fresh mozzarella and basil",
    image: pizzaImg,
    veg: true,
  },
  {
    id: 6,
    name: "Veg Sizzler",
    category: "Sizzlers",
    price: "₹380",
    description: "Hot sizzling vegetables with rice and sauce",
    image: sizzlerImg,
    veg: true,
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 bg-background" id="menu">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h2>
          <p className="text-muted-foreground text-lg">
            Explore our delicious selection of dishes
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="overflow-hidden food-card-hover cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {item.veg && (
                  <Badge className="absolute top-4 left-4 bg-green-600">
                    Veg
                  </Badge>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-primary font-bold text-lg">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>
                <Badge variant="outline" className="text-xs">
                  {item.category}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
