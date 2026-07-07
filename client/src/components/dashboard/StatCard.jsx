import { motion } from "framer-motion";

export default function StatCard({
  title,

  value,

  change,

  icon,

  color,
}) {
  return (
    <motion.div
      className={`stat-card ${color}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -8,

        scale: 1.02,
      }}
    >
      <div className="stat-top">
        <div>
          <p>{title}</p>

          <h2>{value}</h2>
        </div>

        <div className="stat-icon">{icon}</div>
      </div>

      <span>
        {change}
        this week
      </span>
    </motion.div>
  );
}
