import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import ProgressBar from "react-bootstrap/ProgressBar";
import Table from "react-bootstrap/Table";

const readinessData = [
  { name: "Compliant", value: 72 },
  { name: "Gaps", value: 28 },
];
const COLORS = ["#0a1f44", "#d9534f"];

export default function Compliance() {
  return (
    <div>
      <h1>Compliance Dashboard</h1>
      <p>Overall Readiness: <b>72%</b></p>

      {/* Readiness Gauge */}
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3>Compliance Readiness</h3>
        <div style={{ width: "100%", height: 250 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={readinessData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {readinessData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Framework Progress */}
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3>Framework Progress</h3>
        <p>SOC 2</p>
        <ProgressBar now={78} label="78%" />
        <p style={{ marginTop: "15px" }}>ISO 27001</p>
        <ProgressBar now={60} label="60%" />
        <p style={{ marginTop: "15px" }}>GDPR</p>
        <ProgressBar now={80} label="80%" />
      </div>

      {/* Framework Status Table */}
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3>Framework Status</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Framework</th>
              <th>Status</th>
              <th>Evidence Collected</th>
              <th>Last Audit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SOC 2</td>
              <td style={{ color: "green", fontWeight: "bold" }}>On Track</td>
              <td>78%</td>
              <td>Mar 2025</td>
            </tr>
            <tr>
              <td>ISO 27001</td>
              <td style={{ color: "orange", fontWeight: "bold" }}>Behind</td>
              <td>60%</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>GDPR</td>
              <td style={{ color: "green", fontWeight: "bold" }}>On Track</td>
              <td>80%</td>
              <td>2024</td>
            </tr>
          </tbody>
        </Table>
      </div>

      {/* Evidence Summary */}
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3>Audit Evidence Summary</h3>
        <ul>
          <li>✅ 145 documents uploaded</li>
          <li>⚠️ 32 missing evidence items</li>
          <li>📂 12 pending approvals</li>
        </ul>
      </div>

      {/* Upcoming Audits */}
      <div className="card">
        <h3>Upcoming Audits</h3>
        <ul>
          <li>📅 SOC 2 — May 15, 2025</li>
          <li>📅 ISO 27001 — July 1, 2025</li>
          <li>📅 GDPR Check — Sept 10, 2025</li>
        </ul>
      </div>
    </div>
  );
}
