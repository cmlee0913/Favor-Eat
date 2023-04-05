import React from "react";
import * as style from "./Info.style";
import Link from "next/link";

export default function InfoDataSource() {
  const url = "https://various.foodsafetykorea.go.kr/nutrient/";

  return (
    <style.InfoDataSource>
      <div>레시피 정보 - 만개의 레시피 Crawling</div>
      <div>
        영양소 정보 - 식품안전나라 식품영양성분 DB
        <button
          onClick={() => {
            window.open(url);
          }}
        ></button>
      </div>
    </style.InfoDataSource>
  );
}
