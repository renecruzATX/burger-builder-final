const path = require('path');
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

/*
Provides a node server using the express library
mongoDB database with mongoose library
It holds the ingredients for the burger, past orders, and user info
I was able to implement the Authentication Project from the advanced class
hashing with bcrypt
tokens provided with jwt-simple
This was not a lot of code to implement but a difficult endeavor none the less
*/

mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose.connect(process.env.mongodburi).then(
  () => { 
    console.log("mongoose connected successfully");
   
    startWebServer();
  },
  err => {
    console.log("mongoose did not connect",err);
   }
);

const userRoutes = require("./routes/UserRoutes");
const sessionRoutes = require("./routes/SessionRoutes");
const authenticationRoutes = require("./routes/AuthenticationRoutes");
const OrderRoutes = require("./routes/OrderRoutes");
const IngredientsRoutes = require ("./routes/IngredientsRoutes");

const startWebServer = () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(express.static("public"));

    app.use(userRoutes);
    app.use(sessionRoutes);
    app.use(authenticationRoutes);
    app.use("/orders", OrderRoutes);
    app.use("/ingredients", IngredientsRoutes);

    app.get("/canigetthis", function (req, res) {
        res.send("You got the data. You are authenticated");
    });

    /*app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../', 'public/index.html'));
      });*/

    app.use(function(req, res, next)
    {
        return res.send("Server Started");
    });

    const port = process.env.PORT || 3004;
    app.listen(port, () => console.log(`Server started at localhost:${port}`));
}