import React from "react";
import ReceipeHeader from "@/present/component/ReceipeHeader/ReceipeHeader";
import ReceipeMobileHeader from "../ReceipeMobileHeader/ReceipeMobileHeader";
import { ReceipeContentProps } from "@/types/Receipe/dummy";

export default function ReceipeNav({ receipeArr, selectIdx, setSelectedIdx }: ReceipeContentProps) {
  return (
    <>
      <ReceipeHeader selectIdx={selectIdx} />
      <ReceipeMobileHeader receipeArr={receipeArr} selectIdx={selectIdx} setSelectedIdx={setSelectedIdx}/>
    </>
  );
}
