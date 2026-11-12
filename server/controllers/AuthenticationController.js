const User = require("../models/UserModel");
const jwt = require("jwt-simple");

// Every /orders request (list, show, create, delete) requires a valid token
const authentication = (req, res, next) => {
  if (!req.path.startsWith("/orders")) {
    return next();
  }
  const tokenString = req.query.auth;
  if (!tokenString) {
    return res.status(401).json({ error: "Invalid Credentials" });
  }
  let tokenObject;
  try {
    tokenObject = jwt.decode(tokenString, process.env.SECRET);
  } catch (e) {
    return res.status(401).json({ error: "Invalid Credentials" });
  }
  User.findById(tokenObject.userId).exec()
    .then((user) => {
      if (!user) return res.status(401).json({ error: "Invalid Credentials" });
      req.user = user;
      return next();
    })
    .catch(() => res.status(401).json({ error: "Invalid Credentials" }));
};

exports.authentication = authentication;
