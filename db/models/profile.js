const Sequelize = require("sequelize");
const db = require("../config");

const { DataTypes } = Sequelize;

const Profile = db.define(
  "profile",
  {
    name: DataTypes.STRING,
    userId: DataTypes.STRING,
    number: DataTypes.STRING,
    image: DataTypes.STRING,
    profession: DataTypes.STRING,
    interest: DataTypes.STRING,
    bio: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

module.exports = Profile;
