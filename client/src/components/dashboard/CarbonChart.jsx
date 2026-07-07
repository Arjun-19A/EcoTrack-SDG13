import { motion } from "framer-motion";

export default function StatCard({ title, value, change, color }) {
  return (
    <motion.div
      className={`stat-card ${color}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h4>{title}</h4>

      <h2>{value}</h2>

      <span>{change} this week</span>
    </motion.div>
  );
}
