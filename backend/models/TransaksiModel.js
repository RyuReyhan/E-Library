import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Transaksi = db.define(
  "transaksi",
  {
    judul: DataTypes.STRING,
    nama: DataTypes.STRING,
    tanggal_pinjam: DataTypes.DATE,
    tanggal_kembali: DataTypes.DATE,
    status: DataTypes.STRING,
    terlambat: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

export default Transaksi;

(async () => {
  await db.sync();
})();
