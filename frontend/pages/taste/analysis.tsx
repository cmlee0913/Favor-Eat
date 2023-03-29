import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";

import TopLayout from "@/present/layout/Taste/Analysis/TopLayout";
import MiddleLayout from "@/present/layout/Taste/Analysis/MiddleLayout";
import BottomLayout from "@/present/layout/Taste/Analysis/BottomLayout";
import { RecipeData } from "@/types/Taste/dummy";

import {
  currentIndexAtom,
  currentRecipeDataAtom,
  recipeRatingListAtom,
} from "@/store/tasteStore";
import { userTokenSave } from "@/store/userStore";
import { getTasteRecipeList } from "@/action/apis/taste";

import * as style from "@/present/layout/Taste/Analysis/AnalysisLayout.style";
import { FoodForTasteResponseType } from "@/types/api/tasteApiType";

const requestRecipeList = async (requestCount: number, token: string) => {
  const { isSuccess, result } = await getTasteRecipeList(requestCount, token);

  if (isSuccess) {
    const list: Array<RecipeData> = [];
    result.forEach((item: FoodForTasteResponseType) => {
      list.push({
        imageSrc: item.image,
        recipeName: item.name,
        recipeId: item.foodsId,
      });
    });
    return list;
  }
  return null;
};

export default function Analysis() {
  const MAX_COUNT = 5;
  const [canStop, setCanStop] = useState(false);
  const [requestCount, setRequestCount] = useState(0);
  const [recipeList, setRecipeList] = useState<Array<RecipeData>>([]);

  const [currentIndex, setCurrentIndex] = useAtom(currentIndexAtom);
  const [recipeRatingList, setRecipeRatingList] = useAtom(recipeRatingListAtom);
  const [, setCurrentRecipeData] = useAtom(currentRecipeDataAtom);

  const [token] = useAtom(userTokenSave);

  useEffect(() => {
    if (currentIndex !== -1) return;
    if (token.accessToken) {
      requestRecipeList(requestCount, token.accessToken).then((list) => {
        setRecipeList(list);
        setCurrentIndex(0);
      });
    }
  }, [token.accessToken]);

  useEffect(() => {
    if (currentIndex === -1) return;
    if (currentIndex >= recipeList.length) {
      //TODO : 서버에서 새로운 데이터 받아오기
      setRequestCount((current) => current + 1);
      requestRecipeList(requestCount + 1, token.accessToken).then((list) => {
        setRecipeList(list);
        setCurrentIndex(0);
      });
      return;
    }

    //default value가 아닌 경우만 업데이트
    setCurrentRecipeData(recipeList[currentIndex]);
  }, [currentIndex]);

  useEffect(() => {
    if (!canStop) {
      if (recipeRatingList.length >= MAX_COUNT) {
        setCanStop(true);
      }
    }
  }, [recipeRatingList.length]);

  return (
    <style.Container>
      <TopLayout max={MAX_COUNT} />
      <MiddleLayout canGoMain={canStop} />
      <BottomLayout canGoMain={canStop} evaluatedCount={currentIndex + 1} />
    </style.Container>
  );
}
