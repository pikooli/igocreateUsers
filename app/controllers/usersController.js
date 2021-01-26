//
const User = require("../model/User");

module.exports.index = (req, res) => {
  User.list((err, users) => {
    if (err) res.send(err.sqlMessage);
    else
      res.render("users/index", {
        users,
      });
  });
};

module.exports.getUserById = (req, res) => {
  let id = req.params.id;
  User.find(id, (err, user) => {
    if (err) res.send(err.sqlMessage);
    else res.render("user/index", { user: user });
  });
};

module.exports.editUserById = (req, res) => {
  let id = req.body.id;
  let editUser = new User(req.body);
  User.find(id, function(err, user) {
    if (err) res.send(err.sqlMessage);
    else if (!user) res.send("no user found");
    else user.update(editUser, function(err, user) {
      if (err) res.send(err.sqlMessage);
      else res.sendStatus(200);
    });
  });
};

module.exports.deleteUserById = (req, res) => {
  let id = req.params.id;
  User.destroy(id, function(err) {
    if (err) res.send(err.sqlMessage);
    else res.sendStatus(200);
  });
};
