import Buku from "../models/BukuModel.js";

export const getBuku = async (req, res) => {
  try {
    const response = await Buku.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};

export const createBuku = async (req, res) => {
  try {
    await Buku.create(req.body);
    res.status(201).json({ msg: "Buku Created" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Error creating buku" });
  }
};

export const updateBuku = async (req, res) => {
  const { id } = req.params;
  try {
    const buku = await Buku.findByPk(id);
    if (!buku) {
      return res.status(404).json({ msg: "Buku not found" });
    }
    await buku.update(req.body);
    res.status(200).json({ msg: "Buku updated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Error updating buku" });
  }
};

export const deleteBuku = async (req, res) => {
  const { id } = req.params;
  try {
    const buku = await Buku.findByPk(id);
    if (!buku) {
      return res.status(404).json({ msg: "Buku not found" });
    }
    await buku.destroy();
    res.status(200).json({ msg: "Buku deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Error deleting buku" });
  }
};
