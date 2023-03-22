import React from "react";
import * as style from "./GridLayout.style"

export default function GridLayout({children}:{children:any}) {
    return <style.Container className="GridLayout">
        {children}
    </style.Container>
}