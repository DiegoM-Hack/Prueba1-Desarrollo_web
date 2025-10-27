import axios from "axios";
import { useEffect, useState } from "react";
import "./../ninjas.css";

const NinjaList = () => {
  const [ninjas, setNinjas] = useState([]);

  const fetchNinjas = async () => {
    const res = await axios.get("http://localhost:4000/api/ninjas");
    setNinjas(res.data);
  };

  const eliminarNinja = async (id) => {
    await axios.delete(`http://localhost:4000/api/ninjas/${id}`);
    fetchNinjas();
  };

  useEffect(() => {
    fetchNinjas();
  }, []);

  return (
    <div className="ninja-list">
      <h2> Ninjas Registrados</h2>
      {ninjas.map((ninja) => (
        <div key={ninja.id} className="ninja-item">
          <span>
            {ninja.nombre} - {ninja.rango} ({ninja.aldea})
          </span>
          <button onClick={() => eliminarNinja(ninja.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default NinjaList;

