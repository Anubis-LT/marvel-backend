const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const fs = require("fs").promises;
const User = require("./models/User");
require("dotenv").config();

const keyApi = "LB4HmRV4lzx3R1V9"; // a mettre en env

const app = express();
app.use(formidable());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
//https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=

// Import des routes
//const userRoutes = require("./routes/user");
//app.use(userRoutes);
// Acces Comics
const listComicsRoutes = require("./routes/comics");
app.use(listComicsRoutes);

app.get("/", (req, res) => {
  fs.readFile("./html/index.html")
    .then((contents) => {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(contents);
    })
    .catch((err) => {
      res.writeHead(500);
      res.end(err);
      return;
    });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Cette route n'existe pas" });
});

app.listen(3001, () => {
  console.log("Server Started ");
});
