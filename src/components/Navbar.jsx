import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = ["HOME", "ABOUT", "PROJECTS", "RESUME", "CONTACT"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#111] text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-cyan-400 tracking-wide">RAJESH</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {sections.map((section) => (
            <Link
              key={section}
              to={section.toLowerCase()}
              smooth={false}
              duration={500}
              offset={-80}
              className="cursor-pointer text-base font-bold hover:text-cyan-200 transition-colors"
            >
              {section}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <X
              size={28}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer transition-transform duration-200 hover:scale-110"
            />
          ) : (
            <Menu
              size={28}
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer transition-transform duration-200 hover:scale-110"
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111] px-6 pb-4 space-y-4 text-base font-medium flex flex-col items-start">
          {sections.map((section) => (
            <Link
              key={section}
              to={section.toLowerCase()}
              smooth={false}
              duration={500}
              offset={-80}
              onClick={() => setMenuOpen(false)} // closes menu on link click
              className="cursor-pointer hover:text-cyan-400 transition-colors"
            >
              {section}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
