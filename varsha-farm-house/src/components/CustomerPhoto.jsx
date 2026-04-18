import { useState } from "react";

const CustomerPhotos = () => {
  const [isPaused, setIsPaused] = useState(false);

  const customerPhotos = [
    { src: "/customer/customer1.jpeg", alt: "Family enjoying picnic at Varsha Farm House" },
    { src: "/customer/customer2.jpeg", alt: "Family enjoying picnic at Varsha Farm House" },
    { src: "/customer/customer3.jpeg", alt: "Family enjoying picnic at Varsha Farm House" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipNgil1n918P4Dhi6gKhLp9Zym2cYRjTDH6-xtI=s1360-w1360-h1020", alt: "Friends having good time at the farm house" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipMPy15w6ZF0i3NTPFwzSta6v1-x0H46-PUMAmo=s1360-w1360-h1020", alt: "Fun at pool side" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipNtmrUZEMQtvkwqAEGiK0hyfPlQ2hQX7QsqS1g=s1360-w1360-h1020", alt: "Family time" },
    { src: "https://lh5.googleusercontent.com/p/AF1QipOM2NcHH23bs8hKfl12Ypn3njNSPR6qiHrFhGw=w141-h141-n-k-no-nu", alt: "Guests exploring nature trails" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipNvGzbgKs0Kf7V59fY33Gg9OzMB6iDrz1zvtLM=s1360-w1360-h1020", alt: "" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipPxF13a4bFCclGKVyChDqREBnbFvWeucuFZu-A=s1360-w1360-h1020", alt: "Guests enjoying outdoor activities" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipNG6TsUTAD03t1OBUDm59n6CcwcJ2tN2mkfBa8=s1360-w1360-h1020", alt: "Family gathering at Varsha Farm House" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipOISmbh9yDH6mIeHOUhTq9dqaijkE4SsfApg0Q=s1360-w1360-h1020", alt: "" },
    { src: "https://lh3.googleusercontent.com/p/AF1QipPpCw62xiTpIlNIyCm9gReq87BgByGdEODH8N0=s1360-w1360-h1020", alt: "" },
  ];

  return (
    <section id="customer-photos" className="py-10 bg-amber-50 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Memories at <span className="text-amber-600">Varsha Farm House</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-2 max-w-xl mx-auto">
            Real moments captured by our happy guests
          </p>
          <div className="w-14 h-[2px] bg-amber-500 mx-auto mt-3 rounded-full" />
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* ROW 1 */}
          <div className="mb-6">
            <div
              className={`flex gap-5 ${isPaused ? "pause" : ""}`}
              style={{
                animation: "scrollLeft 40s linear infinite",
                width: "fit-content",
              }}
            >
              {[...customerPhotos, ...customerPhotos].map((photo, index) => (
                <div key={index} className="flex-none w-[240px] sm:w-[260px] md:w-[300px] group">
                  
                  <div className="relative h-64 rounded-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:rotate-[1deg]">

                    {/* Image */}
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />

                    {/* Light Sweep */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-white/20 blur-xl rotate-12 group-hover:left-[120%] transition-all duration-700" />
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-0 w-full p-3 text-white text-xs bg-black/30 backdrop-blur-md transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {photo.alt}
                    </div>

                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* ROW 2 */}
          <div>
            <div
              className={`flex gap-5 ${isPaused ? "pause" : ""}`}
              style={{
                animation: "scrollRight 45s linear infinite",
                width: "fit-content",
              }}
            >
              {[...customerPhotos.slice().reverse(), ...customerPhotos.slice().reverse()].map((photo, index) => (
                <div key={index} className="flex-none w-[240px] sm:w-[260px] md:w-[300px] group">
                  
                  <div className="relative h-64 rounded-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:-rotate-[1deg]">

                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />

                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-white/20 blur-xl rotate-12 group-hover:left-[120%] transition-all duration-700" />
                    </div>

                    <div className="absolute bottom-0 w-full p-3 text-white text-xs bg-black/30 backdrop-blur-md transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {photo.alt}
                    </div>

                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes scrollLeft {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          @keyframes scrollRight {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }

          .pause {
            animation-play-state: paused !important;
          }
        `}
      </style>
    </section>
  );
};

export default CustomerPhotos;
