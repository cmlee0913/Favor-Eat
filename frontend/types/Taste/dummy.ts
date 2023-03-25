export interface TopLayoutProps {
  count: number;
  max: number;
}

export interface MiddleLayoutProps {
  buttonShow: boolean;
  changeShowMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RatingShape {
  left: boolean;
  right: boolean;
}
