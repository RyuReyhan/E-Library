import express from "express";
import { getAnggota, createAnggota, updateAnggota, deleteAnggota } from "../controllers/AnggotaController.js";


const router = express.Router();

router.get("/api/anggota",  getAnggota);
router.post("/api/anggota",  createAnggota);
router.put("/api/anggota/:id",  updateAnggota);  // Update Anggota
router.delete("/api/anggota/:id", deleteAnggota); // Delete Anggota

export default router;
