import React, { useEffect, useState } from "react";
import Image from "next/image";

import * as style from "@/present/layout/Main/MainLayout.style";
import LeftLayout from "@/present/layout/Main/LeftLayout";
import CharactersImage from "@/assets/image/Character/MainPage.png";
import { MobileRecipeCompo } from "@/present/component/MobileRecipeCompo/MobileRecipeCompo";
import { Flavor, MainFood, MainFoodResponse } from "@/types/Main/dummy";
import { userTokenSave } from "@/store/userStore";
import { useAtom } from "jotai";
import { getRecommendFoodList } from "@/action/apis/main";
import { FlavorType } from "@/types/RecipeFlavor/dummy";
import Loading from "@/present/common/Loading/loading";

export default function main() {
  const [loading, setLoading] = useState(true);
  const [isMainMode, setIsMainMode] = useState<boolean>(true);
  const [token] = useAtom(userTokenSave);
  const [refreshCount, setRefreshCount] = useState(-1);
  const [allFoodList, setAllFoodList] = useState<Array<MainFood>>([]);
  const [nowFoodList, setNowFoodList] = useState<Array<MainFood>>([]);

  const activeMainMode = () => {
    setIsMainMode(true);
  };
  const inactiveMainMode = () => {
    setIsMainMode(false);
  };
  const onClickRefresh = () => {
    setRefreshCount((current) => current + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  //새로고침시 전체 배열에서 다음 index값 설정
  useEffect(() => {
    const newNowList: Array<MainFood> = [];

    if (refreshCount === -1) return;

    const start = refreshCount === 0 ? 0 : 4 * refreshCount;
    let end = start + 4;
    //마지막보다 더 필요하다고 하면 아예 설정하지 않음
    if (end >= allFoodList.length) {
      return;
    }
    for (let i = start; i < end; i++) {
      newNowList.push(allFoodList[i]);
    }
    setNowFoodList(newNowList);
  }, [refreshCount]);

  useEffect(() => {
    if (token.accessToken) {
      getRecommendFoodList(token.accessToken).then((response) => {
        const { isSuccess, result } = response;
        if (isSuccess) {
          const list = [];
          result.forEach((item: MainFoodResponse) => {
            const maxValueFlavor: Flavor = {
              type: "spicy",
              value: -1,
            };
            const flavorObj = item.responseTasteInfo;
            Object.keys(flavorObj).forEach((key: FlavorType) => {
              if (flavorObj[key] > maxValueFlavor.value) {
                maxValueFlavor.type = key;
                maxValueFlavor.value = flavorObj[key];
              }
            });

            const obj: MainFood = {
              foodName: item.name,
              imgSrc: item.image,
              flavor: maxValueFlavor,
              contents: [],
              recipeId: 0,
            };

            obj.contents.push({ key: "레시피 난이도", value: item.level });
            obj.contents.push({ key: "소요시간", value: item.time });

            list.push(obj);
          });
          setAllFoodList(list);
          setRefreshCount(0);
        }
      });
    }
  }, [token.accessToken]);

  return (
    <>
      {loading ? <Loading /> : null}
      <style.Container>
        <LeftLayout
          foods={nowFoodList}
          onClickRefresh={onClickRefresh}
        ></LeftLayout>
        <style.Right>
          <style.Slogan>
            Life is short,
            <br /> Eat this first.
          </style.Slogan>
          <style.CharacterImage>
            <Image
              src={CharactersImage}
              width={400}
              height={400}
              alt="characters search for food"
            />
          </style.CharacterImage>
          <style.RecommendIcons>
            {isMainMode ? (
              <>
                <style.MainRecommendActive onClick={inactiveMainMode} />
                <style.AnotherRecommendInactive onClick={inactiveMainMode} />
              </>
            ) : (
              <>
                <style.MainRecommendInactive onClick={activeMainMode} />
                <style.AnotherRecommendActive onClick={activeMainMode} />
              </>
            )}
          </style.RecommendIcons>
        </style.Right>
        <style.MobileRefreshButton onClick={() => onClickRefresh()} />
        <style.MobileImageContainer>
          <div>
            {nowFoodList.map((item, index) => (
              <MobileRecipeCompo
                key={index}
                imgSrc={item.imgSrc}
                foodName={item?.foodName}
                flavorType={item?.flavor.type}
                flavorValue={item?.flavor.value}
                recipeId={item?.recipeId}
              />
            ))}
          </div>
        </style.MobileImageContainer>
      </style.Container>
    </>
  );
}
