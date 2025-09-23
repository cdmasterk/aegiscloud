import Table from "react-bootstrap/Table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const vendorData = [
  { vendor: "Microsoft", risk: 92 },
  { vendor: "AWS", risk: 88 },
  { vendor: "Google Cloud", risk: 80 },
  { vendor: "Oracle", risk: 55 },
  { vendor: "SAP", risk: 95 },
];

export default function Vendors() {
  return (
    <div>
      <h1>Vendors Dashboard</h1>
      <p>Track vendor compliance, contracts, and risk posture.</p>

      {/* Risk Score Chart */}
      <div className="card" style={{ marginTop: "20px" }}>
        <h3>Vendor Risk Scores</h3>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={vendorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="vendor" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="risk" fill="#0a1f44" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Vendor Table */}
      <div className="card" style={{ marginTop: "30px" }}>
        <h3>Vendor Coverage</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Vendor</th>
              <th>NDA</th>
              <th>SLA</th>
              <th>DPA</th>
              <th>Security Check</th>
              <th>Financial Review</th>
              <th>Risk Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Microsoft</td>
              <td>✅ Signed</td>
              <td>✅ SLA in place</td>
              <td>✅ DPA signed</td>
              <td style={{ color: "green" }}>Passed</td>
              <td>Stable</td>
              <td>92%</td>
            </tr>
            <tr>
              <td>AWS</td>
              <td>✅ Signed</td>
              <td>✅ SLA in place</td>
              <td>✅ DPA signed</td>
              <td style={{ color: "orange" }}>Pending</td>
              <td>Stable</td>
              <td>88%</td>
            </tr>
            <tr>
              <td>Google Cloud</td>
              <td>✅ Signed</td>
              <td>⚠️ Needs Review</td>
              <td>✅ DPA signed</td>
              <td style={{ color: "green" }}>Passed</td>
              <td>Stable</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>Oracle</td>
              <td>⚠️ Pending</td>
              <td>❌ Missing SLA</td>
              <td>⚠️ DPA Draft</td>
              <td style={{ color: "red" }}>Failed</td>
              <td>Risky</td>
              <td>55%</td>
            </tr>
            <tr>
              <td>SAP</td>
              <td>✅ Signed</td>
              <td>✅ SLA in place</td>
              <td>✅ DPA signed</td>
              <td style={{ color: "green" }}>Passed</td>
              <td>Stable</td>
              <td>95%</td>
            </tr>
          </tbody>
        </Table>
      </div>

      {/* Highlights */}
      <div className="card" style={{ marginTop: "30px" }}>
        <h3>Highlights</h3>
        <ul>
          <li>✅ 4/5 vendors fully covered with NDA, SLA, and DPA</li>
          <li>⚠️ Oracle flagged with high risk (missing SLA, failed security)</li>
          <li>💡 Vendor portfolio risk currently at <b>low-to-medium</b> level</li>
        </ul>
      </div>
    </div>
  );
}
