export interface RecipeImgProps {
    mainImg: any,
    subImg: any
}

export interface RecipeNavType {
    category: string;
    content: JSX.Element;
    isOpen: boolean
}

export interface RecipeProps {
    RecipeArr: Array<RecipeNavType>;
    selectIdx: number;
}

export interface RecipeContentProps {
    RecipeArr: Array<RecipeNavType>;
    selectIdx: number;
    setSelectedIdx: React.Dispatch<React.SetStateAction<number>>;
}

export interface RecipeHeaderProps {
    selectIdx: number;
}