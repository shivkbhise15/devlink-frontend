import { useEffect, useState } from "react";
import { searchRepos } from "../services/repoService";
import { addToHistory } from "../services/historyService";

export function useRepoSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
    
  useEffect(() => {
    if (!query.trim()) return;

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError("");

        const data = await searchRepos(query);
        setResults(data);

        // 🧠 add only first 3 results to history
        data.slice(0, 3).forEach((repo) => {
          addToHistory(repo);
        });
      } catch {
        setError("Failed to fetch repositories");
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return { query, setQuery, results, loading, error };
}
