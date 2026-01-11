import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import RepoList from "../components/repo/RepoList";
import { getHistory, clearHistory } from "../services/historyService";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getHistory().then(setHistory);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <main className="p-6 max-w-5xl mx-auto">
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-semibold">🕘 History</h2>
          <button
            onClick={async () => {
              await clearHistory();
              setHistory([]);
            }}
            className="text-sm text-red-400"
          >
            Clear
          </button>
        </div>

        {!history.length && (
          <p className="text-gray-500">No history yet</p>
        )}

        <RepoList repos={history} onSave={() => {}} />
      </main>
    </div>
  );
}

export default History;
