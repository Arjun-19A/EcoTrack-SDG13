import { useState } from "react";
import { motion } from "framer-motion";
import api from "../services/api";
import "../styles/calculator.css";

export default function Calculator() {
  const [form, setForm] = useState({
    transport: "",
    electricity: "",
    waste: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const calculateCarbon = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/activity", {
        transport: Number(form.transport),

        electricity: Number(form.electricity),

        waste: Number(form.waste),
      });

      setResult(res.data.carbonFootprint.toFixed(2));
    } catch (err) {
      alert("Please login first.");
    }
  };

  return (
    <div className="calculator-page">
      <motion.div
        className="calculator-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Carbon Footprint Calculator</h1>

        <p>Estimate your daily carbon emissions by entering your activities.</p>

        <form onSubmit={calculateCarbon}>
          <div className="form-group">
            <label>Travel Distance (km)</label>

            <input
              type="number"
              name="transport"
              value={form.transport}
              onChange={handleChange}
              placeholder="Example: 15"
              required
            />
          </div>

          <div className="form-group">
            <label>Electricity Used (kWh)</label>

            <input
              type="number"
              name="electricity"
              value={form.electricity}
              onChange={handleChange}
              placeholder="Example: 8"
              required
            />
          </div>

          <div className="form-group">
            <label>Waste Generated (kg)</label>

            <input
              type="number"
              name="waste"
              value={form.waste}
              onChange={handleChange}
              placeholder="Example: 2"
              required
            />
          </div>

          <button type="submit" className="calculate-btn">
            Calculate Footprint
          </button>
        </form>

        {result && (
          <motion.div
            className="result-card"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <h2>Your Carbon Footprint</h2>

            <h1>{result} kg CO₂</h1>

            <p>Lower values indicate a more sustainable lifestyle.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
