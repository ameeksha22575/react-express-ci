const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

// default route
app.get("/", (req, res) => {
  res.send("Hello from Express backend 🚀");
});

module.exports = app;
