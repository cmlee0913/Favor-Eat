import { FlavorType } from "../MyPage/dummy";

export interface MobileRecipeCompoProps {
  imgSrc: string;
  foodName: string;
  flavorType: FlavorType;
  flavorValue: number;
  recipeId: number;
}
