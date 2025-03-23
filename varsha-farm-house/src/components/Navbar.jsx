"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logo.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="text-2xl font-bold text-amber-800">
            Varsha Farm House
          </span>
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          {["Home", "About", "Amenities", "Dishes", "Gallery"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-amber-900 hover:text-amber-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {["Home", "About", "Amenities", "Dishes", "Gallery"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-amber-900 hover:text-amber-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
