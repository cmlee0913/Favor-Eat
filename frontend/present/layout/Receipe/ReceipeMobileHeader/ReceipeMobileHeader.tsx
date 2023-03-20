import React from "react";
import { ReceipeContentProps } from "@/types/Receipe/dummy";
import * as style from "./ReceipeMobileHeader.style";

export default function ReceipeMobileHeader({
  receipeArr,
  selectIdx,
  setSelectedIdx,
}: ReceipeContentProps) {
  const navHandler = (idx: number) => {
    setSelectedIdx(idx);
  };

  const NavArr = receipeArr.map((elem, idx) => {
    return (
      <style.Compo
        key={idx}
        onClick={() => {
          navHandler(idx);
        }}
        open={elem.isOpen}
        idx={idx}
      >
        {elem.category}
      </style.Compo>
    );
  });

  return (
    <style.ContainerNav selectIdx={selectIdx}>
      
      {NavArr}</style.ContainerNav>
  );
}
