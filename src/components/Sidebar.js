import { Link } from "react-router-dom";

export default function Sidebar() {
  const sidebarStyle = {
    width: "200px",
    background: "#0a1f44",
    color: "#fff",
    height: "100vh",
    padding: "20px",
  };

  const linkStyle = {
    display: "block",
    color: "#fff",
    textDecoration: "none",
    margin: "15px 0",
  };

  return (
    <div style={sidebarStyle}>
      <h2>Aegis Cloud</h2>
      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/security" style={linkStyle}>Security</Link>
        <Link to="/compliance" style={linkStyle}>Compliance</Link>
        <Link to="/cost" style={linkStyle}>Cost</Link>
        <Link to="/ai" style={linkStyle}>AI</Link>
        <Link to="/risk" style={linkStyle}>Risk</Link>
        <Link to="/reports" style={linkStyle}>Reports</Link>
        <Link to="/vendors" style={linkStyle}>Vendors</Link>
      </nav>
    </div>
  );
}
