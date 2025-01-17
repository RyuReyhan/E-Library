import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Buku = db.define(
  "buku",
  {
    judul: DataTypes.STRING,
    pengarang: DataTypes.STRING,
    penerbit: DataTypes.STRING,
    jumlah_buku: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

export default Buku;

(async () => {
  await db.sync();
})();
