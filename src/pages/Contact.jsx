import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_yqrzaj7",
        "template_ee74jpf",
        form.current,
        "Nq7b0jtnBW4IP_Ltd"
      )
      .then(() => {
        toast.success("✅ Message sent successfully!");
        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        toast.error("❌ Failed to send message. Try again.");
        console.error("EmailJS error:", error);
        setLoading(false);
      });


  };

  return (
    <section id="contact" className="bg-[#0f172a] text-white pt-18 pb-20 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-8 text-center text-cyan-400"
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-xl" />
              <span className="text-gray-300">rajeshtatapudi1819@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-cyan-400 text-xl" />
              <span className="text-gray-300">+91 91823 27043</span>
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-cyan-400 text-xl" />
              <a
                href="https://linkedin.com/in/rajesh-tatapudi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaGithub className="text-cyan-400 text-xl" />
              <a
                href="https://github.com/RajeshTatapudi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:underline"
              >
                GitHub Profile
              </a>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#1e293b] p-6 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full p-2 rounded bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="from_email"
                required
                className="w-full p-2 rounded bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full p-2 rounded bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded transition font-semibold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
