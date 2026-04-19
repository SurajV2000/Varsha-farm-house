import {
  Wifi,
  FishIcon as Swimming,
  UtensilsCrossed,
  Trees,
  Car,
  Tent,
} from "lucide-react";
import { motion } from "framer-motion";

const Amenities = () => {
  const amenities = [
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Free Wi-Fi",
      description:
        "Stay connected with high-speed internet throughout the property",
    },
    {
      icon: <Swimming className="h-6 w-6" />,
      title: "Swimming Pool",
      description:
        "Enjoy a refreshing dip in our clean, well-maintained swimming pool",
    },
    {
      icon: <UtensilsCrossed className="h-6 w-6" />,
      title: "Farm-to-Table Dining",
      description:
        "Savor delicious meals prepared with fresh ingredients from our farm",
    },
    {
      icon: <Trees className="h-6 w-6" />,
      title: "Nature Trails",
      description:
        "Explore scenic walking paths through our beautiful farmland",
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Ample Parking",
      description: "Convenient parking space available for all our guests",
    },
    {
      icon: <Tent className="h-6 w-6" />,
      title: "Outdoor Activities",
      description:
        "Engage in various outdoor games and recreational activities",
    },
  ];

  return (
    <section
      id="amenities"
      className="py-10 bg-white"
    >

      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Our <span className="text-amber-600">Amenities</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Experience comfort and convenience with our range of amenities
            designed to make your stay memorable
          </p>

          <div className="w-16 h-[2px] bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative bg-white p-6 rounded-2xl border border-amber-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >

              {/* Icon Box */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-100 text-amber-600 mb-4 group-hover:scale-110 transition">
                {amenity.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {amenity.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {amenity.description}
              </p>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-amber-300 transition" />

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Amenities;
