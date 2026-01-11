import api from "../api/axios";

export const getFavorites = async () => {
  const res = await api.get("/favorites");

  // ✅ normalize response
  if (Array.isArray(res.data)) return res.data;
  if (Array.isArray(res.data.favorites)) return res.data.favorites;

  return [];
};

export const removeFavorite = async (id) => {
  return api.delete(`/favorites/${id}`);
};
