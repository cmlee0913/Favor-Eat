import { ApiResult } from "@/types/api/apiType";
import { FoodRateValueRequestType } from "@/types/api/tasteApiType";
import { RecipeRatingType } from "@/types/store/tasteStoreTypes";
import { getAsync, postAsync } from "./apis";

/**
* 취향분석시 필요한 레시피 데이터 리스트
  @param requestCount 취향 분석을 하면서 요청한 횟수
  @param accessToken 사용자의 토큰
  @returns 취향분석에 필요한 레시피 데이터 리스트
*/
export const getTasteRecipeList = async (
  requestCount: number,
  accessToken: string,
): Promise<ApiResult> => {
  const { isSuccess, result } = await getAsync(`/foods/list/${requestCount}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return { isSuccess, result };
};

/**
* 사용자의 레시피 평가 데이터를 서버에 보냄
  @param requestCount 취향 분석을 하면서 요청한 횟수
  @param accessToken 사용자의 토큰
  @returns 취향분석에 필요한 레시피 데이터 리스트
*/
export const sendFirstRecipeTasteValue = async (
  list: Array<RecipeRatingType>,
  accessToken: string,
) => {
  const requestList: Array<FoodRateValueRequestType> = [];
  list.forEach((item) => {
    const obj: FoodRateValueRequestType = {
      foodsId: 0,
      spiciness: 0,
      sweetness: 0,
      saltiness: 0,
      fatness: 0,
    };

    obj.foodsId = item.recipeId;

    item.ratingValueList.forEach((flavorValue) => {
      switch (flavorValue.type) {
        case "spicy":
          obj.spiciness = flavorValue.value;
          return;
        case "sweet":
          obj.sweetness = flavorValue.value;
          return;
        case "salty":
          obj.saltiness = flavorValue.value;
          return;
        case "oily":
          obj.fatness = flavorValue.value;
          return;
      }
    });
    requestList.push(obj);
  });
  let response = await postAsync(`/users`, requestList, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (response.isSuccess) {
    response = await postAsync("/users/recommends", null, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
  return response;
};
