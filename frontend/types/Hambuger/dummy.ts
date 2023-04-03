export interface HambugerInnerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface HambugerFont {
  top: string;
  bottom: string;
  left: string;
  right: string;
}
