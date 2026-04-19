  "use client";

  import { useEffect, useState } from "react";
  import { Menu, X, Phone } from "lucide-react";

  export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navItems = ["home", "about", "amenities", "dishes", "gallery"];

    // Scroll spy logic
    useEffect(() => {
      const handleScroll = () => {
        const sections = navItems.map((id) =>
          document.getElementById(id)
        );

        const scrollPosition = window.scrollY + 150;

        sections.forEach((section) => {
          if (!section) return;

          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        });
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 py-2">

        {/* Navbar Container */}
        <div className="w-full max-w-5xl bg-white/70 backdrop-blur-xl border border-amber-100 shadow-lg rounded-full px-5 py-3 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="w-9 h-9 rounded-full object-cover shadow"
            />
            <span className=" text-amber-900 font-bold text-lg">
              Varsha Farm House
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item;

              return (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`relative text-sm font-medium transition ${
                    isActive ? "text-amber-600" : "text-amber-900"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}

                  {/* Active underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-amber-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <a
            href="tel:+919892550316"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-amber-600 text-white text-sm font-medium hover:bg-amber-700 transition shadow-md"
          >
            <Phone size={16} />
            Book Now
          </a>

          {/* Mobile Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-amber-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full px-4">

            <div className="bg-white/95 backdrop-blur-xl border border-amber-100 rounded-2xl shadow-xl p-5 flex flex-col gap-3">

              {navItems.map((item) => {
                const isActive = activeSection === item;

                return (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`py-2 border-b transition font-medium ${
                      isActive
                        ? "text-amber-600 border-amber-500"
                        : "text-amber-900 border-amber-50"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                );
              })}

              {/* CTA */}
              <a
                href="tel:+919892550316"
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-amber-600 text-white font-medium shadow-md"
              >
                <Phone size={16} />
                Book Now
              </a>

            </div>
          </div>
        )}

      </header>
    );
  }
