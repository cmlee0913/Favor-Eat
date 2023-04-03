import { StaticImageData } from "next/image";

export interface ResultLayoutProps {
  resultContents: ResultContents;
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
