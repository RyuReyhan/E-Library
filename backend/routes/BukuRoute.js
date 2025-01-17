import express from "express";
import { getBuku, createBuku, updateBuku, deleteBuku } from "../controllers/BukuController.js";

const router = express.Router();

router.get("/buku", getBuku);
router.post("/buku", createBuku);
router.put("/buku/:id", updateBuku);  // Update Buku
router.delete("/buku/:id", deleteBuku); // Delete Buku

export default router;
