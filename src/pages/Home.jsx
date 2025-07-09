// src/pages/Home.jsx
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import profile from "../assets/profile.png";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "UI Designer",
        "React Developer",
        "Freelancer",
        "Open Source Contributor",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white flex items-center justify-center px-4 md:px-6 py-16">
      
      {/* Bottom Wavy SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
        <svg
          className="w-full h-32"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          >
          <defs>
            <linearGradient id="aboutGradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="50%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <path
            fill="url(#aboutGradient)"
            d="M0,160L30,165.3C60,171,120,181,180,197.3C240,213,300,235,360,240C420,245,480,235,540,224C600,213,660,203,720,213.3C780,224,840,256,900,245.3C960,235,1020,181,1080,165.3C1140,149,1200,171,1260,165.3C1320,160,1380,128,1410,112L1440,96V320H0Z"
          />
        </svg>


      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Text Section */}
        <div className="text-center md:text-left px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-cyan-400">Rajesh</span>
          </h1>

          {/* Typed Text */}
          <span
            ref={el}
            className="text-xl md:text-2xl font-semibold inline-block align-middle min-h-[2.5rem]"
          ></span>

          <p className="mt-6 text-gray-300 text-sm md:text-lg max-w-md mx-auto md:mx-0">
            Passionate about building modern, responsive, and accessible web
            experiences using React and the latest technologies.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center md:justify-end px-4">
          <div className="relative group">
            {/* Glowing ring */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300 animate-pulse"></div>

            {/* Image itself */}
            <img
              src={profile}
              alt="rajesh-profile"
              className="relative w-full max-w-[300px] sm:max-w-[300px] md:max-w-[300px] rounded-xl shadow-xl transition-transform duration-500 transform group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
