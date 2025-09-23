import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Home from "./pages/Home";
import Security from "./pages/Security";
import Compliance from "./pages/Compliance";
import Cost from "./pages/Cost";
import AI from "./pages/AI";
import Risk from "./pages/Risk";
import Reports from "./pages/Reports";
import Vendors from "./pages/Vendors";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main area with Header + Pages */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Header />
          <div style={{ flex: 1, padding: "20px", background: "#f9f9f9" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/security" element={<Security />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/cost" element={<Cost />} />
              <Route path="/ai" element={<AI />} />
              <Route path="/risk" element={<Risk />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/vendors" element={<Vendors />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
