import { Sequelize } from "sequelize";

const db = new Sequelize("e_library_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;