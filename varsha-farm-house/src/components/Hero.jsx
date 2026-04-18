import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] flex items-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/p/AF1QipOivQIK7FBdC0LQuEw7V7eP00_ip9OOM5pRL2k=s680-w680-h510-rw?height=1080&width=1920')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent z-[1]" />

      {/* Blur */}
      <div className="absolute inset-0 z-[2] pointer-events-none">

      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="max-w-3xl">

            {/* Badge */}
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-xs sm:text-sm">
              🌿 Nature • Luxury • Peace
            </div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug md:leading-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
            >
              Welcome to{" "}
              <span className="text-amber-400 relative">
                Varsha Farm House
                <span className="absolute left-0 bottom-0 w-full h-[2px] md:h-[3px] bg-amber-400 scale-x-0 origin-left animate-[grow_1s_ease_forwards]" />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-2xl mb-6 md:mb-8 text-gray-200"
            >
              Experience the charm of countryside living with modern amenities and
              delicious farm-to-table cuisine
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            >
              {/* Primary */}
              <a
                href="#dishes"
                className="w-full sm:w-auto text-center relative px-6 py-3 rounded-lg font-semibold text-white overflow-hidden group bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg"
              >
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                <span className="relative z-10 flex justify-center items-center gap-2">
                  Explore Our Dishes →
                </span>
                <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 shadow-[0_0_20px_rgba(251,191,36,0.6)]" />
              </a>

              {/* Secondary */}
              <a
                href="#amenities"
                className="w-full sm:w-auto text-center relative px-6 py-3 rounded-lg font-semibold text-white border border-white/50 overflow-hidden group backdrop-blur-sm"
              >
                <span className="absolute inset-0 bg-white scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300" />
                <span className="relative z-10 group-hover:text-black transition duration-300">
                  View Amenities
                </span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-start lg:items-center gap-6 md:gap-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/20 shadow-xl w-full sm:w-auto">
              <div>
                <p className="text-lg md:text-2xl font-bold">10K+</p>
                <p className="text-xs md:text-sm text-gray-300">Happy Visitors</p>
              </div>
              <div>
                <p className="text-lg md:text-2xl font-bold">25+</p>
                <p className="text-xs md:text-sm text-gray-300">Amenities</p>
              </div>
              <div>
                <p className="text-lg md:text-2xl font-bold">4.8★</p>
                <p className="text-xs md:text-sm text-gray-300">Ratings</p>
              </div>
            </div>

            {/* Play */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md group-hover:scale-110 transition">
                ▶
              </div>
              <span className="text-xs md:text-sm text-gray-200">
                Watch Experience
              </span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-9 md:w-6 md:h-10 border-2 border-white/60 rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes grow {
            to {
              transform: scaleX(1);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
