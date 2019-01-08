const User = require("../models/UserModel");
const jwt = require("jwt-simple");

const authentication = (req, res, next) => {
  //if(req.path.split("/")[1] !== "api")
  if(req.path !== "/orders")
  {
    return next();
  }
  // get the token from the header
  //const tokenString = req.header("authorization");
  const tokenString = req.query.auth;
  if (!tokenString) {
    return res.status(401).json({error: "Invalid Credentials"});
  }
  const tokenObject = jwt.decode(tokenString,process.env.SECRET);
  // decrypt the token
  // find user by id
  User.findById(tokenObject.userId, function (err, user) {
    if (err) { return res.status(401).json({error: "Invalid Credentials"}); }
    if (user) {
      req.user = user;
      return next();
    } 
    return res.status(401).json({error: "Invalid Credentials"});
  });
}

exports.authentication = authentication;
