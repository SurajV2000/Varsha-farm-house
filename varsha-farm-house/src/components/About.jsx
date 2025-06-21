import React from 'react'
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            About Varsha Farm House
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="/hero_image.jpeg"
              alt="Varsha Farm House exterior"
              fill
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-amber-700 mb-4">
              Our Story
            </h3>
            <p className="text-gray-700 mb-6">
              Tucked away in the lush greenery of Konkan, Maharashtra, Varsha
              Farm House is a peaceful retreat surrounded by coconut palms,
              mango orchards, and the soothing sounds of nature. A perfect
              escape to unwind and reconnect with the serene countryside..
            </p>
            <p className="text-gray-700 mb-6">
              Our commitment to sustainable farming practices ensures that every
              dish served at our table is fresh, organic, and bursting with
              flavor. The farm spans over 1.5 acres of lush greenery, providing
              ample space for relaxation and recreation.
            </p>
            <p className="text-gray-700">
              Whether you're looking for a weekend getaway, a venue for special
              occasions, or simply a day trip to experience farm life, Varsha
              Farm House welcomes you with open arms and warm hospitality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About
