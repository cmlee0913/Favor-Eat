import { FlavorType } from "@/types/RecipeFlavor/dummy";

export interface LevelContent {
  level: number;
  foodName: string;
  color: string;
}

export interface HoverInfoObject {
  spicy: Array<LevelContent>;
  sweet: Array<LevelContent>;
  salty: Array<LevelContent>;
  oily: Array<LevelContent>;
}

export interface HoverInfoCompoProps {
  isColumn?: boolean;
}
