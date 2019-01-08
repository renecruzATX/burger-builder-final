const jwt = require("jwt-simple");

const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ userId: user.id, iat: timestamp }, process.env.SECRET);
}


exports.tokenForUser = tokenForUser;

