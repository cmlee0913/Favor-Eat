import { FlavorType } from "../RecipeFlavor/dummy";

export interface TasteRatingCompoProps {
  type: FlavorType;
  setRatingValue?: (value: number, type: string) => void;
  recipeId: number;
}
