import React, { useState, useEffect } from "react";
import GridLayout from "@/present/layout/GridLayout/GridLayout";
import ReceipeImg from "@/present/layout/Receipe/ReceipeImg/ReceipeImg";

import Test from "@/assets/image/test.jpg";
import ReceipeNav from "@/present/layout/Receipe/ReceipeNav/ReceipeNav";
import ReceipeContent from "@/present/layout/Receipe/ReceipeContent/ReceipeContent";
import Piechart from "@/present/component/PieChart/PieChart";
import { ReceipeNavType } from "@/types/Receipe/dummy";
import ReceipeTab from "@/present/layout/Receipe/ReceipeTab/ReceipeTab";

import * as style from "@/present/layout/Receipe/pageStyle";

import { FlavorInfo } from "@/types/RecipeFlavor/dummy";
import RecipeFlavorLayout from "@/present/layout/Receipe/RecipeFlavor/RecipeFlavorLayout";

export default function Receipe() {
  const flavorList: Array<FlavorInfo> = [
    { type: "spicy", value: 4 },
    { type: "sweet", value: 2.5 },
    { type: "salty", value: 3 },
    { type: "oily", value: 1.4 },
  ];
  //색상 선택
  const [selectIdx, setSelectedIdx] = useState(0);
  const [receipeArr, setReceipeArr] = useState<Array<ReceipeNavType>>([
    {
      category: "맛",
      content: <RecipeFlavorLayout values={flavorList} recipeImage={Test} />,
      isOpen: true,
    },
    {
      category: "영양소",
      content: <Piechart />,
      isOpen: false,
    },
    {
      category: "레시피",
      content: <ReceipeTab />,
      isOpen: false,
    },
  ]);

  useEffect(() => {
    const tmp = receipeArr.map((elem, idx) => {
      if (idx === selectIdx) {
        elem.isOpen = true;
      } else {
        elem.isOpen = false;
      }

      return elem;
    });

    setReceipeArr([...tmp]);
  }, [selectIdx]);

  //TestImg
  const mainImg = Test;
  const subImg = [Test, Test, Test];

  return (
    <style.PageContainer>
      {/* PC ver */}
      <GridLayout>
        {/* 음식 이미지 */}
        <ReceipeImg mainImg={mainImg} subImg={subImg} />

        {/* 음식 상세 정보 */}
        <div>
          <ReceipeNav
            receipeArr={receipeArr}
            selectIdx={selectIdx}
            setSelectedIdx={setSelectedIdx}
          />
          <ReceipeContent
            receipeArr={receipeArr}
            selectIdx={selectIdx}
            setSelectedIdx={setSelectedIdx}
          />
        </div>
      </GridLayout>

      {/* Mobile ver */}
      <GridLayout>
        {/* 음식 상세 정보 */}
        <ReceipeNav
          receipeArr={receipeArr}
          selectIdx={selectIdx}
          setSelectedIdx={setSelectedIdx}
        />
        <ReceipeContent
          receipeArr={receipeArr}
          selectIdx={selectIdx}
          setSelectedIdx={setSelectedIdx}
        />
      </GridLayout>
    </style.PageContainer>
  );
}
