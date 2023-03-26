export interface InfoTypes {
  category: string;
  content: any;
  isOpen: boolean;
}

export interface InfoContentProps {
  infoArr: Array<InfoTypes>;
  selectIdx: number;
  setSelectedIdx: React.Dispatch<React.SetStateAction<number>>;
}
