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
import Testimonials from "./components/Testimonals";

function App() {
  return (
    <>
      <div className="min-h-screen bg-stone-50">
        <Navbar />
        <Hero />
        <About />
        <Amenities />
        <Dishes />
        <Gallery />
        {/* <Testimonials /> */}
        <CustomerPhotos/>
        <Footer />
        <Scrolltotop />
      </div>
    </>
  );
}

export default App;
