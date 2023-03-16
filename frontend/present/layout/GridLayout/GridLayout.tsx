import React from "react";
import ReceipeAccordian from "../Accordian/ReceipeAccordian";
import * as style from "./GridLayout.style"

export default function GridLayout({children}:{children:any}) {
    return <style.Container>
        {children}
    </style.Container>
}