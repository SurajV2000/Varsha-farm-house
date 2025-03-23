import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "./UI/card";
import { Button } from "./UI/button.jsx";

const Dishes = () => {
const dishes = [
  {
    name: "Farm Fresh Salad",
    description:
      "A refreshing mix of organic vegetables harvested from our garden, dressed with our signature herb vinaigrette.",
    image: "/food/food1.jpeg",
    price: "$12",
  },
  {
    name: "Rustic Vegetable Soup",
    description:
      "Hearty soup made with seasonal vegetables and aromatic herbs, served with freshly baked bread.",
    image: "/food/food2.jpeg",
    price: "$10",
  },
  {
    name: "Grilled Farm Chicken",
    description:
      "Tender chicken marinated in herbs and spices, grilled to perfection and served with roasted vegetables.",
    image: "/food/food3.jpeg",
    price: "$18",
  },
  {
    name: "Homemade Pasta",
    description:
      "Handcrafted pasta tossed in a rich tomato sauce with fresh basil and parmesan cheese.",
    image: "/food/food4.jpeg",
    price: "$16",
  },
  {
    name: "Berry Crumble",
    description:
      "Seasonal berries topped with a crunchy oat crumble, served warm with a scoop of vanilla ice cream.",
    image: "/food/food5.jpeg",
    price: "$9",
  },
  {
    name: "Farm House Special Platter",
    description:
      "A selection of our finest dishes, perfect for sharing and experiencing the best of what we offer.",
    image: "/food/food6.jpeg",
    price: "$25",
  },
  {
    name: "Organic Tomato Bruschetta",
    description:
      "Toasted artisan bread topped with fresh, ripe tomatoes, basil, and a drizzle of balsamic glaze.",
    image: "/food/food7.jpeg",
    price: "$8",
  },
  {
    name: "Lemon Herb Roasted Salmon",
    description:
      "Wild-caught salmon roasted with lemon, herbs, and served with quinoa and asparagus.",
    image: "/food/food8.jpeg",
    price: "$22",
  },
  {
    name: "Mushroom Risotto",
    description:
      "Creamy risotto with wild mushrooms, parmesan cheese, and a touch of truffle oil.",
    image: "/food/food9.jpeg",
    price: "$19",
  },
  {
    name: "Avocado Toast with Poached Egg",
    description:
      "Smashed avocado on whole-grain toast, topped with a perfectly poached egg and chili flakes.",
    image: "/food/food10.jpeg",
    price: "$14",
  },
  {
    name: "Spicy Black Bean Burger",
    description:
      "Homemade black bean burger with a spicy kick, served on a whole wheat bun with all the fixings.",
    image: "/food/food11.jpeg",
    price: "$15",
  },
  {
    name: "Apple Pie with Caramel Sauce",
    description:
      "Classic apple pie with a flaky crust, drizzled with homemade caramel sauce and served with whipped cream.",
    image: "/food/food12.jpeg",
    price: "$11",
  },
  {
    name: "Fresh Fruit Smoothie",
    description:
      "A blend of seasonal fruits, yogurt, and honey, perfect for a refreshing treat.",
    image: "/food/food13.jpeg",
    price: "$7",
  },
];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleDishes = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleDishes >= dishes.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dishes.length - visibleDishes : prevIndex - 1
    );
  };

  // Adjust visible dishes based on screen size
  const getVisibleDishes = () => {
    const endIndex = Math.min(currentIndex + visibleDishes, dishes.length);
    return dishes.slice(currentIndex, endIndex);
  };

  return (
    <section id="dishes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            Our Signature Dishes
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Indulge in our farm-to-table culinary delights, prepared with love
            and the freshest ingredients
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-amber-700">
              Featured Dishes
            </h3>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="border-amber-600 text-amber-600 hover:bg-amber-50"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous dishes</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="border-amber-600 text-amber-600 hover:bg-amber-50"
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next dishes</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleDishes().map((dish, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-[18rem]">
                  <img
                    src={dish.image || "/placeholder.svg"}
                    alt={dish.name}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-amber-800">
                      {dish.name}
                    </h4>
                  </div>
                </CardContent> */}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dishes