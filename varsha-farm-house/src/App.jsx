import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Amenities from "./components/Amenities";
import CustomerPhotos from "./components/CustomerPhoto";
import Dishes from "./components/Dishes";
import Footer from "./components/Footer";
import { Gallery } from "./components/Gallery";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Scrolltotop from "./components/Scrolltotop";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader />
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-stone-50"
          >
            <Navbar />
            <Hero />
            <About />
            <Amenities />
            <Dishes />
            <Gallery />
            <CustomerPhotos />
            <Footer />
            <Scrolltotop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
