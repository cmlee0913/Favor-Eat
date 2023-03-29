import { RecipeRatingType } from "@/types/store/tasteStoreTypes";
import { RecipeData } from "@/types/Taste/dummy";
import { atom } from "jotai";

export const currentIndexAtom = atom(-1);
export const currentRecipeDataAtom = atom<RecipeData>({
  recipeName: "",
  recipeId: -1,
  imageSrc: "",
});
export const recipeRatingListAtom = atom<Array<RecipeRatingType>>([]);
