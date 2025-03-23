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
    <footer className="bg-amber-900 text-amber-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            {/* Logo added here */}
            <img
              src="/logo.jpg" // Update path if needed
              alt="Varsha Farm House Logo"
              className="h-16 w-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-4">Varsha Farm House</h3>
            <p className="mb-4">
              Experience the charm of countryside living with modern amenities
              and delicious farm-to-table cuisine.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61550689064644"
                className="hover:text-white transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/varsha_farm_house"
                className="hover:text-white transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Amenities", "Dishes", "Gallery"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col w-full">
                  <span>Karul, Guhagar, Maharashtra</span>
                  <div className="mt-2 w-full max-w-md">
                    <iframe
                      className="w-32 h-24 sm:w-56 sm:h-28 xs:w-24 xs:h-24 rounded-lg"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps?q=Varsha+Farm+House,+Karul,+Guhagar,+Maharashtra+415719&output=embed"
                    ></iframe>
                  </div>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span className="whitespace-pre-line">
                  +91 989-255-0316 {"\n"} +91 882-894-8608
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <span>varshafarms23@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Varsha Farm House. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
