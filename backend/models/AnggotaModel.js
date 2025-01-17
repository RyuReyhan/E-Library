import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Anggota = db.define(
  "anggota",
  {
    nama: DataTypes.STRING,
    npm: DataTypes.STRING,
    tempat_lahir: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    program_studi: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Anggota;

// Pastikan database tersinkronisasi
(async () => {
  await db.sync();  // Hanya perlu sekali saat pertama kali
})();
