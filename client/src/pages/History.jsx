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

  return (
    <div className="history-page">
      <h1>Carbon Footprint History</h1>

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
              <td>{new Date(item.createdAt).toLocaleDateString()}</td>

              <td>{item.transport} km</td>

              <td>{item.electricity} kWh</td>

              <td>{item.waste} kg</td>

              <td>{item.carbonFootprint.toFixed(2)} kg</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
