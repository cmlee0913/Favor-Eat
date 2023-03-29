import { FlavorType } from "../MyPage/dummy";

export interface MainFoodListType {
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
