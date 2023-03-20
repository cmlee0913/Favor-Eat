import { ReceipeContentProps } from "@/types/Receipe/dummy"
import ReceipeAccordian from "../../Accordian/ReceipeAccordian"
import * as style from "./ReceipeContent.style"

export default function ReceipeContent({ReceipeArr, selectIdx, setSelectedIdx}:ReceipeContentProps) {
    return <style.Content>
        <ReceipeAccordian ReceipeArr={ReceipeArr} selectIdx={selectIdx} setSelectedIdx={setSelectedIdx}/>
    </style.Content>
}