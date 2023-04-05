import React from "react";
import RecipeHeader from "@/present/component/RecipeHeader/RecipeHeader";
import RecipeMobileHeader from "../RecipeMobileHeader/RecipeMobileHeader";
import { RecipeNavProps } from "@/types/Recipe/dummy";
import * as style from "./RecipeNav.style";

export default function RecipeNav({
  RecipeArr,
  selectIdx,
  setSelectedIdx,
  name,
  level,
  time,
}: RecipeNavProps) {
  return (
    <style.NavCompo>
      <RecipeHeader
        selectIdx={selectIdx}
        name={name}
        level={level}
        time={time}
      />
      <RecipeMobileHeader
        RecipeArr={RecipeArr}
        selectIdx={selectIdx}
        setSelectedIdx={setSelectedIdx}
        name={name}
        level={level}
        time={time}
      />
    </style.NavCompo>
  );
}
