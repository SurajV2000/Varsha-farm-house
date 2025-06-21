import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-amber-50"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                rotateY: { duration: 1.2 },
              }}
              className="relative w-32 h-32 mb-6"
            >
              <img
                src="/logo.jpg"
                alt="Varsha Farm House Logo"
                width="128"
                height="128"
                className="rounded-full shadow-lg"
              />

              {/* Animated ring around logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute inset-0 border-4 border-amber-500 rounded-full"
                style={{ borderRadius: "50%" }}
              />

              {/* Animated dots around logo */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.5 + i * 0.1,
                    duration: 0.4,
                    repeat: 1,
                    repeatType: "reverse",
                  }}
                  className="absolute w-3 h-3 bg-amber-600 rounded-full"
                  style={{
                    top: `${50 - 45 * Math.sin((i * Math.PI) / 4)}%`,
                    left: `${50 - 45 * Math.cos((i * Math.PI) / 4)}%`,
                  }}
                />
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-2xl font-bold text-amber-800 mb-6"
            >
              Varsha Farm
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-1.5 bg-amber-600 rounded-full w-48 overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: 1,
                  repeatType: "mirror",
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="h-full w-1/2 bg-amber-300 rounded-full"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.5, 1] }}
              transition={{ delay: 0.6, duration: 1.5 }}
              className="mt-4 text-amber-700 text-sm"
            >
              Experience the countryside charm
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
