import { FaBell, FaMoon, FaSearch } from "react-icons/fa";

import { motion } from "framer-motion";

export default function Header() {
  const today = new Date();

  const greeting = () => {
    const hour = today.getHours();

    if (hour < 12) return "Good Morning";

    if (hour < 18) return "Good Afternoon";

    return "Good Evening";
  };

  return (
    <motion.div
      className="dashboard-header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <h1>{greeting()}, Arjun 👋</h1>

        <p>Welcome back. Let's build a greener future today.</p>
      </div>

      <div className="header-right">
        <div className="search-box">
          <FaSearch />

          <input placeholder="Search..." />
        </div>

        <button className="icon-btn">
          <FaMoon />
        </button>

        <button className="icon-btn">
          <FaBell />
        </button>

        <img
          className="profile"
          src="https://i.pravatar.cc/100"
          alt="profile"
        />
      </div>
    </motion.div>
  );
}
