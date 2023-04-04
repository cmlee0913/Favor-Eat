import { StaticImageData } from "next/image";

export type FlavorType = "spicy" | "sweet" | "salty" | "oily";

export interface FlavorStaticData {
  type: FlavorType;
  title: string;
  subtitle: string;
  img: StaticImageData;
  value: number;
}

export interface MyPageTypes {
  category: any;
  content: any;
  isOpen: boolean;
}

export interface MyPageContentProps {
  myPageArr: Array<MyPageTypes>;
  selectIdx: number;
  setSelectedIdx: React.Dispatch<React.SetStateAction<number>>;
}
