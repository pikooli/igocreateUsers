const Model = require("igo").Model;

const schema = {
  table: "users",
  columns: [
    "firstName",
    "lastName",
    "email",
    "profession",
    "address",
    "zipCode",
    "phone",
    "created_at",
  ],
};

class User extends Model(schema) {
  constructor(values) {
    super(values);
  }

  name() {
    return this.first_name + " " + this.last_name;
  }
}

module.exports = User;
