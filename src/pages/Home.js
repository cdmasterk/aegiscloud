import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import ProgressBar from "react-bootstrap/ProgressBar";

const spendData = [
  { month: "Jan", spend: 9000 },
  { month: "Feb", spend: 11000 },
  { month: "Mar", spend: 12450 },
  { month: "Apr", spend: 13200 },
];

// Initial data for Active Users chart
const initialUserData = [
  { time: "10:00", users: 120 },
  { time: "10:05", users: 125 },
  { time: "10:10", users: 118 },
  { time: "10:15", users: 130 },
];

export default function Home() {
  const [userData, setUserData] = useState(initialUserData);

  // Simulate adding new points to active users trend every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setUserData((prevData) => {
        const newUsers =
          prevData[prevData.length - 1].users + Math.floor(Math.random() * 10 - 5);
        const now = new Date();
        const newPoint = {
          time: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          users: Math.max(100, newUsers), // never below 100
        };
        return [...prevData.slice(-7), newPoint]; // keep last 8 points
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Welcome to Aegis Cloud</h1>
      <p>Your shield in the cloud — Secure. Govern. Optimize.</p>

      {/* Summary Widgets */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {/* Security Score */}
        <div className="card" style={{ flex: 1 }}>
          <h3>Security Score</h3>
          <ProgressBar now={82} label="82%" />
        </div>

        {/* Compliance */}
        <div className="card" style={{ flex: 1 }}>
          <h3>Compliance Readiness</h3>
          <p>SOC 2</p>
          <ProgressBar now={78} label="78%" />
          <p style={{ marginTop: "10px" }}>GDPR</p>
          <ProgressBar now={80} label="80%" />
        </div>

        {/* Audit Pack */}
        <div className="card" style={{ flex: 1, textAlign: "center" }}>
          <h3>Audit</h3>
          <button className="btn btn-dark">Download Audit Pack</button>
        </div>
      </div>

      {/* Spend Trend */}
      <div className="card" style={{ marginTop: "30px" }}>
        <h3>Monthly Spend Trend</h3>
        <div style={{ width: "100%", height: 250 }}>
          <ResponsiveContainer>
            <LineChart data={spendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="spend" stroke="#0a1f44" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Active Users Trend */}
      <div className="card" style={{ marginTop: "30px" }}>
        <h3>Active Users (Live Trend)</h3>
        <div style={{ width: "100%", height: 250 }}>
          <ResponsiveContainer>
            <LineChart data={userData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#28a745" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Recommendations Preview */}
      <div className="card" style={{ marginTop: "30px" }}>
        <h3>Top AI Recommendations</h3>
        <ul>
          <li>Resize VM in RG-X → Save $1,250/month</li>
          <li>Enable Blob Lifecycle Policy → Save $500/month</li>
          <li>Restrict SQL Public Access → Improve security</li>
        </ul>
        <button className="btn btn-outline-dark">View All</button>
      </div>
    </div>
  );
}
