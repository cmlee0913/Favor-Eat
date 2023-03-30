import { getAsync } from "./apis";

export const getRecommendFoodList = async (accessToken: string) => {
  const response = await getAsync("/foods/recommend", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};
