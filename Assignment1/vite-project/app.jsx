import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">ABES</div>

        <div className="nav-buttons">
          <button className="nav-btn">Home</button>
          <button className="nav-btn">Work</button>
        </div>
      </nav>

      {/* Page Content */}
      <div className="content">
        <h1>Welcome</h1>
        <p>This is my React page.</p>
      </div>
    </div>
  );
}

export default App;
