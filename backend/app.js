const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");

const app = express();

app.use(cors());
app.use(express.json());

if (!process.env.MONGO_URI) {
    console.log("MONGO_URI not found");
    process.exit(1);
}

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((error) => console.log("MongoDB connection error: ", error));

app.use("/api", authRoutes);
app.use("/api", jobRoutes);

app.get("/", (req, res) => {
  res.send("ProConnectJobTracker API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});