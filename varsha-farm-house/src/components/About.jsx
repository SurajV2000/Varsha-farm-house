import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-white via-amber-50/30 to-white overflow-hidden"
    >

      {/* 🔥 Section Top Curve (Hero → About smooth transition) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-[1]">
        <svg
          className="relative block w-full h-10"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.29,22,98.73,29,146,17.39C230.38,46.47,284,7.73,339,0c54.92-7.73,112.66,16,168,35.29C562.38,54.56,619,68,676,63.39c57-4.61,112.66-28,168-43.29C899.38,4.8,957.12-2.93,1012,1.39c54.92,4.32,112.66,20,168,35.29V0Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Soft Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-60px] left-[-60px] w-[250px] h-[250px] bg-amber-200/40 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-80px] right-[-60px] w-[300px] h-[300px] bg-orange-200/40 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            About{" "}
            <span className="text-amber-600">
              Varsha Farm House
            </span>
          </h2>
          <div className="w-16 h-[2px] bg-amber-500 mx-auto rounded-full" />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[280px] sm:h-[350px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl group">
              
              <img
                src="/hero_image.jpeg"
                alt="Varsha Farm House exterior"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-amber-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-amber-600 mb-4">
              Our Story
            </h3>

            <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
              Tucked away in the lush greenery of Konkan, Maharashtra, Varsha
              Farm House is a peaceful retreat surrounded by coconut palms,
              mango orchards, and the soothing sounds of nature. A perfect
              escape to unwind and reconnect with the serene countryside..
            </p>

            {/* Divider */}
            <div className="h-[1px] bg-amber-100 my-4"></div>

            <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
              Our commitment to sustainable farming practices ensures that every
              dish served at our table is fresh, organic, and bursting with
              flavor. The farm spans over 1.5 acres of lush greenery, providing
              ample space for relaxation and recreation.
            </p>

            {/* Divider */}
            <div className="h-[1px] bg-amber-100 my-4"></div>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Whether you're looking for a weekend getaway, a venue for special
              occasions, or simply a day trip to experience farm life, Varsha
              Farm House welcomes you with open arms and warm hospitality.
            </p>

            {/* Mini Info Pills */}
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs">
                🌿 Organic Food
              </div>
              <div className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs">
                🏡 Peaceful Stay
              </div>
              <div className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs">
                🌳 Nature View
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
