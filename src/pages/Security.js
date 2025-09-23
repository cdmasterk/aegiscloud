import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import Table from "react-bootstrap/Table";

const securityScoreData = [
  { name: "Passed", value: 82 },
  { name: "Gaps", value: 18 },
];
const COLORS = ["#0a1f44", "#d9534f"];

const alertsData = [
  { day: "Mon", alerts: 5 },
  { day: "Tue", alerts: 8 },
  { day: "Wed", alerts: 6 },
  { day: "Thu", alerts: 10 },
  { day: "Fri", alerts: 4 },
  { day: "Sat", alerts: 7 },
  { day: "Sun", alerts: 6 },
];

export default function Security() {
  return (
    <div>
      <h1>Security Overview</h1>
      <p>Current Security Score: <b>82%</b></p>

      {/* Security Score Pie */}
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3>Security Score</h3>
        <div style={{ width: "100%", height: 250 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={securityScoreData} dataKey="value" outerRadius={100} label>
                {securityScoreData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Alerts Trend */}
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3>Alerts (Last 7 Days)</h3>
        <div style={{ width: "100%", height: 250 }}>
          <ResponsiveContainer>
            <LineChart data={alertsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="alerts" stroke="#d9534f" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Vulnerabilities Table */}
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3>Top Vulnerabilities</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Severity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>VULN-001</td>
              <td>Open SQL Public Access</td>
              <td style={{ color: "red", fontWeight: "bold" }}>Critical</td>
              <td>❌ Open</td>
            </tr>
            <tr>
              <td>VULN-002</td>
              <td>Weak Password Policy</td>
              <td style={{ color: "orange", fontWeight: "bold" }}>High</td>
              <td>⚠️ In Progress</td>
            </tr>
            <tr>
              <td>VULN-003</td>
              <td>Unpatched VM in RG-Y</td>
              <td style={{ color: "orange", fontWeight: "bold" }}>High</td>
              <td>⚠️ In Progress</td>
            </tr>
            <tr>
              <td>VULN-004</td>
              <td>Missing Audit Logs</td>
              <td style={{ color: "goldenrod", fontWeight: "bold" }}>Medium</td>
              <td>✅ Fixed</td>
            </tr>
          </tbody>
        </Table>
      </div>

      {/* Findings */}
      <div className="card">
        <h3>Key Findings</h3>
        <ul>
          <li>✅ Multi-Factor Authentication Enabled</li>
          <li>✅ Encryption at Rest Active</li>
          <li>❌ Incomplete Incident Response Plan</li>
          <li>❌ Audit Log Retention &lt; 12 months</li>
        </ul>
      </div>
    </div>
  );
}
