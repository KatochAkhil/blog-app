const Sequelize = require("sequelize");
const db = require("../config");

const { DataTypes } = Sequelize;

const ContactModal = db.define(
  "contactForms",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    message: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

module.exports = ContactModal;
