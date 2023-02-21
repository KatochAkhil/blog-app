const Sequelize = require("sequelize");

const db = new Sequelize("blogapp", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
