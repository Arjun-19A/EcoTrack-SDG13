import { motion } from "framer-motion";
import { FaCar, FaBolt, FaBicycle, FaRecycle } from "react-icons/fa";

const activities = [
  {
    icon: <FaCar />,
    title: "Travel by Car",
    carbon: "6.2 kg CO₂",
  },
  {
    icon: <FaBolt />,
    title: "Electricity Usage",
    carbon: "3.8 kg CO₂",
  },
  {
    icon: <FaBicycle />,
    title: "Cycling",
    carbon: "-1.4 kg CO₂",
  },
  {
    icon: <FaRecycle />,
    title: "Recycling",
    carbon: "-0.8 kg CO₂",
  },
];

export default function RecentActivity() {
  return (
    <motion.div
      className="activity-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2>Recent Activities</h2>

      <div className="activity-list">
        {activities.map((item, index) => (
          <div className="activity-item" key={index}>
            <div className="activity-icon">{item.icon}</div>

            <div className="activity-info">
              <h4>{item.title}</h4>

              <span>{item.carbon}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
