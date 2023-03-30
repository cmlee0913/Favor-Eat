import React from "react";
import * as style from "./Ingrediant.style";
import Image from "next/image";

import Piechart from "@/present/component/PieChart/PieChart";
import { NutrientObject } from "@/types/RecipeFlavor/dummy";

import ShutDownService from "@/assets/image/ShutDownService.png";
import Exclamation from "@/assets/icon/Exclamation.png";

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

  const etcNutrient = [
    {
      name: "당분",
      type: "sugars",
      value: sugars,
      color: "#FFBB4C",
      width: sugars,
      unit: "g",
    },
    {
      name: "식이섬유",
      type: "fiber",
      value: fiber,
      color: "#F47676",
      width: (fiber / 25) * 100,
      unit: "g",
    },
    {
      name: "칼슘",
      type: "calcium",
      value: calcium,
      color: "#D1D5E0",
      width: (calcium / 800) * 100,
      unit: "mg",
    },
    {
      name: "철분",
      type: "iron",
      value: iron,
      color: "#9B82A5",
      width: (iron / 500) * 100,
      unit: "㎍",
    },
    {
      name: "인",
      type: "phosphorus",
      value: phosphorus,
      color: "#87827B",
      width: (phosphorus / 700) * 100,
      unit: "mg",
    },
    {
      name: "칼륨",
      type: "potassium",
      value: potassium,
      color: "#FFDCE1",
      width: (potassium / 3500) * 100,
      unit: "mg",
    },
    {
      name: "나트륨",
      type: "salt",
      value: salt,
      color: "#47B8E0",
      width: (salt / 1500) * 100,
      unit: "mg",
    },
    {
      name: "트랜스지방산",
      type: "transfat",
      value: transfat,
      color: "#9494E0",
      width: transfat * 100,
      unit: "g",
    },
    {
      name: "포화지방산",
      type: "saturatedfat",
      value: saturatedfat,
      color: "#6565D8",
      width: saturatedfat,
      unit: "g",
    },
    {
      name: "콜레스테롤",
      type: "cholesterol",
      value: cholesterol,
      color: "#008729",
      width: cholesterol,
      unit: "mg",
    },
  ];

  const vitaminNutrient = [
    {
      name: "비타민A",
      type: "vitaminA",
      value: vitaminA,
      color: "#FFE54D",
      width: 0,
      unit: "㎍",
    },
    {
      name: "비타민C",
      type: "vitaminC",
      value: vitaminC,
      color: "#FFFB66",
      width: 0,
      unit: "㎍",
    },
    {
      name: "비타민D",
      type: "vitaminD",
      value: vitaminD,
      color: "#E9FF66",
      width: 0,
      unit: "㎍",
    },
  ];

  const nutrientCompo = etcNutrient.map((elem, idx) => {
    if (elem.value !== 0) {
      return (
        <style.EctNutrientCompo key={idx}>
          <p>{elem.name}</p>
          <style.Progressbar>
            <style.Contentbar color={elem.color} width={elem.width} />
            <p>
              {elem.value}
              {elem.unit}
            </p>
          </style.Progressbar>
        </style.EctNutrientCompo>
      );
    }
  });

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
      {nutrientCompo}
    </style.Container>
  );

  const nutrientNull = (
    <style.NullContainer>
      <Image
        src={ShutDownService}
        width={"1000"}
        height={"1000"}
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
