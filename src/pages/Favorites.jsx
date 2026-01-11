import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import RepoList from "../components/repo/RepoList";
import { getFavorites, removeFavorite } from "../services/favoriteServices";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites().then(setFavorites);
  }, []);

  const handleRemove = async (repo) => {
    await removeFavorite(repo.id);
    setFavorites((prev) => prev.filter((r) => r.id !== repo.id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <main className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">⭐ Favorites</h2>

        {!favorites.length && (
          <p className="text-gray-500">No favorites yet</p>
        )}

        <RepoList
          repos={favorites}
          onSave={handleRemove}
          savingId={null}
        />
      </main>
    </div>
  );
}

export default Favorites;
