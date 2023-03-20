import { ReceipeContentProps } from "@/types/Receipe/dummy"
import ReceipeAccordian from "../../Accordian/ReceipeAccordian"
import * as style from "./ReceipeContent.style"

export default function ReceipeContent({receipeArr, selectIdx, setSelectedIdx}:ReceipeContentProps) {
    return <style.Content>
        <ReceipeAccordian receipeArr={receipeArr} selectIdx={selectIdx} setSelectedIdx={setSelectedIdx}/>
    </style.Content>
}