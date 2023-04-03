import { ApiResult } from "@/types/api/apiType";
import { getAsync } from "./apis";
// import { getRecommendFoodList } from '@/action/apis/main';

export const getFavoriteFoodList = async (
  accessToken: string
): Promise<ApiResult> => {
  const { isSuccess, result } = await getAsync(`/foods/favor`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return { isSuccess, result };
};


// export const getRecommendFoodList