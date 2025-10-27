// backend/server.js
import express from "express";
import cors from "cors";
import ninjaRoutes from "./routes/ninjaRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Rutas principales
app.use("/api/ninjas", ninjaRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
