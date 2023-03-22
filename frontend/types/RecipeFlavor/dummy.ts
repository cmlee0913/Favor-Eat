import { StaticImageData } from "next/image";

export type FlavorType = "spicy" | "sweet" | "salty" | "oily";

export interface FlavorCharacter {
  title: string;
  value: number;
  img: StaticImageData;
}

export interface FlavorCharacterListProps {
  values: Array<FlavorCharacter>;
}

export interface FlavorInfo {
  type: FlavorType;
  value: number;
}

export interface RecipeFlavorProps {
  values: Array<FlavorInfo>;
  recipeImage: StaticImageData;
}
