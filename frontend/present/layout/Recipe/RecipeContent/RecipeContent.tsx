import { RecipeContentProps } from "@/types/Recipe/dummy"
import RecipeAccordian from "../../Accordian/RecipeAccordian"
import * as style from "./RecipeContent.style"

export default function RecipeContent({RecipeArr, selectIdx, setSelectedIdx}:RecipeContentProps) {
    return <style.Content>
        <style.MobileContent>
            {RecipeArr[selectIdx].content}
        </style.MobileContent>
        
        <RecipeAccordian RecipeArr={RecipeArr} setSelectedIdx={setSelectedIdx}/>
    </style.Content>
}