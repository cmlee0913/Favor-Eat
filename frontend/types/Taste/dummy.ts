import { FlavorType } from "../RecipeFlavor/dummy";

export interface RecipeData {
  imageSrc: string;
  recipeName: string;
  recipeId: number;
}

export interface TopLayoutProps {
  max: number;
}

export interface MiddleLayoutProps {
  canGoMain: boolean;
}

export interface BottomLayoutProps {
  canGoMain: boolean;
  evaluatedCount: number;
}

export interface RatingShape {
  left: boolean;
  right: boolean;
}

export interface FlavorObject {
  type: FlavorType;
  typeToString: string;
  characterTitle: string;
}
