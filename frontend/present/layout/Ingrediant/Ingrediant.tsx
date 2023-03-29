import Piechart from "@/present/component/PieChart/PieChart";
import React from "react";
import * as style from "./Ingrediant.style"

function Ingrediant({nutrientInfo}:{nutrientInfo:Object}) {
    return <style.Container>
        <Piechart />

        <p>그 외 영양소</p>
    </style.Container>
}

export default Ingrediant