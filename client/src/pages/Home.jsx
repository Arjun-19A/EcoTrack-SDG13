import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaChartLine,
  FaGlobeAsia,
  FaBolt,
  FaArrowRight,
} from "react-icons/fa";

import "../styles/home.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="container hero-grid">
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge">🌍 SDG 13 • Climate Action</span>

            <h1>
              Measure your
              <span> Carbon Footprint </span>
              and Make Every Day Greener.
            </h1>

            <p>
              EcoTrack helps individuals understand their daily carbon emissions
              through transportation, electricity usage and lifestyle habits
              while suggesting practical ways to reduce environmental impact.
            </p>

            <div className="hero-buttons">
              <Link className="secondary-btn" to="/calculator">
                Start Tracking
              </Link>

              <Link className="primary-btn" to="/register">
                Create Account
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="planet">🌎</div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-card">
              <FaLeaf />

              <h3>Track Daily Emissions</h3>

              <p>
                Record transport, electricity and daily activities to calculate
                your CO₂ emissions.
              </p>
            </div>

            <div className="feature-card">
              <FaChartLine />

              <h3>Smart Dashboard</h3>

              <p>
                Beautiful analytics help visualize your environmental impact
                over time.
              </p>
            </div>

            <div className="feature-card">
              <FaBolt />

              <h3>Personalized Eco Tips</h3>

              <p>
                Receive recommendations that help reduce your carbon footprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section why">
        <div className="container why-grid">
          <div>
            <h2 className="title">Why EcoTrack?</h2>

            <p className="subtitle">
              Millions of people unknowingly contribute to climate change
              through everyday activities. EcoTrack transforms complex
              environmental data into easy-to-understand insights, empowering
              users to make sustainable choices.
            </p>
          </div>

          <div className="stats">
            <div className="stat">
              <h2>98%</h2>

              <p>Users become more aware of their emissions.</p>
            </div>

            <div className="stat">
              <h2>30%</h2>

              <p>Potential reduction through sustainable habits.</p>
            </div>

            <div className="stat">
              <h2>13</h2>

              <p>Supports United Nations SDG 13.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <FaGlobeAsia className="globe" />

          <h2>Together We Can Reduce Carbon Emissions.</h2>

          <p>
            Join EcoTrack today and start making smarter environmental
            decisions.
          </p>

          <Link className="btn" to="/register">
            Get Started
            <FaArrowRight />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
