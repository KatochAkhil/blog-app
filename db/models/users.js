const Sequelize = require("sequelize");
const db = require("../config");

const { DataTypes } = Sequelize;

const User = db.define(
  "users",
  {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

module.exports = User;
