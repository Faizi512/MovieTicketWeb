const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const movie = require("./routes/Movie");

mongoose
  .connect("mongodb://localhost/movie")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

app.use(cors());
app.use(express.json());
app.use("/api/movie", movie);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
