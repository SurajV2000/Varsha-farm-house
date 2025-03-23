import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/p/AF1QipOivQIK7FBdC0LQuEw7V7eP00_ip9OOM5pRL2k=s680-w680-h510-rw?height=1080&width=1920')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.2)",
        }}
      />
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Welcome to Varsha Farm House
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Experience the charm of countryside living with modern amenities and
            delicious farm-to-table cuisine
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#dishes"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Explore Our Dishes
            </a>
            <a
              href="#amenities"
              className="bg-transparent hover:bg-white/10 border border-white text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              View Amenities
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
