import { RecipeRatingType } from "@/types/store/tasteStoreTypes";
import { RecipeData } from "@/types/Taste/dummy";
import { atom } from "jotai";

export const CurrentIndexAtom = atom(0);
export const CurrentRecipeDataAtom = atom<RecipeData>({
  recipeName: "",
  recipeId: -1,
  imageSrc: "",
});
export const RecipeRatingListAtom = atom<Array<RecipeRatingType>>([]);
