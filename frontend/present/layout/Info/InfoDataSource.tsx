import React from "react";
import * as style from "./Info.style";

const link = {
  recipe:
    "https://www.figma.com/file/1PNIjJxYLe4GLdvhklaYEH/Untitled?node-id=0-1&t=EtZpxB8o667OHcZb-0",
  nutrient: "https://various.foodsafetykorea.go.kr/nutrient/",
};

const onClickLink = (type: string) => {
  window.open(link[type]);
};

export default function InfoDataSource() {
  const url = "https://various.foodsafetykorea.go.kr/nutrient/";

  return (
    <style.InfoDataSource>
      <div onClick={() => onClickLink("recipe")}>
        <span>레시피 정보 - 만개의 레시피</span>
      </div>
      <div onClick={() => onClickLink("nutrient")}>
        <span>영양소 정보 - 식품안전나라 식품영양성분 DB</span>
      </div>
    </style.InfoDataSource>
  );
}
