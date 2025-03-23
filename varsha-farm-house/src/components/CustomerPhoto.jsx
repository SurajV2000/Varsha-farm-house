import { useState } from "react";

const CustomerPhotos = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Sample customer photos - replace with actual photos
  const customerPhotos = [
    {
      src: "/customer/customer1.jpeg",
      alt: "Family enjoying picnic at Versha Farm House",
    },
    {
      src: "/customer/customer2.jpeg",
      alt: "Family enjoying picnic at Versha Farm House",
    },
    {
      src: "/customer/customer3.jpeg",
      alt: "Family enjoying picnic at Versha Farm House",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipNgil1n918P4Dhi6gKhLp9Zym2cYRjTDH6-xtI=s1360-w1360-h1020",
      alt: "Friends having good time at the farm house",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipMPy15w6ZF0i3NTPFwzSta6v1-x0H46-PUMAmo=s1360-w1360-h1020",
      alt: "Fun at pool side",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipNtmrUZEMQtvkwqAEGiK0hyfPlQ2hQX7QsqS1g=s1360-w1360-h1020",
      alt: "Family time",
    },
    {
      src: "https://lh5.googleusercontent.com/p/AF1QipOM2NcHH23bs8hKfl12Ypn3njNSPR6qiHrFhGw=w141-h141-n-k-no-nu",
      alt: "Guests exploring nature trails",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipNvGzbgKs0Kf7V59fY33Gg9OzMB6iDrz1zvtLM=s1360-w1360-h1020",
      alt: "",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipPxF13a4bFCclGKVyChDqREBnbFvWeucuFZu-A=s1360-w1360-h1020",
      alt: "Guests enjoying outdoor activities",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipNG6TsUTAD03t1OBUDm59n6CcwcJ2tN2mkfBa8=s1360-w1360-h1020",
      alt: "Family gathering at Versha Farm House",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipOISmbh9yDH6mIeHOUhTq9dqaijkE4SsfApg0Q=s1360-w1360-h1020",
      alt: "",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipPpCw62xiTpIlNIyCm9gReq87BgByGdEODH8N0=s1360-w1360-h1020",
      alt: "",
    },
  ];
  
  return (
    <section id="customer-photos" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            Memories at Varsha Farm House
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Take a glimpse at the wonderful moments our guests have shared at
            our farm house
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* First row - moves left */}
          <div className="mb-6">
            <div
              className={`flex gap-6 ${isPaused ? "pause-animation" : ""}`}
              style={{
                animationName: "scroll-left",
                animationDuration: "40s",
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
                width: "fit-content",
              }}
            >
              {/* Double the photos for seamless looping */}
              {[...customerPhotos, ...customerPhotos].map((photo, index) => (
                <div
                  key={index}
                  className="flex-none w-[280px] md:w-[320px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="relative h-64">
                    <img
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-gray-700 text-sm">{photo.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - moves right (opposite direction) */}
          <div>
            <div
              className={`flex gap-6 ${isPaused ? "pause-animation" : ""}`}
              style={{
                animationName: "scroll-right",
                animationDuration: "45s", // Slightly different speed for visual interest
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
                width: "fit-content",
              }}
            >
              {/* Double the photos for seamless looping, but reversed for opposite direction */}
              {[
                ...customerPhotos.slice().reverse(),
                ...customerPhotos.slice().reverse(),
              ].map((photo, index) => (
                <div
                  key={index}
                  className="flex-none w-[280px] md:w-[320px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="relative h-64">
                    <img
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.alt}
                      fill
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-gray-700 text-sm">{photo.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerPhotos;
