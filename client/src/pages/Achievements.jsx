import "../styles/achievements.css";

import { FaMedal, FaTree, FaLeaf } from "react-icons/fa";

export default function Achievements() {
  const badges = [
    {
      icon: <FaLeaf />,
      title: "Eco Starter",
      desc: "Completed your first carbon calculation",
    },

    {
      icon: <FaTree />,
      title: "Tree Saver",
      desc: "Saved 50kg CO₂ emissions",
    },

    {
      icon: <FaMedal />,
      title: "Green Champion",
      desc: "Maintained eco habits for 30 days",
    },
  ];

  return (
    <div className="achievement-page">
      <h1>Your Achievements</h1>

      <div className="badge-grid">
        {badges.map((item, index) => (
          <div className="badge-card" key={index}>
            <div className="badge-icon">{item.icon}</div>

            <h2>{item.title}</h2>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
