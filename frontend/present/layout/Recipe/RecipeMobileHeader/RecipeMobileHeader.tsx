import React from "react";
import * as style from "./RecipeMobileHeader.style";

import { RecipeNavProps } from "@/types/Recipe/dummy";
import NavCompoSide from "@/assets/image/navCompoSide.svg"

export default function RecipeMobileHeader({
  RecipeArr,
  selectIdx,
  setSelectedIdx,
}: RecipeNavProps) {
  
  const navHandler = (idx: number) => {
    setSelectedIdx(idx);
  };

  const NavArr = RecipeArr.map((elem, idx) => {
    if (selectIdx === idx) {
      return (
        <style.Compo
          key={idx}
          onClick={() => {
            navHandler(idx);
          }}
          className={"active"}
          open={elem.isOpen}
          idx={idx}
        >
          {elem.category}
        </style.Compo>
      );
    } else {
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
    }
  });

  return (
    <style.ContainerNav selectIdx={selectIdx}>
      {NavArr}
      <style.Indicator  selectIdx={selectIdx}>
        <NavCompoSide />
        <NavCompoSide />
      </style.Indicator>
    </style.ContainerNav>
  );
}
