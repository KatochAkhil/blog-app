const Sequelize = require("sequelize");
const db = require("../config");

const { DataTypes } = Sequelize;

const BlogsModal = db.define(
  "blogs",
  {
    userId: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    isPublish: DataTypes.STRING,
    image: DataTypes.STRING,
    category: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

module.exports = BlogsModal;
