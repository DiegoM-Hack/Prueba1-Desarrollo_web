import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "../data/ninjas.json"); // ✅ importante

// Leer ninjas desde archivo
function getNinjas() {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

// Guardar ninjas en archivo
function saveNinjas(ninjas) {
  fs.writeFileSync(filePath, JSON.stringify(ninjas, null, 2));
}

// GET - Todos los ninjas
export const obtenerNinjas = (req, res) => {
  res.json(getNinjas());
};

// GET - Ninja por ID
export const obtenerNinjaPorId = (req, res) => {
  const { id } = req.params;
  const ninjas = getNinjas();
  const ninja = ninjas.find(n => n.id === id);
  ninja ? res.json(ninja) : res.status(404).json({ mensaje: "Ninja no encontrado" });
};

// POST - Crear nuevo ninja
export const agregarNinja = (req, res) => {
  const { nombre, rango, aldea } = req.body;
  if (!nombre || !rango || !aldea) {
    return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
  }
  const ninjas = getNinjas();
  const nuevoNinja = { id: uuidv4(), nombre, rango, aldea };
  ninjas.push(nuevoNinja);
  saveNinjas(ninjas);
  res.status(201).json(nuevoNinja);
};

// PUT - Actualizar ninja existente
export const actualizarNinja = (req, res) => {
  const { id } = req.params;
  const { nombre, rango, aldea } = req.body;
  let ninjas = getNinjas();
  const indice = ninjas.findIndex(n => n.id === id);
  if (indice === -1) return res.status(404).json({ mensaje: "Ninja no encontrado" });

  ninjas[indice] = { ...ninjas[indice], nombre, rango, aldea };
  saveNinjas(ninjas);
  res.json(ninjas[indice]);
};

// DELETE - Eliminar ninja
export const eliminarNinja = (req, res) => {
  const { id } = req.params;
  let ninjas = getNinjas();
  const nuevosNinjas = ninjas.filter(n => n.id !== id);
  if (ninjas.length === nuevosNinjas.length)
    return res.status(404).json({ mensaje: "Ninja no encontrado" });

  saveNinjas(nuevosNinjas);
  res.json({ mensaje: "Ninja eliminado correctamente" });
};

export default {
  obtenerNinjas,
  obtenerNinjaPorId,
  agregarNinja,
  actualizarNinja,
  eliminarNinja,
};