import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const cloudSpendData = [
  { month: "Jan", Azure: 4000, AWS: 3500, GCP: 1500 },
  { month: "Feb", Azure: 4200, AWS: 3600, GCP: 1800 },
  { month: "Mar", Azure: 4600, AWS: 3900, GCP: 1950 },
  { month: "Apr", Azure: 4800, AWS: 4200, GCP: 2200 },
  { month: "May", Azure: 4700, AWS: 4100, GCP: 2100 },
];

export default function Cost() {
  return (
    <div>
      <h1>Cost Optimization Dashboard</h1>
      <p>Track multi-cloud spend and identify savings opportunities.</p>

      {/* Summary Cards */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div className="card" style={{ flex: 1, textAlign: "center" }}>
          <h3>Azure</h3>
          <p style={{ fontSize: "22px", fontWeight: "bold", color: "#0072c6" }}>$4,700</p>
          <small>May 2025</small>
        </div>
        <div className="card" style={{ flex: 1, textAlign: "center" }}>
          <h3>AWS</h3>
          <p style={{ fontSize: "22px", fontWeight: "bold", color: "#ff9900" }}>$4,100</p>
          <small>May 2025</small>
        </div>
        <div className="card" style={{ flex: 1, textAlign: "center" }}>
          <h3>GCP</h3>
          <p style={{ fontSize: "22px", fontWeight: "bold", color: "#34a853" }}>$2,100</p>
          <small>May 2025</small>
        </div>
      </div>

      {/* Multi-cloud Spend Chart */}
      <div className="card" style={{ marginTop: "30px" }}>
        <h3>Multi-Cloud Spend Trend</h3>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart data={cloudSpendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="Azure" stackId="1" stroke="#0072c6" fill="#0072c6" fillOpacity={0.4} />
              <Area type="monotone" dataKey="AWS" stackId="1" stroke="#ff9900" fill="#ff9900" fillOpacity={0.4} />
              <Area type="monotone" dataKey="GCP" stackId="1" stroke="#34a853" fill="#34a853" fillOpacity={0.4} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Savings Insights */}
      <div className="card" style={{ marginTop: "30px" }}>
        <h3>AI Savings Insights</h3>
        <ul>
          <li>🔹 Resize 12 Azure VMs → Save <b>$1,200/month</b></li>
          <li>🔹 Enable AWS S3 lifecycle → Save <b>$600/month</b></li>
          <li>🔹 Consolidate idle GCP instances → Save <b>$400/month</b></li>
        </ul>
        <p style={{ marginTop: "10px", fontWeight: "bold", color: "#28a745" }}>
          Total Potential Savings: $2,200/month
        </p>
      </div>

      {/* Highlights */}
      <div className="card" style={{ marginTop: "30px" }}>
        <h3>Highlights</h3>
        <ul>
          <li>💡 VMs contribute 65% of Azure spend</li>
          <li>💡 AWS costs trending +15% in last 3 months</li>
          <li>💡 GCP still only 20% of total spend</li>
        </ul>
      </div>
    </div>
  );
}
