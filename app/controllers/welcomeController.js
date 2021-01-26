//
const User = require("../model/User");

module.exports.index = (req, res) => {
  res.render("welcome/index");
};

module.exports.createUserRequest = (req, res) => {
  let user = new User(req.body);
  User.create(user, (err, user) => {
    if (err) res.send(err.sqlMessage);
    else res.sendStatus(200);
  });
};
