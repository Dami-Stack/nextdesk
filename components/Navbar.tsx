import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const NAV_BG = "#E94A3F";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className="w-full z-50 fixed top-0"
      style={{ backgroundColor: NAV_BG }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={40}
              className="w-20 h-10 sm:w-16 sm:h-8"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <button
              onClick={() => handleScrollTo("about")}
              className="text-white font-medium hover:font-bold "
            >
              About Us
            </button>
            <button
              onClick={() => handleScrollTo("donate")}
              className="text-white font-medium hover:font-bold"
            >
              Get Involved
            </button>
            <button
              onClick={() => handleScrollTo("donate")}
              className="bg-white text-[#E94A3F] font-bold px-4 py-2 rounded-full shadow hover:bg-gray-100 transition"
            >
              DONATE
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-[#E94A3F] px-6 pt-4 pb-6 transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ position: "absolute", width: "100%" }}
      >
        <nav className="flex flex-col items-end space-y-4">
          <button
            onClick={() => handleScrollTo("about")}
            className="text-white font-medium text-lg hover:font-bold"
          >
            About Us
          </button>
          <button
            onClick={() => handleScrollTo("donate")}
            className="text-white font-medium text-lg hover:font-bold"
          >
            Get Involved
          </button>
          <button
            onClick={() => handleScrollTo("donate")}
            className="bg-white text-[#E94A3F] font-bold px-5 py-2 rounded-full shadow hover:bg-gray-100 transition"
          >
            DONATE
          </button>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
