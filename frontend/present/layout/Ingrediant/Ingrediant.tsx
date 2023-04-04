import React from "react";
import * as style from "./Ingrediant.style";
import Image from "next/image";

import Piechart from "@/present/component/PieChart/PieChart";
import { NutrientObject } from "@/types/RecipeFlavor/dummy";

import ShutDownService from "@/assets/image/ShutDownService.png";
import Exclamation from "@/assets/icon/Exclamation.png";
import { etcNutrientFunc, vitaminNutrientFunc } from "@/action/apis/Ingrediant";

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

  // 영양소 정보가 저장되어 있는 배열
  const etcNutrient = etcNutrientFunc({
    sugars,
    fiber,
    calcium,
    iron,
    phosphorus,
    potassium,
    salt,
    cholesterol,
    saturatedfat,
    transfat,
  });
  const vitaminNutrient = vitaminNutrientFunc({ vitaminA, vitaminC, vitaminD });

  // 영양소 정보 Progressbar
  const vitaminCompo = vitaminNutrient.map((elem, idx) => {
    if (elem.value !== 0) {
      return (
        <style.Progressbar key={idx} className="Vitamin">
          <p>{elem.name}</p>
          <style.Contentbar
            color={elem.color}
            width={elem.width}
            idx={idx}
            className="Vitamin"
          >
            <p>
              {elem.value}
              {elem.unit}
            </p>
          </style.Contentbar>
        </style.Progressbar>
      );
    }
  });

  const nutrientCompo = etcNutrient.map((elem, idx) => {
    if (elem.value !== 0) {
      return (
        <style.EctNutrientCompo key={idx}>
          <p>{elem.name}</p>
          <style.Progressbar>
            <style.Contentbar color={elem.color} width={elem.width} idx={idx} />
            <p>
              {elem.value} &nbsp;
              {elem.unit}
            </p>
          </style.Progressbar>
        </style.EctNutrientCompo>
      );
    }
  });

  // 영양소 정보가 있을 때
  const nutrient = (
    <style.Container>
      <Piechart
        calorie={calorie}
        moisture={moisture}
        protein={protein}
        fat={fat}
        carbohydrate={carbohydrate}
      />

      <p>그 외 영양소</p>
      <style.EctNutrientCompo className="Vitamin">
        <p>비타민</p>
        <div>{vitaminCompo}</div>
      </style.EctNutrientCompo>

      {nutrientCompo}
    </style.Container>
  );

  //영양소 정보가 없을 때
  const nutrientNull = (
    <style.NullContainer>
      <Image
        src={ShutDownService}
        width={"3000"}
        height={"3000"}
        alt="점검중입니다"
      />
      <Image
        src={Exclamation}
        width={"500"}
        height={"500"}
        alt="점검중입니다"
      />
      <p>현재 개발 중인 기능입니다</p>
    </style.NullContainer>
  );

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
