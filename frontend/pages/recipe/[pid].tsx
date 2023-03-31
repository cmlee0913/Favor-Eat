import React, { useState, useEffect } from "react";
import GridLayout from "@/present/layout/GridLayout/GridLayout";
import RecipeImg from "@/present/layout/Recipe/RecipeImg/RecipeImg";

import Test from "@/assets/image/test.jpg";
import RecipeNav from "@/present/layout/Recipe/RecipeNav/RecipeNav";
import RecipeContent from "@/present/layout/Recipe/RecipeContent/RecipeContent";
import { RecipeData, RecipeNavType } from "@/types/Recipe/dummy";
import RecipeTab from "@/present/layout/Recipe/RecipeTab/RecipeTab";

import * as style from "@/present/layout/Recipe/pageStyle";

import { FlavorInfo } from "@/types/RecipeFlavor/dummy";
import RecipeFlavorLayout from "@/present/layout/Recipe/RecipeFlavor/RecipeFlavorLayout";
import { useAtom } from "jotai";
import { recipeFavorCheckedAtom } from "@/store/recipeDetail";
import Ingrediant from "@/present/layout/Ingrediant/Ingrediant";
import { useRouter } from "next/router";
import { getAsync } from "@/action/apis/apis";
import { apiURL } from "@/store/constants";

export default function Recipe() {
  const router = useRouter();
  const { pid } = router.query;

  const [recipeData, setRecipeData] = useState<RecipeData>({
    name: "",
    quantity: "",
    time: "",
    level: "",
    image: "",
    nutrientInfo: {
      calorie: 0,
      moisture: 0,
      protein: 0,
      fat: 0,
      carbohydrate: 0,
      sugars: 0,
      fiber: 0,
      calcium: 0,
      iron: 0,
      phosphorus: 0,
      potassium: 0,
      salt: 0,
      vitaminA: 0,
      vitaminC: 0,
      vitaminD: 0,
      cholesterol: 0,
      saturatedfat: 0,
      transfat: 0,
    },
    tasteInfo: {
      spicy: 0,
      sweet: 0,
      salty: 0,
      oily: 0,
    },
    recipesList: [],
    ingredientsInFoodList: [],
  });
  //색상 선택
  const [selectIdx, setSelectedIdx] = useState(0);
  const [RecipeArr, setRecipeArr] = useState<Array<RecipeNavType>>([
    {
      category: "맛",
      content: (
        <RecipeFlavorLayout
          recipeImage={Test}
          tasteInfo={recipeData.tasteInfo}
        />
      ),
      isOpen: true,
    },
    {
      category: "영양소",
      content: <Ingrediant nutrientInfo={recipeData.nutrientInfo} />,
      isOpen: false,
    },
    {
      category: "레시피",
      content: (
        <RecipeTab
          quantity={recipeData.quantity}
          ingredientsInFoodList={recipeData.ingredientsInFoodList}
          recipesList={recipeData.recipesList}
        />
      ),
      isOpen: false,
    },
  ]);

  useEffect(() => {
    if (pid) {
      getAsync(`https://j8d108.p.ssafy.io/api/foods/${pid}`).then((res) => {
        if (res.isSuccess) {
          setRecipeData({ ...res.result });
          setRecipeArr([
            {
              category: "맛",
              content: (
                <RecipeFlavorLayout
                  recipeImage={Test}
                  tasteInfo={res.result.tasteInfo}
                />
              ),
              isOpen: true,
            },
            {
              category: "영양소",
              content: <Ingrediant nutrientInfo={res.result.nutrientInfo} />,
              isOpen: false,
            },
            {
              category: "레시피",
              content: (
                <RecipeTab
                  quantity={res.result.quantity}
                  ingredientsInFoodList={res.result.ingredientsInFoodsList}
                  recipesList={res.result.recipesList}
                />
              ),
              isOpen: false,
            },
          ]);
        } else {
          console.log(res);
        }
      });
    }
  }, [pid]);

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
  const subImg = [Test, Test, Test];

  //레시피 즐겨찾기 여부
  //레시피 데이터 들고올때 초기화 필요
  const [recipeFavorChecked, setRecipeFavorChecked] = useAtom(
    recipeFavorCheckedAtom
  );

  return (
    <style.PageContainer>
      {/* PC ver */}
      <GridLayout>
        {/* 음식 이미지 */}
        <RecipeImg mainImg={recipeData.image} subImg={subImg} />

        {/* 음식 상세 정보 */}
        <div>
          <RecipeNav
            RecipeArr={RecipeArr}
            selectIdx={selectIdx}
            setSelectedIdx={setSelectedIdx}
            name={recipeData.name}
            level={recipeData.level}
            time={recipeData.time}
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
          name={recipeData.name}
          level={recipeData.level}
          time={recipeData.time}
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
