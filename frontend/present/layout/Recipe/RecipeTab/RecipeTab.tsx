import React from "react";
import * as style from "./RecipeTab.style";

export default function RecipeTab() {
  const test = [
    {
      content: "step 1",
      image: "{이미지 링크}",
    },
    {
      content: "step 2",
      image: "{이미지 링크}",
    },
    {
      content: "step 3",
      image: "{이미지 링크}",
    },
  ];

  const recipeProcess = test.map((elem, idx) => {
    return (
      <style.RecipeProcessCompo key={idx}>
        {elem.content}
      </style.RecipeProcessCompo>
    );
  });

  return (
    <style.Container>
      <style.RecipeTabHeader>
        <h2>대충 어떤 음식 이름</h2>
        <p>몇인분 기준</p>
      </style.RecipeTabHeader>
      <style.IngredientCompo>
        뭐가 있겟죠
      </style.IngredientCompo>
      <style.RecipeTabBody>
        <h2>레시피</h2>
        {recipeProcess}
      </style.RecipeTabBody>
    </style.Container>
  );
}
