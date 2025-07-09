import React, { useEffect, useState } from "react";
import Loader from "./pages/Loader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2500); // Show loader for 1.6s
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-[#1e1e2f]">
      {loading ? (
        <Loader />
      ) : (
        <div className="fade-in transition-opacity duration-700 ease-in">
          <Navbar />
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="projects"><Achievements /></section>
          <section id="resume"><Resume /></section>
          <section id="contact"><Contact /></section>
        </div>
      )}
    </div>
  );
}

export default App;
