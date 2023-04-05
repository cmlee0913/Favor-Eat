import { FlavorType } from "../MyPage/dummy";

export interface MainFood {
  foodName: string;
  imgSrc: string;
  flavor: Flavor;
  contents: Array<MapItem>;
  recipeId: number;
}

export interface Flavor {
  type: FlavorType;
  value: number;
}

export interface MapItem {
  key: string;
  value: any;
}

export interface MainFoodResponse {
  id: number;
  name: string;
  image: string;
  time: string;
  level: string;
  responseTasteInfo: MainFoodFlavor;
}

export interface MainFoodFlavor {
  spicy: number;
  sweet: number;
  salty: number;
  oily: number;
}
