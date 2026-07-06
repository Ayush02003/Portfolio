// import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certificates" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <header className="relative z-50 px-6 py-7">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <a
          href="#"
          className="text-white text-2xl font-black cursor-pointer"
        >
          <span className="text-primary">&lt;</span>
          Ayush
          <span className="text-primary"> /&gt;</span>
        </a>


        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-10">

          <ul className="flex gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="
                  text-gray-300
                  hover:text-white
                  text-base font-medium
                  transition-colors
                  cursor-pointer"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>


          <a
            href="#contact"
            className="
            bg-primary
            text-white px-6 py-2.5 rounded-lg
            text-base font-semibold
            cursor-pointer
            hover:scale-105
            hover:shadow-[0_0_20px_rgba(6,162,206,0.6)]
            transition-all duration-300"
          >
            Contact Me
          </a>

        </nav>


        {/* Mobile Icon */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

      </div>


      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="
          fixed inset-0
          bg-black/60 backdrop-blur-sm
          md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}


      {/* Mobile Menu */}
      <div
        className={`
        fixed top-0 right-0
        h-full w-80
        bg-[#111927]
        z-50
        transition-transform duration-300
        md:hidden
        p-8 flex flex-col
        ${
          isMenuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        <button
          className="self-end text-white mb-10 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={32} />
        </button>


        <ul className="flex flex-col gap-8">

          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="
                text-gray-300
                hover:text-white
                text-xl font-semibold
                transition-colors
                cursor-pointer"
              >
                {item.name}
              </a>
            </li>
          ))}


          <li className="pt-6">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="
              block text-center
              w-full bg-primary
              text-white py-4 rounded-xl
              text-lg font-bold
              cursor-pointer
              hover:scale-105
              hover:shadow-[0_0_20px_rgba(6,162,206,0.6)]
              transition-all duration-300"
            >
              Contact Me
            </a>
          </li>

        </ul>

      </div>
    </header>
  );
};

export default Header;