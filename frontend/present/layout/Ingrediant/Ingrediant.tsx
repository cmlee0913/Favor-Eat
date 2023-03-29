import React from "react";
import * as style from "./Ingrediant.style";
import Image from "next/image";

import Piechart from "@/present/component/PieChart/PieChart";
import { NutrientObject } from "@/types/RecipeFlavor/dummy";

import ShutDownService from "@/assets/image/ShutDownService.png"
import Exclamation from "@/assets/icon/Exclamation.png"

function Ingrediant({ nutrientInfo }: { nutrientInfo: NutrientObject }) {
  const {
    calorie,
    moisture,
    protein,
    fat,
    carbohydrate,
    sugars,
    fiber,
    calcium,
    iron,
    phosphorus,
    potassium,
    salt,
    vitaminA,
    vitaminC,
    vitaminD,
    cholesterol,
    saturatedfat,
    transfat,
  } = nutrientInfo;

  const nutrient = (
    <style.Container>
      <Piechart />

      <p>그 외 영양소</p>
    </style.Container>
  );

  const nutrientNull = <style.NullContainer>
    <Image src={ShutDownService} width={'1000'} height={'1000'} alt="점검중입니다" />
    <Image src={Exclamation} width={'500'} height={'500'} alt="점검중입니다" />
    <p>현재 개발 중인 기능입니다</p>
  </style.NullContainer>;

  return (
    <>
      {calorie === 0 &&
      moisture === 0 &&
      protein === 0 &&
      fat === 0 &&
      carbohydrate === 0
        ? nutrientNull
        : nutrient}
    </>
  );
}

export default Ingrediant;
