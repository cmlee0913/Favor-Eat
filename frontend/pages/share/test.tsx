import Background from "@/present/layout/Share/Test/Background";
import Content from "@/present/layout/Share/Test/Content";

import FoodImage1 from "@/assets/image/SharePage/foods/순대.png";
import FoodImage2 from "@/assets/image/SharePage/foods/닭발.jpg";
import FoodImage3 from "@/assets/image/SharePage/foods/콩국수.jpg";
import FoodImage4 from "@/assets/image/SharePage/foods/오메기떡.jpg";
import FoodImage5 from "@/assets/image/SharePage/foods/산낙지.jpg";
import FoodImage6 from "@/assets/image/SharePage/foods/홍어회.png";
import FoodImage7 from "@/assets/image/SharePage/foods/추어탕.jpg";
import FoodImage8 from "@/assets/image/SharePage/foods/번데기.jpg";
import FoodImage9_1 from "@/assets/image/SharePage/foods/성게.png";
import FoodImage9_2 from "@/assets/image/SharePage/foods/멍게.jpg";
import FoodImage10_1 from "@/assets/image/SharePage/foods/천엽.jpg";
import FoodImage10_2 from "@/assets/image/SharePage/foods/생간.jpg";

import Spicy from "@/assets/image/Character/SpicyTrip.png";
import Sweet from "@/assets/image/Character/SweetTrip.png";
import Salty from "@/assets/image/Character/SaltyTrip.png";

import { ShareFoodData } from "@/types/Share/Test/dummy";
import { foodIndexAtom, likedCountAtom } from "@/store/shareTasteStore";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { StaticImageData } from "next/image";

const foodDataList: Array<ShareFoodData> = [
  {
    imageList: [FoodImage1],
    foodTitle: "순대는",
    likeText: "떡볶이랑 찰떡궁합!",
    hateText: "굳이? 난 별로",
  },
  {
    imageList: [FoodImage2],
    foodTitle: "닭발은",
    likeText: "안주로 최고지!",
    hateText: "좀 징그러워서 별로야",
  },
  {
    imageList: [FoodImage3],
    foodTitle: "콩국수는",
    likeText: "고소한 여름 별미지!",
    hateText: "여름에는 비빔면이지",
  },
  {
    imageList: [FoodImage4],
    foodTitle: "오메기떡은",
    likeText: "좋아해서 자주 먹어",
    hateText: "그게 뭔데? 이름도 처음 들어",
  },
  {
    imageList: [FoodImage5],
    foodTitle: "산낙지는",
    likeText: "쫄깃쫄깃하고 맛있어",
    hateText: "징그러워! 싫어!",
  },
  {
    imageList: [FoodImage6],
    foodTitle: "홍어는",
    likeText: "삭혀서도 좋고 생으로도 좋아",
    hateText: "냄새가 지독해",
  },
  {
    imageList: [FoodImage7],
    foodTitle: "추어탕은",
    likeText: "쌀쌀한 가을에 한 그릇 뚝딱이지",
    hateText: "미꾸라지를 왜 음식에 넣어?",
  },
  {
    imageList: [FoodImage8],
    foodTitle: "번데기는",
    likeText: "포장마차 보이면 무조건 먹지",
    hateText: "징그러워서 싫어",
  },
  {
    imageList: [FoodImage9_1, FoodImage9_2],
    foodTitle: "성게, 멍게는",
    likeText: "횟집 가면 무조건이지",
    hateText: "난 줘도 안먹어",
  },
  {
    imageList: [FoodImage10_1, FoodImage10_2],
    foodTitle: "천엽, 생간은",
    likeText: "없어서 못먹지!",
    hateText: "꼴도 보기 싫어",
  },
];

export default function Test() {
  const maxPageCount = 10;
  const router = useRouter();
  const characterType = router.query.character as string;

  const [likedCount, setLikedCount] = useAtom(likedCountAtom);
  const [foodIndex, setFoodIndex] = useAtom(foodIndexAtom);
  const [selectedCharacter, setSelectedCharacter] =
    useState<StaticImageData>(Spicy);

  useEffect(() => {
    if (!router.isReady) return;

    switch (characterType) {
      case "spicy":
        setSelectedCharacter(Spicy);
        break;
      case "sweet":
        setSelectedCharacter(Sweet);
        break;
      case "salty":
        setSelectedCharacter(Salty);
        break;
    }
  }, [router.isReady]);

  useEffect(() => {
    setFoodIndex(0);
    setLikedCount(0);
  }, []);

  useEffect(() => {
    if (foodIndex < foodDataList.length) return;
    router.push(`/share/result?like=${likedCount}`);
  }, [foodIndex]);

  return (
    <>
      {foodIndex < foodDataList.length ? (
        <Content
          foodData={foodDataList[foodIndex]}
          pageNum={foodIndex + 1}
          maxPageNum={maxPageCount}
          selectedCharacter={selectedCharacter}
        />
      ) : null}

      <Background />
    </>
  );
}
