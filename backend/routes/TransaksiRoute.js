import express from "express";
import { getTransaksi, createTransaksi, updateTransaksi, deleteTransaksi } from "../controllers/TransaksiController.js";

const router = express.Router();

router.get("/transaksi", getTransaksi);
router.post("/transaksi", createTransaksi);
router.put("/transaksi/:id", updateTransaksi);  // Update Transaksi
router.delete("/transaksi/:id", deleteTransaksi); // Delete Transaksi

export default router;
