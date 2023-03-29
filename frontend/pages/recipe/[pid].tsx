import React, { useState, useEffect } from "react";
import GridLayout from "@/present/layout/GridLayout/GridLayout";
import RecipeImg from "@/present/layout/Recipe/RecipeImg/RecipeImg";

import Test from "@/assets/image/test.jpg";
import RecipeNav from "@/present/layout/Recipe/RecipeNav/RecipeNav";
import RecipeContent from "@/present/layout/Recipe/RecipeContent/RecipeContent";
import Piechart from "@/present/component/PieChart/PieChart";
import { RecipeNavType } from "@/types/Recipe/dummy";
import RecipeTab from "@/present/layout/Recipe/RecipeTab/RecipeTab";

import * as style from "@/present/layout/Recipe/pageStyle";

import { FlavorInfo } from "@/types/RecipeFlavor/dummy";
import RecipeFlavorLayout from "@/present/layout/Recipe/RecipeFlavor/RecipeFlavorLayout";

export default function Recipe() {
  const flavorList: Array<FlavorInfo> = [
    { type: "spicy", value: 4 },
    { type: "sweet", value: 2.5 },
    { type: "salty", value: 3 },
    { type: "oily", value: 1.4 },
  ];
  //색상 선택
  const [selectIdx, setSelectedIdx] = useState(0);
  const [RecipeArr, setRecipeArr] = useState<Array<RecipeNavType>>([
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
      content: <RecipeTab />,
      isOpen: false,
    },
  ]);

  useEffect(() => {
    const tmp = RecipeArr.map((elem, idx) => {
      if (idx === selectIdx) {
        elem.isOpen = true;
      } else {
        elem.isOpen = false;
      }

      return elem;
    });

    setRecipeArr([...tmp]);
  }, [selectIdx]);

  //TestImg
  const mainImg = Test;
  const subImg = [Test, Test, Test];

  return (
    <style.PageContainer>
      {/* PC ver */}
      <GridLayout>
        {/* 음식 이미지 */}
        <RecipeImg mainImg={mainImg} subImg={subImg} />

        {/* 음식 상세 정보 */}
        <div>
          <RecipeNav
            RecipeArr={RecipeArr}
            selectIdx={selectIdx}
            setSelectedIdx={setSelectedIdx}
          />
          <RecipeContent
            RecipeArr={RecipeArr}
            selectIdx={selectIdx}
            setSelectedIdx={setSelectedIdx}
          />
        </div>
      </GridLayout>

      {/* Mobile ver */}
      <GridLayout>
        {/* 음식 상세 정보 */}
        <RecipeNav
          RecipeArr={RecipeArr}
          selectIdx={selectIdx}
          setSelectedIdx={setSelectedIdx}
        />
        <RecipeContent
          RecipeArr={RecipeArr}
          selectIdx={selectIdx}
          setSelectedIdx={setSelectedIdx}
        />
      </GridLayout>
    </style.PageContainer>
  );
}
