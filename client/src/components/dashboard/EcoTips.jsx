import { motion } from "framer-motion";
import { FaLeaf, FaLightbulb, FaBus, FaTint } from "react-icons/fa";

const tips = [
  {
    icon: <FaBus />,
    title: "Use Public Transport",
    description:
      "Reduce CO₂ emissions by choosing buses or metro instead of personal vehicles.",
  },
  {
    icon: <FaLightbulb />,
    title: "Switch Off Appliances",
    description:
      "Turn off lights and electronics when not in use to save electricity.",
  },
  {
    icon: <FaTint />,
    title: "Save Water",
    description:
      "Conserving water also reduces the energy required for treatment and pumping.",
  },
  {
    icon: <FaLeaf />,
    title: "Plant More Trees",
    description: "Trees absorb carbon dioxide and improve air quality.",
  },
];

export default function EcoTips() {
  return (
    <motion.div
      className="tips-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Eco Tips</h2>

      <div className="tips-list">
        {tips.map((tip, index) => (
          <div className="tip-item" key={index}>
            <div className="tip-icon">{tip.icon}</div>

            <div>
              <h4>{tip.title}</h4>

              <p>{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
