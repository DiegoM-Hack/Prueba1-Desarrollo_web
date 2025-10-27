import { useState } from "react";
import NinjaList from "./components/ninjaList";
import NinjaForm from "./components/ninjaForm";
import AnimeList from "./components/animeList";

function App() {
  const [reload, setReload] = useState(false);
  const recargar = () => setReload(!reload);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🌐 Portal Ninja & Anime</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <NinjaForm onAdd={recargar} />
          <NinjaList key={reload} />
        </div>
        <div>
          <AnimeList />
        </div>
      </div>
    </div>
  );
}

export default App;
