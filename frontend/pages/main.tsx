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
import Loading from "@/present/common/Loading/Loading";

import forkCursor from "@/assets/image/fork.png";
import { cursorImageAtom, cursorIsShowAtom } from "@/store/cursorStore";

export default function main() {
  const [loading, setLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [token] = useAtom(userTokenSave);
  const [refreshCount, setRefreshCount] = useState(-1);
  const [allFoodList, setAllFoodList] = useState<Array<MainFood>>([]);
  const [nowFoodList, setNowFoodList] = useState<Array<MainFood>>([]);
  const [, setCursorShow] = useAtom(cursorIsShowAtom);
  const [, setCursorImage] = useAtom(cursorImageAtom);

  const onClickRefresh = () => {
    setRefreshCount((current) => current + 1);
  };

  useEffect(() => {
    setCursorImage(forkCursor);
    setCursorShow(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      setCursorShow(false);
    };
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
    try {
      if (token.accessToken) {
        setIsFetching(true);

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
                recipeId: item.id,
              };

              setTimeout(() => {
                setIsFetching(false);
              }, 1500);
              obj.contents.push({ key: "레시피 난이도", value: item.level });
              obj.contents.push({ key: "소요시간", value: item.time });

              list.push(obj);
            });
            setAllFoodList(list);
            setRefreshCount(0);
          } else {
            setIsFetching(false);
          }
        });
      }
    } catch (e) {
      setIsFetching(false);
    }
  }, [token.accessToken]);

  return (
    <>
      {/* 강제 로딩 시간 + 데이터 가져오는 시간이 모두 끝나야 페이지 렌더링 */}
      {loading && isFetching ? <Loading /> : null}
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
