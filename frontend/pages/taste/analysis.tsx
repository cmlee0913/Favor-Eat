import React, { useEffect, useState } from "react";
import * as style from "@/present/layout/Taste/Analysis/AnalysisLayout.style";

import TopLayout from "@/present/layout/Taste/Analysis/TopLayout";
import MiddleLayout from "@/present/layout/Taste/Analysis/MiddleLayout";
import BottomLayout from "@/present/layout/Taste/Analysis/BottomLayout";
import { RecipeData } from "@/types/Taste/dummy";

export default function Analysis() {
  const MAX_COUNT = 5;
  const [count, setCount] = useState(0);
  const [canStop, setCanStop] = useState(false);

  const recipeDataList: Array<RecipeData> = [
    {
      imageSrc:
        "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg",
      recipeName: "피자",
      recipeId: 0,
    },
    {
      imageSrc:
        "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg",
      recipeName: "햄버거",
      recipeId: 1,
    },
    {
      imageSrc:
        "https://cdn.pixabay.com/photo/2016/11/23/18/31/pasta-1854245_960_720.jpg",
      recipeName: "페스토 파스타",
      recipeId: 2,
    },
    {
      imageSrc:
        "https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_960_720.jpg",
      recipeName: "스테이크",
      recipeId: 3,
    },
    {
      imageSrc:
        "https://cdn.pixabay.com/photo/2018/08/29/19/01/fig-3640553_960_720.jpg",
      recipeName: "무화과 샌드위치",
      recipeId: 4,
    },
    {
      imageSrc:
        "https://cdn.pixabay.com/photo/2019/09/05/01/08/food-4452837_960_720.jpg",
      recipeName: "오리 불고기",
      recipeId: 5,
    },
    {
      imageSrc:
        "https://cdn.pixabay.com/photo/2020/02/08/03/56/octopus-desktop-4829030_960_720.jpg",
      recipeName: "낙지 전골",
      recipeId: 6,
    },
    {
      imageSrc:
        "https://cdn.pixabay.com/photo/2016/04/22/18/52/chicken-soup-1346310_960_720.jpg",
      recipeName: "닭백숙",
      recipeId: 7,
    },
    {
      imageSrc:
        "https://cdn.pixabay.com/photo/2016/10/13/19/15/bibimbap-1738580_960_720.jpg",
      recipeName: "닭백숙",
      recipeId: 8,
    },
  ];

  const [recipeList, setRecipeList] =
    useState<Array<RecipeData>>(recipeDataList);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const onClickHate = () => {
    if (currentIndex < recipeDataList.length) {
      setCurrentIndex((current) => current + 1);
    }
  };
  const onClickNext = () => {
    setCurrentIndex((current) => current + 1);
    setCount((current) => current + 1);
  };

  useEffect(() => {
    if (recipeList.length > 0) {
      setCurrentIndex(0);
    }
  }, [recipeList.length]);

  useEffect(() => {
    //TODO : t서버에서 새로운 데이터 받아오기
    if (currentIndex === recipeDataList.length - 1) {
      const newList: Array<RecipeData> = [
        {
          imageSrc:
            "https://cdn.pixabay.com/photo/2015/04/06/16/21/korean-food-709606_960_720.jpg",
          recipeName: "비빔국수",
          recipeId: 9,
        },
        {
          imageSrc:
            "https://cdn.pixabay.com/photo/2018/12/03/01/04/mandu-3852527_960_720.jpg",
          recipeName: "만두전골",
          recipeId: 10,
        },
        {
          imageSrc:
            "https://cdn.pixabay.com/photo/2014/01/09/10/14/kimchi-fried-rice-241051_960_720.jpg",
          recipeName: "김치 볶음밥",
          recipeId: 11,
        },
        {
          imageSrc:
            "https://cdn.pixabay.com/photo/2017/07/19/03/14/lures-and-buy-new-desktop-2517767_960_720.jpg",
          recipeName: "쏘가리 매운탕",
          recipeId: 11,
        },
      ];
      setRecipeList(newList);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (!canStop) {
      if (count >= MAX_COUNT) {
        setCanStop(true);
      }
    }
  }, [count]);

  return (
    <style.Container>
      <TopLayout count={count} max={MAX_COUNT} />
      <MiddleLayout
        canGoMain={canStop}
        recipeData={currentIndex > -1 ? recipeList[currentIndex] : null}
        count={count}
        clickHate={onClickHate}
        clickNext={onClickNext}
      />
      <BottomLayout canGoMain={canStop} evaluatedCount={currentIndex + 1} />
    </style.Container>
  );
}
