import { StaticImageData } from "next/image";

export interface ContentPageLayoutProps {
  pageNum: number;
  maxPageNum: number;
  foodData: ShareFoodData;
  selectedCharacter: StaticImageData;
}

export interface ShareFoodData {
  imageList: Array<StaticImageData>;
  foodTitle: string;
  likeText: string;
  hateText: string;
}
