import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    comment: "Amazing food! The momos were absolutely delicious and the service was top-notch. Will definitely visit again!",
    date: "2 days ago",
  },
  {
    id: 2,
    name: "Rahul Kumar",
    rating: 4,
    comment: "Great ambiance and tasty Chinese food. The fried rice was perfect. Slightly expensive but worth it for the quality.",
    date: "1 week ago",
  },
  {
    id: 3,
    name: "Anita Desai",
    rating: 5,
    comment: "Best Chinese restaurant in the area! The combo offers are excellent value for money. Highly recommended!",
    date: "2 weeks ago",
  },
];

const Reviews = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h2>
          <p className="text-muted-foreground text-lg">
            What our customers say about us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className="p-6 animate-scale-in hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">
                "{review.comment}"
              </p>
              <div className="flex justify-between items-center border-t pt-4">
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
