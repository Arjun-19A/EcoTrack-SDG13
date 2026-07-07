import { motion } from "framer-motion";

import "../styles/auth.css";

export default function AuthLayout({
  title,

  subtitle,

  children,
}) {
  return (
    <div className="auth-page">
      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>{title}</h1>

        <p>{subtitle}</p>

        {children}
      </motion.div>
    </div>
  );
}
