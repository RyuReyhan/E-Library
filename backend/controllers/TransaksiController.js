import Transaksi from "../models/TransaksiModel.js";

export const getTransaksi = async (req, res) => {
  try {
    const response = await Transaksi.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};

export const createTransaksi = async (req, res) => {
  try {
    await Transaksi.create(req.body);
    res.status(201).json({ msg: "Transaksi Created" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Error creating transaksi" });
  }
};

export const updateTransaksi = async (req, res) => {
  const { id } = req.params;
  try {
    const transaksi = await Transaksi.findByPk(id);
    if (!transaksi) {
      return res.status(404).json({ msg: "Transaksi not found" });
    }
    await transaksi.update(req.body);
    res.status(200).json({ msg: "Transaksi updated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Error updating transaksi" });
  }
};

export const deleteTransaksi = async (req, res) => {
  const { id } = req.params;
  try {
    const transaksi = await Transaksi.findByPk(id);
    if (!transaksi) {
      return res.status(404).json({ msg: "Transaksi not found" });
    }
    await transaksi.destroy();
    res.status(200).json({ msg: "Transaksi deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Error deleting transaksi" });
  }
};
