import React, { useState } from "react";
import "./App.css";

function App() {
  const [showWork, setShowWork] = useState(false);
  const [input, setInput] = useState("");
  const [fileData, setFileData] = useState("");

  const writeData = async () => {
    await fetch("http://localhost:5000/write", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    });

    alert("Your file appears");
  };

  const readData = async () => {
    const res = await fetch("http://localhost:5000/read");
    const data = await res.text();
    setFileData(data);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MyLogo</div>

        <div className="nav-buttons">
          <button className="nav-btn" onClick={() => setShowWork(false)}>
            Home
          </button>

          <button className="nav-btn" onClick={() => setShowWork(true)}>
            Work
          </button>
        </div>
      </nav>

      <div className="content">
        {!showWork && <h2>Home Page</h2>}

        {showWork && (
          <>
            <h2>FS work with React</h2>

            <input
              type="text"
              placeholder="Enter text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <div style={{ marginTop: "10px" }}>
              <button onClick={writeData}>Write</button>
              <button onClick={readData}>Read</button>
            </div>

            <p>{fileData}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
