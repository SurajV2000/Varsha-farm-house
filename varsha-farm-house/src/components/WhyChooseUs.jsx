import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const points = [
    {
      title: "Peaceful Nature Stay",
      desc: "Surrounded by greenery, coconut trees, and fresh air away from city chaos.",
    },
    {
      title: "Perfect for Groups",
      desc: "Ideal for families, friends, parties, and weekend getaways.",
    },
    {
      title: "Private Farm Experience",
      desc: "Entire space is designed for privacy, comfort, and relaxation.",
    },
    {
      title: "Authentic Rural Food",
      desc: "Fresh home-style meals prepared with farm ingredients.",
    },
  ];

  return (
    <section className="py-14 bg-stone-50">
      <div className="container mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why <span className="text-amber-600">Choose Us</span>
          </h2>
          <div className="w-14 h-[2px] bg-amber-500 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl border border-amber-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition"
            >
              <h3 className="text-lg font-semibold text-amber-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
