import { FlavorType } from "../RecipeFlavor/dummy";

export interface TopLayoutProps {
  count: number;
  max: number;
}

export interface MiddleLayoutProps {
  buttonShow: boolean;
  changeShowMode: React.Dispatch<React.SetStateAction<boolean>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export interface RatingShape {
  left: boolean;
  right: boolean;
}

export interface FlavorObject {
  type: FlavorType;
  typeToString: string;
  characterTitle: string;
}
