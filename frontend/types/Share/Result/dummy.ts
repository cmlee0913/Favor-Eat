import { StaticImageData } from "next/image";

export interface ResultLayoutProps {
  resultContents: ResultContents;
  likedCount: number;
  maxCount: number;
}

export interface ResultContents {
  resultIcon: StaticImageData;
  title: string;
  text: string;
}

export interface ResultObject {
  baby: ResultContents;
  middle: ResultContents;
  adult: ResultContents;
}
