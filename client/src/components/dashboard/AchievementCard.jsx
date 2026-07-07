import { motion } from "framer-motion";
import { FaMedal, FaTree, FaAward } from "react-icons/fa";

const achievements = [
  {
    icon: <FaMedal />,
    title: "Eco Beginner",
    description: "Completed your first carbon calculation.",
  },
  {
    icon: <FaTree />,
    title: "Green Explorer",
    description: "Reduced emissions for 7 consecutive days.",
  },
  {
    icon: <FaAward />,
    title: "Carbon Saver",
    description: "Saved more than 100 kg CO₂.",
  },
];

export default function AchievementCard() {
  return (
    <motion.div
      className="achievement-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Achievements</h2>

      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <div className="achievement-item" key={index}>
            <div className="achievement-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
