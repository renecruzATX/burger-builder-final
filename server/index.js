const path = require("path");
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

/*
Provides a node server using the express library
mongoDB database with mongoose library
It holds the ingredients for the burger, past orders, and user info
hashing with bcrypt, tokens provided with jwt-simple

All API routes live under /api so they never collide with the React
routes (/orders, /checkout, /login) when a page is refreshed.
In production the server also serves the built React app.
*/

const userRoutes = require("./routes/UserRoutes");
const sessionRoutes = require("./routes/SessionRoutes");
const authenticationRoutes = require("./routes/AuthenticationRoutes");
const orderRoutes = require("./routes/OrderRoutes");
const ingredientsRoutes = require("./routes/IngredientsRoutes");

const required = ["mongodburi", "SECRET"];
const missing = required.filter((k) => !process.env[k]);
if (missing.length) {
  console.error(`Missing environment variables: ${missing.join(", ")}`);
  process.exit(1);
}

const startWebServer = () => {
  const app = express();
  app.use(express.json());

  const api = express.Router();
  api.use(userRoutes);
  api.use(sessionRoutes);
  api.use(authenticationRoutes);
  api.use("/orders", orderRoutes);
  api.use("/ingredients", ingredientsRoutes);
  api.use((req, res) => res.status(404).json({ error: "Not found" }));
  app.use("/api", api);

  // Serve the React build and let React Router handle every other path
  const clientBuild = path.join(__dirname, "..", "client", "build");
  app.use(express.static(clientBuild));
  app.get("*", (req, res) => res.sendFile(path.join(clientBuild, "index.html")));

  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  });

  const port = process.env.PORT || 3004;
  app.listen(port, () => console.log(`Server started at localhost:${port}`));
};

mongoose.connect(process.env.mongodburi).then(
  () => {
    console.log("mongoose connected successfully");
    startWebServer();
  },
  (err) => {
    console.error("mongoose did not connect", err);
    process.exit(1);
  }
);
