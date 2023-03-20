export interface ReceipeImgProps {
    mainImg: any,
    subImg: any
}

export interface ReceipeNav {
    category: string;
    content: JSX.Element
}

export interface ReceipeProps {
    ReceipeArr: Array<ReceipeNav>;
    selectIdx: number;
}

export interface ReceipeContentProps {
    ReceipeArr: Array<ReceipeNav>;
    selectIdx: number;
    setSelectedIdx: React.Dispatch<React.SetStateAction<number>>;
}

export interface ReceipeHeaderProps {
    selectIdx: number;
}