import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function Reports() {
  const handleDownload = () => {
    // Simulate opening a professional PDF
    window.open("/auditpack/AegisCloud_Audit_Pack_2025_FULL.pdf", "_blank");

  };

  return (
    <div>
      <h1>Reports & Evidence Log</h1>
      <p>Access logs, compliance evidence, and audit packs in one place.</p>

      {/* KPI Counters */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div className="card" style={{ flex: 1, textAlign: "center" }}>
          <h3>Evidence Collected</h3>
          <p style={{ fontSize: "26px", fontWeight: "bold", color: "#28a745" }}>145</p>
        </div>
        <div className="card" style={{ flex: 1, textAlign: "center" }}>
          <h3>Missing Items</h3>
          <p style={{ fontSize: "26px", fontWeight: "bold", color: "#d9534f" }}>32</p>
        </div>
        <div className="card" style={{ flex: 1, textAlign: "center" }}>
          <h3>Pending Approvals</h3>
          <p style={{ fontSize: "26px", fontWeight: "bold", color: "#ff9900" }}>12</p>
        </div>
      </div>

      {/* Download Audit Pack */}
      <div className="card" style={{ marginTop: "30px", textAlign: "center" }}>
        <h3>Audit Pack</h3>
        <p>Comprehensive evidence bundle for auditors and stakeholders.</p>
        <Button variant="dark" size="lg" onClick={handleDownload}>
          ⬇️ Download Audit Pack
        </Button>
      </div>

      {/* Evidence Log Table */}
      <div className="card" style={{ marginTop: "30px" }}>
        <h3>Evidence Log</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Evidence</th>
              <th>Status</th>
              <th>File Ref</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apr 5, 2025</td>
              <td>Access logs collected</td>
              <td>✅ Complete</td>
              <td>log_2025_04.csv</td>
            </tr>
            <tr>
              <td>Apr 3, 2025</td>
              <td>Incident response plan</td>
              <td>❌ Gap</td>
              <td>ir_plan.docx</td>
            </tr>
            <tr>
              <td>Mar 29, 2025</td>
              <td>Data retention policy</td>
              <td>⚠️ Pending</td>
              <td>policy_v2.pdf</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
