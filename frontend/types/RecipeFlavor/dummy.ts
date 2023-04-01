import { StaticImageData } from "next/image";

export type FlavorType = "spicy" | "sweet" | "salty" | "oily";

export interface FlavorCharacter {
  type: FlavorType;
  title: string;
  value: number;
  img: StaticImageData;
}
export interface FlavorCharacterProps {
  type: FlavorType;
  title: string;
  value: number;
  img: StaticImageData;
  onClick?: () => void;
  hoverActive: (type: string) => void;
  hoverInactive: () => void;
}

export interface FlavorCharacterListProps {
  values: Array<FlavorCharacter>;
}

export interface FlavorInfo {
  type: string;
  value: number;
}

export interface RecipeFlavorProps {
  recipeImage: StaticImageData;
  tasteInfo: {
    spicy: number;
    sweet: number;
    salty: number;
    oily: number;
  };
}

export interface HoverBoxImageType {
  pcImage: StaticImageData;
  mobileImage: StaticImageData;
  left: number;
}

export interface NutrientObject {
  calorie: number;
  moisture: number;
  protein: number;
  fat: number;
  carbohydrate: number;
  sugars: number;
  fiber: number;
  calcium: number;
  iron: number;
  phosphorus: number;
  potassium: number;
  salt: number;
  vitaminA: number;
  vitaminC: number;
  vitaminD: number;
  cholesterol: number;
  saturatedfat: number;
  transfat: number;
}
