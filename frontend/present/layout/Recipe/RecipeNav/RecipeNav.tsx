import React from "react";
import RecipeHeader from "@/present/component/RecipeHeader/RecipeHeader";
import RecipeMobileHeader from "../RecipeMobileHeader/RecipeMobileHeader";
import { RecipeContentProps } from "@/types/Recipe/dummy";
import * as style from "./RecipeNav.style"

export default function RecipeNav({ RecipeArr, selectIdx, setSelectedIdx }: RecipeContentProps) {
  return (
    <style.NavCompo>
      <RecipeHeader selectIdx={selectIdx} />
      <RecipeMobileHeader RecipeArr={RecipeArr} selectIdx={selectIdx} setSelectedIdx={setSelectedIdx}/>
    </style.NavCompo>
  );
}
