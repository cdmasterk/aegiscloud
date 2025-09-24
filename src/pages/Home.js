import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const COLORS = ["#0a1f44", "#d9534f"];

const complianceData = [
  { name: "Compliant", value: 82 },
  { name: "Gaps", value: 18 },
];

const spendTrendData = [
  { month: "Jan", spend: 9000 },
  { month: "Feb", spend: 9400 },
  { month: "Mar", spend: 10100 },
  { month: "Apr", spend: 9800 },
  { month: "May", spend: 10500 },
];

const riskTrendData = [
  { month: "Jan", risk: 28 },
  { month: "Feb", risk: 25 },
  { month: "Mar", risk: 22 },
  { month: "Apr", risk: 20 },
  { month: "May", risk: 18 },
];

// Sparkline datasets
const sparkData = {
  resizeVM: [
    { t: "Week 1", val: 1400 },
    { t: "Week 2", val: 1350 },
    { t: "Week 3", val: 1300 },
    { t: "Week 4", val: 1250 },
  ],
  s3Policy: [
    { t: "Week 1", val: 800 },
    { t: "Week 2", val: 700 },
    { t: "Week 3", val: 650 },
    { t: "Week 4", val: 600 },
  ],
  sqlAccess: [
    { t: "Week 1", val: 10 },
    { t: "Week 2", val: 9 },
    { t: "Week 3", val: 8 },
    { t: "Week 4", val: 7 },
  ],
  oracleRisk: [
    { t: "Week 1", val: 70 },
    { t: "Week 2", val: 60 },
    { t: "Week 3", val: 55 },
    { t: "Week 4", val: 50 },
  ],
};

export default function Home() {
  const [activeUsers, setActiveUsers] = useState(120);
  const [feedIndex, setFeedIndex] = useState(0);

  const aiFeed = [
    {
      text: "🔹 Resize 12 Azure VMs → Save $1,200/mo",
      data: sparkData.resizeVM,
      color: "#28a745",
      label: "Cost Savings Trend ($)",
    },
    {
      text: "🔹 Apply S3 lifecycle policy → Save $600/mo",
      data: sparkData.s3Policy,
      color: "#0072c6",
      label: "Storage Optimization ($)",
    },
    {
      text: "🔹 Restrict SQL Public Access → Risk ↓ 5%",
      data: sparkData.sqlAccess,
      color: "#d9534f",
      label: "Risk Reduction (%)",
    },
    {
      text: "🔹 Vendor Oracle flagged high risk",
      data: sparkData.oracleRisk,
      color: "#ff9900",
      label: "Vendor Risk Score",
    },
  ];

  // Simulate live active users
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers((prev) => {
        let variation = Math.floor(Math.random() * 10 - 5);
        return Math.max(100, prev + variation);
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Cycle through AI feed
  useEffect(() => {
    const ticker = setInterval(() => {
      setFeedIndex((prev) => (prev + 1) % aiFeed.length);
    }, 5000);
    return () => clearInterval(ticker);
  }, [aiFeed.length]);

  return (
    <div>
      <h1>Welcome to Aegis Cloud</h1>
      <p>AI-powered compliance & risk management platform</p>

      {/* Top KPIs */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {/* Compliance Score */}
        <div className="card" style={{ flex: 1, textAlign: "center" }}>
          <h3>Compliance Readiness</h3>
          <div style={{ width: "100%", height: 200 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={complianceData} dataKey="value" outerRadius={80} label>
                  {complianceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p>
            <b>82%</b> Compliant
          </p>
        </div>

        {/* Active Users */}
        <div className="card" style={{ flex: 1, textAlign: "center" }}>
          <h3>Active Users</h3>
          <p style={{ fontSize: "28px", fontWeight: "bold" }}>{activeUsers}</p>
          <p>Monitored in real-time</p>
        </div>

        {/* AI-Detected Risks */}
        <div className="card" style={{ flex: 1, textAlign: "center" }}>
          <h3>AI-Detected Risks</h3>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#d9534f" }}>
            7 Critical
          </p>
          <p>22% Reduction Possible</p>
        </div>
      </div>

      {/* AI Activity Feed with Graph */}
      <div
        className="card"
        style={{
          marginTop: "30px",
          padding: "20px",
          background: "#0a1f44",
          color: "white",
          fontSize: "18px",
          fontWeight: "500",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ marginBottom: "15px", color: "#28a745" }}>AI Insights Feed</h3>
        <div
          style={{
            height: "160px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "white",
            borderRadius: "6px",
            padding: "12px 16px",
          }}
        >
          {/* Insight Text */}
          <div style={{ flex: 2 }}>
            <p
              style={{
                color: "#0a1f44",
                fontWeight: "600",
                fontSize: "16px",
                marginBottom: "6px",
              }}
            >
              {aiFeed[feedIndex].text}
            </p>
            <p style={{ fontSize: "13px", color: "#555" }}>
              {aiFeed[feedIndex].label}
            </p>
          </div>

          {/* Graph */}
          <div style={{ flex: 1.5, height: "120px" }}>
            <ResponsiveContainer>
              <LineChart data={aiFeed[feedIndex].data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="t" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    background: "white",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="val"
                  stroke={aiFeed[feedIndex].color}
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Trends */}
      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        <div className="card" style={{ flex: 1 }}>
          <h3>Multi-Cloud Spend Trend</h3>
          <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
              <LineChart data={spendTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="spend" stroke="#0a1f44" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card" style={{ flex: 1 }}>
          <h3>Risk Trend</h3>
          <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
              <LineChart data={riskTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="risk" stroke="#d9534f" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
