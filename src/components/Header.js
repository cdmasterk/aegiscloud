import { useEffect, useState } from "react";

export default function Header() {
  const [time, setTime] = useState(new Date());
  const [activeUsers, setActiveUsers] = useState(120); // starting number

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate active users updating every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers((prev) => {
        let variation = Math.floor(Math.random() * 10 - 5); // random -5 to +4
        return Math.max(100, prev + variation); // don’t drop below 100
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#ffffff",
    padding: "10px 20px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
    borderBottom: "1px solid #e6e6e6",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const statusStyle = {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    fontSize: "14px",
  };

  const statusDot = (color) => ({
    display: "inline-block",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: color,
    marginRight: "6px",
  });

  return (
    <div style={headerStyle}>
      {/* Left: Logo */}
      <div style={{ fontWeight: "bold", fontSize: "18px", color: "#0a1f44" }}>
        Aegis Cloud
      </div>

      {/* Center: Date, Time, Cloud Status, Active Users */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ fontSize: "14px", color: "#555" }}>
          {time.toLocaleDateString()} {time.toLocaleTimeString()}
        </div>
        <div style={statusStyle}>
          <span><span style={statusDot("green")}></span>Azure</span>
          <span><span style={statusDot("green")}></span>AWS</span>
          <span><span style={statusDot("red")}></span>GCP</span>
          <span>👥 Active Users: <b>{activeUsers}</b></span>
        </div>
      </div>

      {/* Right: Notifications + User */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <span style={{ fontSize: "18px", cursor: "pointer" }}>🔔</span>
        <div style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          background: "#0a1f44",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold"
        }}>
          K
        </div>
      </div>
    </div>
  );
}
