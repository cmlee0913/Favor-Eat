import { StaticImageData } from "next/image";

export type FlavorType = "spicy" | "sweet" | "salty";
export interface FlavorInfo {
  type: FlavorType;
  value: number;
}

export interface FlavorData {
  title: string;
  imgSrc: StaticImageData;
  value: number;
}

export type FlavorProps = {
  flavors: Array<FlavorInfo>;
};
