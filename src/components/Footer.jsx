// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 text-sm text-center py-4 border-t border-cyan-700/20">
      <p>
        © {new Date().getFullYear()} Rajesh Tatapudi. All rights reserved. |
        Built with ❤️ using React, Tailwind CSS & ChatGPT.
      </p>
    </footer>
  );
};

export default Footer;
