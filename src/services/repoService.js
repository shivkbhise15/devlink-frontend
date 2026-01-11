import api from "../api/axios";

export const searchRepos = async (query) => {
  const res = await api.get(`/search?query=${query}`);
  return Array.isArray(res.data) ? res.data : [];
};

export const saveRepo = async (repo) => {
  return api.post("/favorites", repo);
};
