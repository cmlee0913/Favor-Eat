import { Dispatch, SetStateAction } from "react";
import { RecipeData } from "../Taste/dummy";

export interface TasteEvaluateBoxCompoProps {
  canGoMain: boolean;
  recipeData: RecipeData;
  buttonActive: Dispatch<SetStateAction<boolean>>;
}
