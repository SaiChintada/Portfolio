import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="hero-content">
        <h1>Hi, I'm</h1>
        <h1 className="highlight">Sai Kiran</h1>

        <h2>Full Stack Developer</h2>

        <p>
          I build modern web applications using React, FastAPI, and databases.
          Passionate about creating scalable and user-friendly solutions.
        </p>

        <div className="hero-buttons">
          <a href="#">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;