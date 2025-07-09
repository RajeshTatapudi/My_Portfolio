// src/components/ParticlesBackground.jsx
import React from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "#0f172a" } },
        fpsLimit: 60,
        interactivity: {
          events: { onClick: { enable: false }, onHover: { enable: false } },
        },
        particles: {
          color: { value: "#22d3ee" },
          links: {
            enable: true,
            color: "#22d3ee",
            distance: 130,
            opacity: 0.25,
            width: 1,
          },
          move: { enable: true, speed: 1 },
          number: { value: 40 },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: 0.4 },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
