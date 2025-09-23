import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const savingsData = [
  { category: "VMs", savings: 1250 },
  { category: "Storage", savings: 600 },
  { category: "Security", savings: 400 },
];

export default function AI() {
  return (
    <div>
      <h1>AI Recommendations Dashboard</h1>
      <p>Leverage AI insights to reduce costs and risks across your cloud.</p>

      {/* KPI Summary */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div className="card" style={{ flex: 1, textAlign: "center" }}>
          <h3>Total Potential Savings</h3>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#28a745" }}>
            $2,250 / month
          </p>
        </div>
        <div className="card" style={{ flex: 1, textAlign: "center" }}>
          <h3>Risk Reduction</h3>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#0a1f44" }}>
            18% ↓
          </p>
        </div>
        <div className="card" style={{ flex: 1, textAlign: "center" }}>
          <h3>AI Confidence</h3>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#ff9900" }}>
            92%
          </p>
        </div>
      </div>

      {/* Savings by Category Chart */}
      <div className="card" style={{ marginTop: "30px" }}>
        <h3>Savings by Category</h3>
        <div style={{ width: "100%", height: 250 }}>
          <ResponsiveContainer>
            <BarChart data={savingsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="savings" fill="#0a1f44" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Recommendation Cards */}
      <div className="card" style={{ marginTop: "30px" }}>
        <h3>Recommendations</h3>

        <div className="card" style={{ marginBottom: "15px" }}>
          <h4>🔹 Resize VM in RG-X</h4>
          <p>Save approx <b>$1,250/month</b></p>
          <button className="btn btn-dark" style={{ marginRight: "10px" }}>Apply Fix</button>
          <button className="btn btn-outline-dark">Ignore</button>
        </div>

        <div className="card" style={{ marginBottom: "15px" }}>
          <h4>🔹 Enable Blob Lifecycle Policy</h4>
          <p>Reduce storage by <b>20%</b> → save $600/month</p>
          <button className="btn btn-dark" style={{ marginRight: "10px" }}>Apply Fix</button>
          <button className="btn btn-outline-dark">Ignore</button>
        </div>

        <div className="card">
          <h4>🔹 Restrict SQL Public Access</h4>
          <p>Improves security posture by reducing attack surface</p>
          <button className="btn btn-dark" style={{ marginRight: "10px" }}>Apply Fix</button>
          <button className="btn btn-outline-dark">Ignore</button>
        </div>
      </div>
    </div>
  );
}
