import React from "react";
import * as style from "./RecipeTab.style";
import Image from "next/image";
import { RecipeProcessProps } from "@/types/Recipe/dummy";

export default function RecipeTab({
  quantity,
  ingredientsInFoodList,
  recipesList,
}: RecipeProcessProps) {

  // 요리 과정
  const recipeProcess = recipesList.map((elem, idx) => {
    return (
      <style.RecipeProcessCompo key={idx}>
        <style.IngredientPhoto>
          <p>{idx + 1}</p>
          <Image src={elem.image} alt={elem.content} width={500} height={500} />
        </style.IngredientPhoto>
        <div>{elem.content}</div>
      </style.RecipeProcessCompo>
    );
  });

  // 요리 재료
  const Ingredients = ingredientsInFoodList.map((elem, idx) => {
    return (
      <style.Ingredient key={idx}>
        <div>{elem.name}</div>
        <div>
          {elem.amount}
          {elem.unit}
        </div>
      </style.Ingredient>
    );
  });

  return (
    <style.Container>
      <style.RecipeTabHeader>
        <h2>재료</h2>
        <p>{quantity}</p>
      </style.RecipeTabHeader>
      <style.IngredientCompo>{Ingredients}</style.IngredientCompo>
      <style.RecipeTabBody>
        <h2>레시피</h2>
        {recipeProcess}
      </style.RecipeTabBody>
    </style.Container>
  );
}
