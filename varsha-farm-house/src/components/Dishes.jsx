import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

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
        "Hearty soup made with seasonal vegetables and aromatic herbs.",
      image: "/food/food2.jpeg",
      price: "$10",
    },
    {
      name: "Grilled Farm Chicken",
      description:
        "Tender chicken marinated in herbs and spices.",
      image: "/food/food3.jpeg",
      price: "$18",
    },
    {
      name: "Homemade Pasta",
      description:
        "Handcrafted pasta tossed in a rich tomato sauce.",
      image: "/food/food4.jpeg",
      price: "$16",
    },
    {
      name: "Berry Crumble",
      description:
        "Seasonal berries topped with crunchy oat crumble.",
      image: "/food/food5.jpeg",
      price: "$9",
    },
    {
      name: "Farm House Special Platter",
      description:
        "A selection of our finest dishes.",
      image: "/food/food6.jpeg",
      price: "$25",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleDishes, setVisibleDishes] = useState(3);

  // ✅ Responsive logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleDishes(1); // mobile
      } else if (window.innerWidth < 1024) {
        setVisibleDishes(2); // tablet
      } else {
        setVisibleDishes(3); // desktop
      }
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + visibleDishes >= dishes.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? dishes.length - visibleDishes : prev - 1
    );
  };

  const getVisibleDishes = () => {
    const end = Math.min(currentIndex + visibleDishes, dishes.length);
    return dishes.slice(currentIndex, end);
  };

  return (
    <section id="dishes" className="py-10 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our <span className="text-amber-600">Signature Dishes</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Indulge in farm-to-table delights crafted with fresh ingredients
          </p>
          <div className="w-14 h-[2px] bg-amber-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Header Row */}
        <div className="flex justify-between items-center mb-6 px-4">
          <h3 className="text-xl md:text-2xl font-semibold text-amber-600">
            Featured Dishes
          </h3>

          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          className={`grid gap-6 items-center ${
            visibleDishes === 1
              ? "grid-cols-1"
              : visibleDishes === 2
              ? "grid-cols-2"
              : "grid-cols-3"
          }`}
        >
          {getVisibleDishes().map((dish, index) => {
            const centerIndex = Math.floor(visibleDishes / 2);
            const isCenter = index === centerIndex;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: isCenter ? 1.05 : 0.95,
                }}
                transition={{ duration: 0.3 }}
                className={`group relative rounded-2xl overflow-hidden ${
                  isCenter ? "z-10 shadow-xl" : "shadow-sm"
                }`}
              >

                {/* Image */}
                <div className="relative h-[260px] overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold">
                      {dish.name}
                    </h4>
                  </div>

                  <p className="text-sm text-gray-200 mt-2">
                    {dish.description}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Dishes;
