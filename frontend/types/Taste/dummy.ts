import { FlavorType } from "../RecipeFlavor/dummy";

export interface RecipeData {
  imageSrc: string;
  recipeName: string;
  recipeId: number;
}

export interface TopLayoutProps {
  count: number;
  max: number;
}

export interface MiddleLayoutProps {
  recipeData: RecipeData;
  canGoMain: boolean;
  count: number;
  clickHate: () => void;
  clickNext: () => void;
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
