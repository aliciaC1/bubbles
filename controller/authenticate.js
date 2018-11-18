const db = require("../models");

const Authenticate = (session) => {
  return new Promise((resolve, reject) => {
    db.User.findOne({ sessionID: session }).then(function(response) {
      if(!response) { resolve(false); }
      else if(response.sessionExpired) { resolve(false); }
      else { resolve (true); }
    });
  })
}

module.exports = Authenticate;
