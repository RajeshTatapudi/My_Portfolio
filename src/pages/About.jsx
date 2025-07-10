import React from "react";
import { SiOpenai } from "react-icons/si";
import {
  FaPython,
  FaAws,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaLeaf,
  FaCertificate
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiAngular, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { icon: <FaReact />, label: "Frontend (React, Angular)" },
  { icon: <FaNodeJs />, label: "Backend (Node, Express)" },
  { icon: <FaDatabase />, label: "Databases" },
  { icon: <FaLeaf />, label: "Full Stack Development" },
];

const certifications = [
  { icon: <FaPython />, label: "Python Developer" },
  { icon: <FaReact />, label: "MERN Stack Developer" },
  { icon: <SiAngular />, label: "MEAN Stack Developer" },
  { icon: <FaAws />, label: "AWS Cloud Practitioner" },
  { icon: <SiMysql />, label: "MySQL Database Management" },
  { icon: <SiMongodb />, label: "MongoDB Certified Developer" },
  { icon: <SiOpenai />, label: "Prompt Engineering" },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0f172a] text-white pt-18 pb-20 px-4 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-8 text-center text-cyan-400"
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-14"
        >
          I'm <span className="text-cyan-400 font-semibold">Rajesh</span>, a
          passionate full-stack developer who loves building responsive, scalable,
          and modern web applications using powerful tools like React, Node.js,
          Python, and AWS.
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.15 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#1e293b] hover:bg-[#273549] border border-cyan-700/20 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              <div className="text-4xl mb-3 text-cyan-400">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-white">
                {skill.label}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-cyan-300 mb-5">
            Certifications
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto text-gray-300">
            {certifications.map((cert, index) => (
              <li
                key={index}
                className="flex items-center gap-3 justify-center bg-[#1e293b] hover:bg-[#273549] py-3 px-4 rounded-xl transition duration-300 hover:text-cyan-400 shadow-md"
              >
                <span className="text-cyan-400 text-xl">{cert.icon}</span>
                {cert.label}
              </li>
            ))}
          </ul>
        </motion.div>
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

export default About;
