const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodejs_crud", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("Connected to MySQL with Sequelize"))
  .catch((err) => console.error("Error connecting to database:", err));
module.exports = sequelize;
