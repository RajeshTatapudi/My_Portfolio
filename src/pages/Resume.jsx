import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaProjectDiagram, FaAward, FaCertificate, FaUserTie, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Resume = () => {
  return (
    <section
      id="resume"
      className="bg-[#0f172a] text-white pt-18 pb-20 px-4 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-10 text-center text-cyan-400"
        >
          My Resume
        </motion.h2>
        <div className="text-center mb-10">
          <a
            href="/Rajesh_Resume.pdf"
            download="Rajesh_Tatapudi_Resume"
            className="inline-block text-sm font-medium text-white bg-cyan-500 hover:text-white hover:bg-cyan-600 px-6 py-2 rounded-md shadow transition duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Contact */}
        <div className="text-center mb-10 text-gray-300 text-sm">
          <div className="flex justify-center gap-4 items-center flex-wrap">
            <FaEnvelope /> rajeshtatapudi1819@gmail.com
            <FaPhone /> +91-9182327043
            <SiLinkedin />
            <a
              href="https://linkedin.com/in/rajesh-tatapudi"
              target="_blank"
              className="hover:text-cyan-400"
            >
              LinkedIn
            </a>
            <SiGithub />
            <a
              href="https://github.com/RajeshTatapudi"
              target="_blank"
              className="hover:text-cyan-400"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Education */}
        <Section title="Education" icon={<FaGraduationCap />}>
          <Entry title="B.Tech – Computer Science and Engineering" subtitle="Narasaraopeta Engineering College (2022–2026)" description="CGPA: 7.90" />
          <Entry title="Intermediate – MPC" subtitle="Vagdevi Junior College (2020–2022)" description="Percentage: 75.9%" />
          <Entry title="SSC" subtitle="Infant Jesus High School (2019–2020)" description="Percentage: 92.5%" />
        </Section>

        {/* Skills */}
        <Section title="Skills" icon={<FaCode />}>
          <Entry title="Technical Skills" description="Python, JavaScript, Node.js, React.js, Angular, MySQL, MongoDB, HTML, CSS, AWS, Git, GitHub" />
          <Entry title="OpenAI" description="Prompt Engineering Fundamentals" />
          <Entry title="AI & Data Skills" description="Supervised Learning, Data Cleaning, Data Visualization, Basic Deep Learning" />
          <Entry title="Soft Skills" description="Leadership, Team Collaboration, Communication, Creativity, Problem Solving" />
        </Section>

        {/* Experience */}
        <Section title="Experience" icon={<FaUserTie />}>
          <Entry
            title="Python Full-Stack Intern"
            subtitle="SkillDzire (Virtual) | May – June 2025"
            description="Worked on backend with MySQL and frontend components using Python."
          />
        </Section>

        {/* Projects */}
        <Section title="Projects" icon={<FaProjectDiagram />}>
          <Entry
            title="Smart Stock Tracker"
            subtitle="React.js | Node.js | MySQL | Dec 2024 – Mar 2025"
            description="Built dynamic stock tracking dashboard with filters and real-time data. Role: Team Lead"
          />
          <Entry
            title="Online Voting Awareness Platform"
            subtitle="Angular | Node.js | MySQL | Jun – Nov 2024"
            description="Full-stack app promoting online voting awareness. Reused by peers. Role: Team Lead"
          />
        </Section>

        {/* Achievements */}
        <Section title="Achievements" icon={<FaAward />}>
          <Entry title="CODE ELITES – 1st Prize" subtitle="IT Department Coding Contest – Aug 2024" />
        </Section>

        {/* Certifications */}
        <Section title="Certifications" icon={<FaCertificate />}>
          <Entry title="Infosys Springboard" description="Python, MEAN Stack, AI & ML, Azure, GitHub, HTML/CSS/JS, Prompt Engineering" />
          <Entry title="NPTEL" description="The Joy of Python" />
          <Entry title="APSSDC" description="Python Programming, AWS Basics" />
        </Section>
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

const Section = ({ title, icon, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-10"
  >
    <h3 className="text-2xl text-cyan-300 font-semibold mb-4 flex items-center gap-2">
      {icon} {title}
    </h3>
    <div className="space-y-4">{children}</div>
  </motion.div>
);

const Entry = ({ title, subtitle, description }) => (
  <div>
    <h4 className="text-lg font-bold text-white">{title}</h4>
    {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
    {description && <p className="text-sm text-gray-300 mt-1">{description}</p>}
  </div>
);

export default Resume;
