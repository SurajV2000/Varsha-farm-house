import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-amber-50">

      <div className="container mx-auto px-4 py-14">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT - BRAND */}
          <div>

            <div className="flex items-center gap-4 mb-6">
              <img
                src="/logo.jpg"
                className="h-14 w-14 rounded-full object-cover"
                alt="logo"
              />
              <h2 className="text-2xl font-bold">
                Varsha Farm House
              </h2>
            </div>

            <p className="text-amber-100/70 leading-relaxed text-sm max-w-lg">
              Escape into nature with peaceful stays, fresh air, organic food,
              and unforgettable family moments surrounded by greenery.
            </p>

            {/* SOCIAL - FIXED (proper links + hover effects) */}
            <div className="flex gap-4 mt-6">

              <a
                href="https://www.facebook.com/profile.php?id=61550689064644"
                target="_blank"
                className="p-2 rounded-full border border-white/10 hover:bg-blue-600 hover:text-white transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/varsha_farm_house"
                target="_blank"
                className="p-2 rounded-full border border-white/10 hover:bg-pink-500 hover:text-white transition"
              >
                <Instagram size={18} />
              </a>

            </div>

          </div>

          {/* RIGHT - CONTACT */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">

            <h3 className="text-lg font-semibold mb-6 text-amber-200">
              Contact Us
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">

              {/* PHONE */}
              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <Phone className="text-amber-400 w-4 h-4" />
                  <span>+91 989-255-0316</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-amber-400 w-4 h-4" />
                  <span>+91 882-894-8608</span>
                </div>

              </div>

              {/* EMAIL + LOCATION */}
              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <Mail className="text-amber-400 w-4 h-4" />
                  <span className="break-all">varshafarms23@gmail.com</span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="text-amber-400 w-4 h-4 mt-1" />
                  <span>Karul, Guhagar, Maharashtra</span>
                </div>

              </div>

            </div>

            {/* CTA */}
            <div className="mt-6 flex gap-3">

              <a
                href="tel:+919892550316"
                className="flex-1 text-center py-2 rounded-full bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919892550316"
                target="_blank"
                className="flex-1 text-center py-2 rounded-full border border-amber-500 text-amber-200 hover:bg-amber-500 hover:text-black text-sm font-medium transition"
              >
                WhatsApp
              </a>

            </div>

          </div>

        </div>

        {/* MAP */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-white/10">
          <iframe
            className="w-full h-44 md:h-52"
            loading="lazy"
            src="https://www.google.com/maps?q=Varsha+Farm+House,+Karul,+Guhagar,+Maharashtra+415719&output=embed"
          />
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-amber-200/60 gap-3">

          <p>© {new Date().getFullYear()} Varsha Farm House</p>

          <div className="flex gap-5">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#gallery" className="hover:text-white transition">Gallery</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
