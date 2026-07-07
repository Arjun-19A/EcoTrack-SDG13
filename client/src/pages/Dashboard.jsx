import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import StatCard from "../components/dashboard/StatCard";
import CarbonChart from "../components/dashboard/CarbonChart";
import ProgressCard from "../components/dashboard/ProgressCard";
import EcoTips from "../components/dashboard/EcoTips";
import AchievementCard from "../components/dashboard/AchievementCard";
import RecentActivity from "../components/dashboard/RecentActivity";
import { FaLeaf, FaBolt, FaTree, FaChartLine } from "react-icons/fa";

import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <Header />

        <section className="stats-grid">
          <StatCard
            title="Today's Carbon"
            value="14.8 kg"
            change="+8%"
            icon={<FaChartLine />}
            color="green"
          />

          <StatCard
            title="Electricity"
            value="8.4 kWh"
            change="-3%"
            icon={<FaBolt />}
            color="yellow"
          />

          <StatCard
            title="Trees Saved"
            value="18"
            change="+2"
            icon={<FaTree />}
            color="blue"
          />

          <StatCard
            title="Eco Score"
            value="84%"
            change="+12%"
            icon={<FaLeaf />}
            color="purple"
          />
        </section>

        <section className="dashboard-grid">
          <CarbonChart />

          <ProgressCard />
        </section>

        <section className="dashboard-grid">
          <RecentActivity />

          <EcoTips />
        </section>

        <AchievementCard />
      </main>
    </div>
  );
}
