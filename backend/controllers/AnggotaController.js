import Anggota from "../models/AnggotaModel.js";

export const getAnggota = async (req, res) => {
  try {
    const response = await Anggota.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};

export const createAnggota = async (req, res) => {
  const { nama, npm, tempat_lahir, jenis_kelamin, program_studi } = req.body;

  // Validasi data
  if (!nama || !npm || !tempat_lahir || !jenis_kelamin || !program_studi) {
    return res.status(400).json({ msg: "Data anggota tidak lengkap" });
  }

  try {
    await Anggota.create(req.body);
    res.status(201).json({ msg: "Anggota Created" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Error creating anggota" });
  }
};

export const updateAnggota = async (req, res) => {
  const { id } = req.params;
  try {
    const anggota = await Anggota.findByPk(id);
    if (!anggota) {
      return res.status(404).json({ msg: "Anggota not found" });
    }
    await anggota.update(req.body);
    res.status(200).json({ msg: "Anggota updated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Error updating anggota" });
  }
};

export const deleteAnggota = async (req, res) => {
  const { id } = req.params;
  try {
    const anggota = await Anggota.findByPk(id);
    if (!anggota) {
      return res.status(404).json({ msg: "Anggota not found" });
    }
    await anggota.destroy();
    res.status(200).json({ msg: "Anggota deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Error deleting anggota" });
  }
};
