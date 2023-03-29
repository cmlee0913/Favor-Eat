import { FlavorType } from "../MyPage/dummy";

export interface FlavorRatingValue {
  type: FlavorType;
  value: number;
}

export interface RecipeRatingType {
  recipeId: number;
  ratingValueList: Array<FlavorRatingValue>;
}
