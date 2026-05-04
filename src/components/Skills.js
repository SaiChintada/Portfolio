import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Skills</h2>
      <p>React, Python, FastAPI, SQL, MongoDB, Git</p>
    </motion.section>
  );
}

export default Skills;