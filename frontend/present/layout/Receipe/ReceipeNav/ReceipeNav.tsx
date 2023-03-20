import React from "react";
import ReceipeHeader from "@/present/component/ReceipeHeader/ReceipeHeader";
import ReceipeMobileHeader from "../ReceipeMobileHeader/ReceipeMobileHeader";
import { ReceipeProps } from "@/types/Receipe/dummy";

export default function ReceipeNav({ReceipeArr, selectIdx }:ReceipeProps) {
    return <>
        <ReceipeHeader selectIdx={selectIdx}/>
        <ReceipeMobileHeader ReceipeArr={ReceipeArr} selectIdx= {selectIdx}/>
    </>
}