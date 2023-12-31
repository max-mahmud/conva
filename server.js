const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();
app.use(express.json());

  app.use(
    cors({
      origin: ["http://localhost:5173", "https://conva.vercel.app"],
      credentials: true,
    })
  );


app.use("/api", require("./routes/designRoutes"));
app.use("/api", require("./routes/authRoutes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./", "client", "dist", "index.html"));
  });
}
app.get("/abc", (req, res) => {
  res.send("abc def def ");
});

//PORT environment
const PORT = process.env.PORT || 5000;

// connect to db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // listening for requests
    app.listen(PORT, (req, res) => {
      console.log(`connected to db && server running on port:${PORT}..`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
