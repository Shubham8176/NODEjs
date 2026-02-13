const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const FILE = "data.txt";

/* WRITE API */
app.post("/write", (req, res) => {
  const text = req.body.text;

  fs.writeFileSync(FILE, text);
  res.send("Written successfully");
});

/* READ API */
app.get("/read", (req, res) => {
  if (fs.existsSync(FILE)) {
    const data = fs.readFileSync(FILE, "utf8");
    res.send(data);
  } else {
    res.send("");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
