// css
require("../scss/main.scss");
import { createNewUser } from "./welcome";
import {editUser, deleteUser} from "./user"
// js

$(() => {
  createNewUser();
  editUser()
  deleteUser()
});
