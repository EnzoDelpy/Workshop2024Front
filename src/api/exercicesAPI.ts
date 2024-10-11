import apiClient from "./client";

export const getExercices = async (queryParams: Record<string, any> = {}) => {
  const response = await apiClient.get("/exercices", { params: queryParams });
  return response.data;
};