import axios from "axios";
import { useState } from "react";
import "./../ninjas.css";

const NinjaForm = ({ onAdd }) => {
  const [form, setForm] = useState({ nombre: "", rango: "", aldea: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/ninjas", form);
    setForm({ nombre: "", rango: "", aldea: "" });
    onAdd(); // refrescar lista
  };

  return (
    <form onSubmit={handleSubmit} className="ninja-form">
      <h2>Agregar Ninja</h2>
      <input
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <input
        name="rango"
        value={form.rango}
        onChange={handleChange}
        placeholder="Rango"
      />
      <input
        name="aldea"
        value={form.aldea}
        onChange={handleChange}
        placeholder="Aldea"
      />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default NinjaForm;

