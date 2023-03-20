export interface ReceipeImgProps {
    mainImg: any,
    subImg: any
}

export interface ReceipeNavType {
    category: string;
    content: JSX.Element;
    isOpen: boolean
}

export interface ReceipeProps {
    receipeArr: Array<ReceipeNavType>;
    selectIdx: number;
}

export interface ReceipeContentProps {
    receipeArr: Array<ReceipeNavType>;
    selectIdx: number;
    setSelectedIdx: React.Dispatch<React.SetStateAction<number>>;
}

export interface ReceipeHeaderProps {
    selectIdx: number;
}