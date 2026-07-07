import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/history.css";

export default function History() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const res = await api.get("/activity");

      setActivities(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const totalRecords = activities.length;

  const totalCarbon = activities.reduce(
    (sum, item) => sum + item.carbonFootprint,

    0,
  );

  const averageCarbon = totalRecords
    ? (totalCarbon / totalRecords).toFixed(2)
    : 0;

  const lowestCarbon = totalRecords
    ? Math.min(...activities.map((item) => item.carbonFootprint)).toFixed(2)
    : 0;

  const highestCarbon = totalRecords
    ? Math.max(...activities.map((item) => item.carbonFootprint)).toFixed(2)
    : 0;

  return (
    <div className="history-page">
      <h1>Carbon Footprint History</h1>

      <div className="history-summary">
        <div className="summary-card">
          <h2>{totalRecords}</h2>

          <p>Total Records</p>
        </div>

        <div className="summary-card">
          <h2>{averageCarbon}</h2>

          <p>Average CO₂ (kg)</p>
        </div>

        <div className="summary-card">
          <h2>{lowestCarbon}</h2>

          <p>Lowest Emission</p>
        </div>

        <div className="summary-card">
          <h2>{highestCarbon}</h2>

          <p>Highest Emission</p>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>

            <th>Transport</th>

            <th>Electricity</th>

            <th>Waste</th>

            <th>Carbon</th>
          </tr>
        </thead>

        <tbody>
          {activities.map((item) => (
            <tr key={item._id}>
              <td>
                {new Date(item.createdAt).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </td>

              <td>{item.transport} km</td>

              <td>{item.electricity} kWh</td>

              <td>{item.waste} kg</td>

              <td>
                {item.carbonFootprint.toFixed(2)}
                kg
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
