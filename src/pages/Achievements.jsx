import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "StockTrackr Website",
    tech: "React",
    description: "Smart-website for Managing Stocks with Dynamic Watchlist, and responsive UI",
    github: "https://github.com/RajeshTatapudi/smart-stock-tracker",
    demo: "https://smart-stock-tracker-v5ft.vercel.app/",
  },
  {
    title: "Portfolio Website",
    tech: "React",
    description: "Modern portfolio website with animations, routing, and styled with Tailwind CSS.",
    github: "https://github.com/RajeshTatapudi/My_Portfolio",
    demo: "https://my-portfolio-beryl-chi-85.vercel.app/",
  },
  // {
  //   title: "Task Manager",
  //   tech: "Angular",
  //   description: "A task tracking app with user auth, CRUD operations, and responsive UI.",
  //   github: "https://github.com/RajeshTatapudi/angular-task-manager",
  //   demo: "https://angular-task-app.netlify.app",
  // },
  // {
  //   title: "Weather App",
  //   tech: "React",
  //   description: "Weather forecast app using OpenWeather API with dynamic backgrounds and charts.",
  //   github: "https://github.com/RajeshTatapudi/react-weather-app",
  //   demo: "https://weather-now-react.netlify.app",
  // },
  // {
  //   title: "E-Commerce Admin Panel",
  //   tech: "Angular",
  //   description: "Admin dashboard for product and order management with chart visualizations.",
  //   github: "https://github.com/RajeshTatapudi/angular-ecommerce-admin",
  //   demo: "https://ecommerce-admin-angular.netlify.app",
  // },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="bg-[#0f172a] text-white pt-18 pb-20 px-4 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-12 text-center text-cyan-400"
        >
          Projects & Achievements
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1e293b] hover:bg-[#273549] rounded-xl shadow-lg p-6 transition duration-300 flex flex-col justify-between"
            >
              <h3 className="text-2xl font-bold text-cyan-300 mb-2">{project.title}</h3>
              <p className="text-sm mb-3 text-gray-400">{project.tech}</p>
              <p className="text-gray-300 flex-grow">{project.description}</p>
              <div className="mt-5 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-white flex items-center gap-1 transition"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-white flex items-center gap-1 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Dynamic Bottom Divider */}
        <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: .7, scaleX: .8 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="h-[1px] w-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-600 rounded-full mt-16"
        /> 
    </section>
  );
};

export default Achievements;
