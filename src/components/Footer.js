import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      style={{ padding: "20px", textAlign: "center" }}
    >
      <p>© 2026 Sai Kiran</p>
    </motion.footer>
  );
}

export default Footer;