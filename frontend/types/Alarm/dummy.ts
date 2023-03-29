export interface AlarmTypes {
  category: string;
  content: any;
  isOpen: boolean;
}

export interface AlarmContentProps {
  alarmArr: Array<AlarmTypes>;
  selectIdx: number;
  setSelectedIdx: React.Dispatch<React.SetStateAction<number>>;
}
