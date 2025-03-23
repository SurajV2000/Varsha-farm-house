import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Card, CardContent } from "./UI/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "./UI/button";

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

const images = [
  {
    src: "/farm/farm1.jpeg",
    alt: "Farm house exterior view",
    caption: "The beautiful exterior of Varsha Farm House",
  },
  {
    src: "/farm/farm2.jpeg",
    alt: "Dining area",
    caption: "A comfortable and relaxing bedroom",
  },
  {
    src: "/farm/farm3.jpeg",
    alt: "Garden view",
    caption: "Spacious bedroom",
  },
  {
    src: "/farm/farm4.jpeg",
    alt: "Swimming pool",
    caption: "Refreshing swimming pool for guests",
  },
  {
    src: "/farm/farm5.jpeg",
    alt: "Farm animals",
    caption: "A comfortable farm stay",
  },
  {
    src: "/farm/farm6.jpeg",
    alt: "Cozy Bedroom",
    caption: "Enjoy the fresh air on our patio",
  },
  {
    src: "/farm/farm7.jpeg",
    alt: "Kitchen area",
    caption: "Our fully equipped bedroom",
  },
  {
    src: "/farm/farm8.jpeg",
    alt: "Outdoor Patio",
    caption: "Clean and fully equipped washrooms",
  },
  {
    src: "/farm/farm9.jpeg",
    alt: "Play Area",
    caption: "A comfortable and relaxing bedroom",
  },
  {
    src: "/farm/farm10.jpeg",
    alt: "Sunset View",
    caption: "The beautiful exterior of Varsha Farm House",
  },
  {
    src: "/farm/farm11.jpg",
    alt: "Sunset View",
    caption: "Lush green gardens surrounding the property",
  },
  {
    src: "/farm/farm12.jpg",
    alt: "Sunset View",
    caption: "Area for party and wedding",
  },
  {
    src: "/farm/farm13.jpg",
    alt: "Sunset View",
    caption: "Greenery",
  },
];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            Photo Gallery
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Take a visual tour of our farm house and get a glimpse of the
            experiences that await you.
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          loop={true}  
          // pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Card
                className="overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative h-64">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-600">{image.caption}</p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {lightboxOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white p-2 bg-gray-800 rounded-full"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            <Button
              variant="ghost"
              onClick={prevImage}
              className="absolute left-4 text-white hover:bg-white/10"
            >
              <ChevronLeft className="h-8 w-8" />
              <span className="sr-only">Previous image</span>
            </Button>

            <div className="relative h-[80vh] w-[80vw] max-w-5xl">
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
                {images[currentImage].caption}
              </div>
            </div>

            <Button
              variant="ghost"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 text-white hover:bg-white/10"
            >
              <ChevronRight className="h-8 w-8" />
              <span className="sr-only">Next image</span>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
