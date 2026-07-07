import { motion } from "framer-motion";

export default function ProgressCard() {
  const progress = 74;

  return (
    <motion.div
      className="progress-card"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Weekly Goal</h2>

      <p>Reduce your weekly carbon emission below</p>

      <h1>100 kg CO₂</h1>

      <div className="progress-circle">
        <svg width="180" height="180">
          <circle
            cx="90"
            cy="90"
            r="75"
            stroke="#e5e7eb"
            strokeWidth="12"
            fill="none"
          />

          <circle
            cx="90"
            cy="90"
            r="75"
            stroke="#16a34a"
            strokeWidth="12"
            fill="none"
            strokeDasharray="471"
            strokeDashoffset={471 - (471 * progress) / 100}
            strokeLinecap="round"
            transform="rotate(-90 90 90)"
          />
        </svg>

        <div className="progress-text">
          <h2>{progress}%</h2>
          <span>Completed</span>
        </div>
      </div>

      <div className="goal-info">
        <div>
          <h4>Current</h4>

          <span>74 kg</span>
        </div>

        <div>
          <h4>Remaining</h4>

          <span>26 kg</span>
        </div>
      </div>
    </motion.div>
  );
}
