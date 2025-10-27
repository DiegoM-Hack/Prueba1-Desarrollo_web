// backend/routes/ninjaRoutes.js
import express from "express";
const router = express.Router();
import ninjaController from "../controllers/ninjaController.js";

router.get("/", ninjaController.obtenerNinjas);
router.get("/:id", ninjaController.obtenerNinjaPorId);
router.post("/", ninjaController.agregarNinja);
router.put("/:id", ninjaController.actualizarNinja);
router.delete("/:id", ninjaController.eliminarNinja);

export default router;
