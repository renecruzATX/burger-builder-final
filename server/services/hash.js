const bcrypt = require("bcryptjs");

// bcryptjs is a drop-in replacement for the deprecated bcrypt-nodejs
// and still verifies the old $2a$ hashes already stored in the database
const hash = (word, err, done) => {
  bcrypt.hash(word, 10, function (hashErr, hashedWord) {
    if (hashErr) {
      console.log(hashErr);
      if (err) return err(hashErr);
    }
    return done(hashedWord);
  });
};

const compare = (word, hashedWord, done) => {
  bcrypt.compare(word, hashedWord, done);
};

exports.hash = hash;
exports.compare = compare;
