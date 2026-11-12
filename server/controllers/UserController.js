const User = require("../models/UserModel");
const tokenForUser = require("../services/token").tokenForUser;
const hash = require("../services/hash").hash;

const create = (req, res, next) => {
  const { username, password } = req.body;
  const u = username;
  // If no username or password was supplied return an error
  if (!username || !password) {
    return res.status(422)
    .json({ error: "You must provide a username and password" });
  }
  console.log("Look for a user with the username",username);
  User.findOne({ username: u}).exec()
  .then((existingUser) => {
      // If the user exist return an error on sign up
    if (existingUser) {
      console.log("This username is already being used");
      return res.status(422).json({ error: "Username is in use" });
    }
    console.log("This username is free to use");
    saveUser(username, password, (result) => {
      res.json(result);
    }, next);
  })
  .catch(err => next(err));
}

const saveUser = (username, password, done, next) => {
  hash(password, null,function (hashedPassword) {
    // Create a new user with the supplied username, and the hashed password
    const user = new User({ username, password: hashedPassword });
    console.log("Saving the user");
    user.save()
      .then(u => {
        console.log("User has been saved to database");
        // client stores both token and username after sign up
        done({ token: tokenForUser(u), username: u.username });
      })
      .catch(next);
  });
}

exports.create = create;
