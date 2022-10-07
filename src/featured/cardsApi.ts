import { apiClient } from "../apiClient/apiClient";

export const fetchCards = async () => {
  const res = await apiClient.get("/api/deck/new/draw/?count=52");
  return res.data;
};
