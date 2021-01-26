module.exports.init = (config) => {
  config.cookieSecret = "iXzZ9iepMYnaCxeoSaE2unB0Fu5yxO1tHeLTr03g";
  config.cookieSession.keys = ["UoAoYPN25E6JOG9R2NcooqVIyOXYhNzueVDmwM0s"];
  config.mysql = {
    host: process.env.MYSQL_HOST || "localhost",
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USERNAME || "root",
    password: process.env.MYSQL_PASSWORD || "",
    database: process.env.MYSQL_DATABASE || "igo",
    debug: false, // mysql driver debug mode
    connectionLimit: 5,
    debugsql: false, // show sql logs
  };
};
