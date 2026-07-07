import { NavLink } from "react-router-dom";
import {
  FaLeaf,
  FaChartPie,
  FaCalculator,
  FaHistory,
  FaAward,
  FaCog,
  FaSignOutAlt,
  FaUserCircle,
  FaChevronRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import { motion } from "framer-motion";

export default function Sidebar() {
  const navigate = useNavigate();

  const { logout } = useAuth();
  const menuItems = [
    {
      title: "Dashboard",
      icon: <FaChartPie />,
      path: "/dashboard",
    },

    {
      title: "Calculator",
      icon: <FaCalculator />,
      path: "/calculator",
    },

    {
      title: "History",
      icon: <FaHistory />,
      path: "/history",
    },

    {
      title: "Achievements",
      icon: <FaAward />,
      path: "/achievements",
    },

    {
      title: "Settings",
      icon: <FaCog />,
      path: "/settings",
    },
  ];

  return (
    <motion.aside
      className="sidebar"
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="sidebar-top">
        <div className="brand">
          <div className="brand-icon">
            <FaLeaf />
          </div>

          <div>
            <h2>EcoTrack</h2>

            <span>Climate Dashboard</span>
          </div>
        </div>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <div className="menu-left">
              {item.icon}

              <span>{item.title}</span>
            </div>

            <FaChevronRight className="arrow" />
          </NavLink>
        ))}
      </nav>

      <div className="eco-progress">
        <h4>🌱 Eco Goal</h4>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <p>74% completed this week</p>
      </div>

      <div className="sidebar-user">
        <FaUserCircle className="avatar" />

        <div>
          <h4>Arjun</h4>

          <span>Eco Explorer</span>
        </div>
      </div>

      <button
        className="logout-btn"
        onClick={() => {
          logout();

          navigate("/login");
        }}
      >
        <FaSignOutAlt />
        Logout
      </button>
    </motion.aside>
  );
}
