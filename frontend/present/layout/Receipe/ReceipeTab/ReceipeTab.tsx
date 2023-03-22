import React from "react";
import * as style from "./ReceipeTab.style";

export default function ReceipeTab() {
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

  const receipeProcess = test.map((elem, idx) => {
    return (
      <style.ReceipeProcessCompo key={idx}>
        {elem.content}
      </style.ReceipeProcessCompo>
    );
  });

  return (
    <style.Container>
      <style.ReceipeTabHeader>
        <h2>대충 어떤 음식 이름</h2>
        <p>몇인분 기준</p>
      </style.ReceipeTabHeader>
      <style.IngredientCompo>
        뭐가 있겟죠
      </style.IngredientCompo>
      <style.ReceipeTabBody>
        <h2>레시피</h2>
        {receipeProcess}
      </style.ReceipeTabBody>
    </style.Container>
  );
}
