import { RecipeNavType } from "../Recipe/dummy";

export interface AccordianCompoTypes {
    category:string;
    content:any
}

export interface AccordianProps {
    elem: RecipeNavType;
    idx:number;
    accordianHandler: Function;
}
