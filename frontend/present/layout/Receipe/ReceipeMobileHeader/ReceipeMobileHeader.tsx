import React from "react";
import { ReceipeProps } from "@/types/Receipe/dummy";
import * as style from "./ReceipeMobileHeader.style";

export default function ReceipeMobileHeader({ ReceipeArr }: ReceipeProps) {
  const NavArr = ReceipeArr.map((elem, idx) => {
    return <style.Compo key={idx}>{elem.category}</style.Compo>;
  });
  
  return <style.ContainerNav>{NavArr}</style.ContainerNav>;
}
