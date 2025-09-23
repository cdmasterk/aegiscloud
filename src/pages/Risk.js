import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const riskScoreData = [
  { name: "Secure", value: 72 },
  { name: "Risk", value: 28 },
];
const COLORS = ["#28a745", "#d9534f"];

const riskCategoryData = [
  { category: "Identity", score: 65 },
  { category: "Network", score: 58 },
  { category: "Compliance", score: 72 },
  { category: "Vendors", score: 45 },
];

export default function Risk() {
  return (
    <div>
      <h1>Risk & Compliance Overview</h1>
      <p>Monitor enterprise risk posture across categories and vendors.</p>

      {/* KPI Summary */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div className="card" style={{ flex: 1, textAlign: "center" }}>
          <h3>Critical Risks</h3>
          <p style={{ fontSize: "26px", fontWeight: "bold", color: "#d9534f" }}>7</p>
        </div>
        <div className="card" style={{ flex: 1, textAlign: "center" }}>
          <h3>Open Issues</h3>
          <p style={{ fontSize: "26px", fontWeight: "bold", color: "#ff9900" }}>19</p>
        </div>
        <div className="card" style={{ flex: 1, textAlign: "center" }}>
          <h3>Mitigations in Progress</h3>
          <p style={{ fontSize: "26px", fontWeight: "bold", color: "#0072c6" }}>12</p>
        </div>
      </div>

      {/* Risk Score Gauge */}
      <div className="card" style={{ marginTop: "30px" }}>
        <h3>Overall Risk Score</h3>
        <div style={{ width: "100%", height: 250 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={riskScoreData} dataKey="value" outerRadius={100} label>
                {riskScoreData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <p style={{ textAlign: "center", fontSize: "18px", marginTop: "10px" }}>
            Current Score: <b>72%</b> (Improvement Target: 85%)
          </p>
        </div>
      </div>

      {/* Risk by Category */}
      <div className="card" style={{ marginTop: "30px" }}>
        <h3>Risk by Category</h3>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={riskCategoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#0a1f44" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Risk Insights */}
      <div className="card" style={{ marginTop: "30px" }}>
        <h3>AI Insights</h3>
        <ul>
          <li>🔹 Applying vendor risk framework → Risk ↓ <b>10%</b></li>
          <li>🔹 Enforcing network segmentation → Risk ↓ <b>7%</b></li>
          <li>🔹 Training identity governance → Risk ↓ <b>5%</b></li>
        </ul>
        <p style={{ marginTop: "10px", fontWeight: "bold", color: "#28a745" }}>
          Total Potential Risk Reduction: 22%
        </p>
      </div>

      {/* Highlights */}
      <div className="card" style={{ marginTop: "30px" }}>
        <h3>Highlights</h3>
        <ul>
          <li>✅ Strong Identity Management controls in place</li>
          <li>❌ Vendor risk assessments incomplete</li>
          <li>⚠️ Network segmentation partially applied</li>
          <li>✅ Compliance with SOC2 and GDPR progressing well</li>
        </ul>
      </div>
    </div>
  );
}
