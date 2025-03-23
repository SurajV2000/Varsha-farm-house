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
      icon: <Wifi className="h-10 w-10 text-amber-600" />,
      title: "Free Wi-Fi",
      description:
        "Stay connected with high-speed internet throughout the property",
    },
    {
      icon: <Swimming className="h-10 w-10 text-amber-600" />,
      title: "Swimming Pool",
      description:
        "Enjoy a refreshing dip in our clean, well-maintained swimming pool",
    },
    {
      icon: <UtensilsCrossed className="h-10 w-10 text-amber-600" />,
      title: "Farm-to-Table Dining",
      description:
        "Savor delicious meals prepared with fresh ingredients from our farm",
    },
    {
      icon: <Trees className="h-10 w-10 text-amber-600" />,
      title: "Nature Trails",
      description:
        "Explore scenic walking paths through our beautiful farmland",
    },
    {
      icon: <Car className="h-10 w-10 text-amber-600" />,
      title: "Ample Parking",
      description: "Convenient parking space available for all our guests",
    },
    {
      icon: <Tent className="h-10 w-10 text-amber-600" />,
      title: "Outdoor Activities",
      description:
        "Engage in various outdoor games and recreational activities",
    },
  ];

  return (
    <section id="amenities" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            Our Amenities
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Experience comfort and convenience with our range of amenities
            designed to make your stay memorable
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{amenity.icon}</div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">
                {amenity.title}
              </h3>
              <p className="text-gray-600">{amenity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Amenities;