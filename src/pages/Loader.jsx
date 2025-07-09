// src/components/Loader.jsx
import React from "react";
import ParticlesBackground from "./ParticlesBackground";

const Loader = () => {
  return (
    <div className="h-screen w-full bg-[#0f172a] flex flex-col items-center justify-center relative overflow-hidden text-white">

      <ParticlesBackground />

      {/* Ambient Glows */}
      <div className="absolute w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse top-10 left-20"></div>
      <div className="absolute w-60 h-60 bg-purple-500 rounded-full blur-2xl opacity-10 animate-ping bottom-16 right-20"></div>

      {/* Gradient Animated Name */}
      <h1 className="relative z-20 text-4xl md:text-6xl font-bold tracking-wide bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent animate-fade-in">
        Rajesh Tatapudi
      </h1>

      <p className="relative z-10 mt-1 text-1xl text-gray-400 animate-fade-in delay-100">
        Preparing your experience...
      </p>
    </div>
  );
};

export default Loader;
