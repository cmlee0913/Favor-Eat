import { ReceipeNavType } from "../Receipe/dummy";

export interface AccordianCompoTypes {
    category:string;
    content:any
}

export interface AccordianProps {
    elem: ReceipeNavType;
    idx:number;
    accordianHandler: Function;
}
