// Define your Express routes here
// Check http://expressjs.com/fr/guide/routing.html for documentation

const welcomeController = require("./controllers/welcomeController");
const userController = require("./controllers/usersController");
const bodyParser = require("body-parser");

//
module.exports.init = (app) => {
  app.use(bodyParser.urlencoded({ extended: false }));

  app
    .route("/")
    .get(welcomeController.index)
    .post(welcomeController.createUserRequest);

  app.route("/users").get(userController.index);
  
  app.route("/users/:id").get(userController.getUserById)
  .put(userController.editUserById)
  app.route("/users/:id").delete(userController.deleteUserById);
};
