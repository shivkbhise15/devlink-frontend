import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRepoSearch } from "../hooks/useRepoSearch";
import { saveRepo } from "../services/repoService";
import Navbar from "../components/layout/Navbar";
import RepoList from "../components/repo/RepoList";
import RepoSkeleton from "../components/repo/RepoSkeleton";
import Toast from "../components/ui/Toast";

function Dashboard() {
  const { logout } = useAuth();
  const { query, setQuery, results, loading, error } = useRepoSearch();
  const [savingId, setSavingId] = useState(null);
  const [toast, setToast] = useState(null);

  const handleSave = async (repo) => {
    setSavingId(repo.id);
    setToast({ message: "Saved to favorites ⭐", type: "success" });

    try {
      await saveRepo(repo);
    } catch {
      setToast({ message: "Failed to save", type: "error" });
    } finally {
      setSavingId(null);
      setTimeout(() => setToast(null), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar onLogout={logout} />

      <main className="p-6 max-w-5xl mx-auto">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-gray-800 p-3 rounded mb-6"
          placeholder="Search GitHub repositories..."
        />

        {/* Skeletons */}
        {loading &&
          Array.from({ length: 5 }).map((_, i) => (
            <RepoSkeleton key={i} />
          ))}

        {/* Error */}
        {error && <p className="text-red-400">{error}</p>}

        {/* Empty */}
        {!loading && !results.length && query && (
          <p className="text-gray-500 text-center">
            No repositories found
          </p>
        )}

        {!loading && (
          <RepoList
            repos={results}
            onSave={handleSave}
            savingId={savingId}
          />
        )}
      </main>

      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
}

export default Dashboard;
