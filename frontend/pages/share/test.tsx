import Background from "@/present/layout/Share/Test/Background";
import Content from "@/present/layout/Share/Test/Content";

import FoodImage1 from "@/assets/image/SharePage/foods/순대.jpg";
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
    hateText: "싫어",
  },
  {
    imageList: [FoodImage2],
    foodTitle: "닭발은",
    likeText: "술 안주로도 간식으로도 최고지!",
    hateText: "별로야",
  },
  {
    imageList: [FoodImage3],
    foodTitle: "고소한 여름 별미 콩국수",
    likeText: "좋아요",
    hateText: "싫어요",
  },
  {
    imageList: [FoodImage4],
    foodTitle: "제주도의 특산품 오메기떡",
    likeText: "좋아요",
    hateText: "싫어요",
  },
  {
    imageList: [FoodImage5],
    foodTitle: "꿈틀꿈틀 쫄깃쫄깃 산낙지",
    likeText: "좋아요",
    hateText: "싫어요",
  },
  {
    imageList: [FoodImage6],
    foodTitle: "삭혀서 김치와 함께 먹으면 좋은 홍어",
    likeText: "좋아요",
    hateText: "싫어요",
  },
  {
    imageList: [FoodImage7],
    foodTitle: "삭혀서 김치와 함께 먹으면 좋은 홍어",
    likeText: "좋아요",
    hateText: "싫어요",
  },
  {
    imageList: [FoodImage8],
    foodTitle: "번데기는",
    likeText: "좋아요",
    hateText: "싫어요",
  },
  {
    imageList: [FoodImage9_1, FoodImage9_2],
    foodTitle: "성게, 멍게는",
    likeText: "좋아요",
    hateText: "싫어요",
  },
  {
    imageList: [FoodImage10_1, FoodImage10_2],
    foodTitle: "천엽, 생간은",
    likeText: "좋아요",
    hateText: "싫어요",
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
    router.push("/share/result");
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
