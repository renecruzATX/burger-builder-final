const bcrypt = require("bcrypt-nodejs");

const hash = (word,err,done) => {

    bcrypt.hash(word, null, null,function (hashErr, hashedWord) {
      if(hashErr){
        console.log(hashErr);
      }
      if (hashErr && err) {
        return err(hashErr);
      }
      return done(hashedWord);
    });
}

const compare = (word,hashedWord,done) => {
  bcrypt.compare(word, hashedWord,done);
}

exports.hash = hash;
exports.compare = compare;
