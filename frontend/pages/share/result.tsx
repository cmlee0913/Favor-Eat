import Background from "@/present/layout/Share/Test/Background";

import BabyIcon from "@/assets/image/SharePage/Result/BabyIcon.png";
import MiddleIcon from "@/assets/image/SharePage/Result/MiddleIcon.png";
import AdultIcon from "@/assets/image/SharePage/Result/AdultIcon.png";
import ResultLayout from "@/present/layout/Share/Result/ResultLayout";
import { ResultObject } from "@/types/Share/Result/dummy";
import { useAtomValue } from "jotai";
import { likedCountAtom } from "@/store/shareTasteStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const resultContents: ResultObject = {
  baby: {
    resultIcon: BabyIcon,
    title: "아기 입맛",
    text: "개를 좋아하는 음식으로 선택한 당신은 나물, 해산물 같은 음식보다는 달고 향이 강하지 않은 음식을 선호하는 아기 입맛을 가지고 있습니다. 맵고 짠 자극적인 음식보다는 달고 부드러운 음식을 선호하는 입맛입니다. 지인들과 함께 식사할 때 이 결과를 참고해보세요.",
  },
  middle: {
    resultIcon: MiddleIcon,
    title: "청소년 입맛",
    text: "개를 좋아하는 음식으로 선택한 당신은 다양한 음식을 즐기는 청소년 입맛입니다. 새로운 음식을 시도하기를 어려워하지는 않지만, 친숙한 음식을 선호합니다. 지인들과 함께 식사할 때 이 결과를 참고해보세요.",
  },
  adult: {
    resultIcon: AdultIcon,
    title: "농후한 어른 입맛",
    text: "개를 좋아하는 음식으로 선택한 당신은 새로운 음식에 대한 두려움이 없는 어른 입맛입니다. 독특하고 강한 맛을 내는 음식도 마다하지 않는 진정한 모험가입니다. 지인들과 함께 식사할 때 이 결과를 참고해보세요.",
  },
};

export default function () {
  const [tasteType, setTasteType] = useState("baby");
  const [likedCnt, setLikedCnt] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    let likedCount = parseInt(router.query.like as string);

    let type = "baby";
    if (likedCount > 2 && likedCount <= 7) {
      type = "middle";
    } else if (likedCount > 7) {
      type = "adult";
    }
    setLikedCnt(likedCount);
    setTasteType(type);
  }, [router.isReady]);

  return (
    <>
      <ResultLayout
        maxCount={10}
        likedCount={likedCnt}
        resultContents={resultContents[tasteType]}
      />
      <Background />
    </>
  );
}
