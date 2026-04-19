import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Button } from "./UI/button";

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: "/farm/farm1.jpeg", alt: "Farm house exterior view", caption: "The beautiful exterior of Varsha Farm House" },
    { src: "/farm/farm2.jpeg", alt: "Dining area", caption: "A comfortable and relaxing bedroom" },
    { src: "/farm/farm3.jpeg", alt: "Garden view", caption: "Spacious bedroom" },
    { src: "/farm/farm4.jpeg", alt: "Swimming pool", caption: "Refreshing swimming pool for guests" },
    { src: "/farm/farm5.jpeg", alt: "Farm stay", caption: "A comfortable farm stay" },
    { src: "/farm/farm6.jpeg", alt: "Patio", caption: "Enjoy the fresh air on our patio" },
    { src: "/farm/farm7.jpeg", alt: "Room", caption: "Our fully equipped bedroom" },
    { src: "/farm/farm8.jpeg", alt: "Washroom", caption: "Clean and fully equipped washrooms" },
    { src: "/farm/farm9.jpeg", alt: "Play area", caption: "A comfortable and relaxing bedroom" },
    { src: "/farm/farm10.jpeg", alt: "Exterior", caption: "The beautiful exterior of Varsha Farm House" },
    { src: "/farm/farm11.jpg", alt: "Garden", caption: "Lush green gardens surrounding the property" },
    { src: "/farm/farm12.jpg", alt: "Events", caption: "Area for party and wedding" },
    { src: "/farm/farm13.jpg", alt: "Greenery", caption: "Greenery" },
  ];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="gallery" className="py-14 bg-amber-50">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Photo <span className="text-amber-600">Gallery</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Take a visual tour of our farm house and explore the experience
          </p>
          <div className="w-14 h-[2px] bg-amber-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          loop
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => openLightbox(index)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="h-[260px] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 p-4 text-white">
                  <p className="text-sm opacity-90">
                    {image.caption}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <div className="flex justify-center gap-3 mt-6">
          <button className="prev-btn w-10 h-10 flex items-center justify-center rounded-full border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white transition">
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button className="next-btn w-10 h-10 flex items-center justify-center rounded-full border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white transition">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">

          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white bg-white/10 p-2 rounded-full hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev */}
          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:scale-110 transition"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Image */}
          <div className="relative w-[90vw] max-w-5xl h-[75vh]">
            <img
              src={images[currentImage].src}
              alt=""
              className="w-full h-full object-contain"
            />

            {/* Caption */}
            <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-3 text-sm">
              {images[currentImage].caption}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:scale-110 transition"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      )}
    </section>
  );
}
