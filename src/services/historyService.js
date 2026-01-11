import api from "../api/axios";

export const getHistory = async () => {
  const res = await api.get("/history");

  if (Array.isArray(res.data)) return res.data;
  if (Array.isArray(res.data.history)) return res.data.history;

  return [];
};

export const addToHistory = async (repo) => {
  return api.post("/history", repo);
};

export const clearHistory = async () => {
  return api.delete("/history");
};

