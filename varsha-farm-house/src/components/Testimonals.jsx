import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      name: "Priya Sharma",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      review:
        "Our family had an amazing weekend at Varsha Farm House. The food was exceptional, especially the farm-fresh vegetables. The kids loved interacting with the farm animals. We'll definitely be back!",
    },
    {
      name: "Rahul Mehta",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      review:
        "I celebrated my anniversary at Varsha Farm House and it was perfect. The peaceful surroundings, excellent service, and delicious food made our special day even more memorable. Highly recommended!",
    },
    {
      name: "Ananya Patel",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4,
      review:
        "A wonderful retreat from city life! The amenities are modern while still maintaining the rustic charm. The swimming pool area is beautiful and the nature trails are well maintained.",
    },
    {
      name: "Vikram Singh",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      review:
        "We hosted our company retreat at Varsha Farm House and everyone loved it. The staff was accommodating, the food was outstanding, and the facilities were perfect for both work and relaxation.",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextTestimonial();
      }, 3000); // Change testimonial every 5 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, testimonials.length]);

  // Pause auto-scroll when hovering
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            Happy Customers
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our guests have to say
            about their experiences at Varsha Farm House
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-amber-50 rounded-lg p-8 shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <img
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="w-full h-full object-cover rounded-full border-4 border-amber-200"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[activeIndex].rating
                            ? "text-amber-500 fill-amber-500"
                            : "text-gray-300 fill-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "{testimonials[activeIndex].review}"
                  </p>
                  <h4 className="font-semibold text-amber-800 text-lg">
                    — {testimonials[activeIndex].name}
                  </h4>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={() => {
                  prevTestimonial();
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 10000); // Resume auto-scroll after 10 seconds
                }}
                className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-amber-800" />
              </button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsPaused(true);
                      setTimeout(() => setIsPaused(false), 10000); // Resume auto-scroll after 10 seconds
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeIndex ? "bg-amber-600" : "bg-amber-200"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => {
                  nextTestimonial();
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 10000); // Resume auto-scroll after 10 seconds
                }}
                className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-amber-800" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;