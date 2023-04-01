import {
  FlavorRatingObject,
  FlavorRatingValueRequest,
} from "@/types/Recipe/dummy";
import { getAsync, postAsync } from "./apis";

export const getMyRecipeRating = (
  accessToken: string,
  recipeId: number | number[],
) => {
  const response = getAsync(`/users/taste/${recipeId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};

export const saveMyRecipeRating = (
  accessToken: string,
  recipeId: number,
  valueObject: FlavorRatingObject,
) => {
  const requestObj: FlavorRatingValueRequest = {
    foodsId: recipeId,
    spiciness: valueObject.spicy,
    sweetness: valueObject.sweet,
    saltiness: valueObject.salty,
    fatness: valueObject.oily,
  };

  console.log(requestObj);

  const response = postAsync("/users/taste", requestObj, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};
