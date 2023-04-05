import { useEffect, useState } from "react";
import * as style from "./MyPage.style";

import { useAtom, useAtomValue } from "jotai";
import { getUserDataByToken, userTokenSave } from "@/store/userStore";
import { getMyTaste } from "@/action/apis/myPage";

import Spicy from "@/assets/image/Character/Spicy.png";
import Sweet from "@/assets/image/Character/Sweet.png";
import Salty from "@/assets/image/Character/Salty.png";
import Oily from "@/assets/image/Character/Oily.png";

import SpicyHoverBoxPc from "@/assets/image/HoverInfo/SpicyHoverBoxPCSmall.png";
import SweetHoverBoxPC from "@/assets/image/HoverInfo/SweetHoverBoxPCSmall.png";
import SaltyHoverBoxPC from "@/assets/image/HoverInfo/SaltyHoverBoxPCSmall.png";

import SpicyHoverBoxMobile from "@/assets/image/SpicyHoverBoxMobile.png";
import SweetHoverBoxMobile from "@/assets/image/SweetHoverBoxMobile.png";
import SaltyHoverBoxMobile from "@/assets/image/SaltyHoverBoxMobile.png";

import MyPageFlavorData from "./MyPageFlavorData";
import { FlavorStaticData } from "@/types/MyPage/dummy";

import LeftTitleBox from "@/present/common/TitleBox/LeftTitleBox/LeftTitleBox";
import { isHoverAtom } from "@/store/hoverStore";
import HoverInfoCompo from "@/present/component/HoverInfoCompo/HoverInfoCompo";

export default function MyPageUser() {
  const [name, setName] = useState("로그인 해주세요!");
  const [flavors, setFlavors] = useState({
    oily: 0,
    salty: 0,
    spicy: 0,
    sweet: 0,
  });
  const isHover = useAtomValue(isHoverAtom);

  const [token] = useAtom(userTokenSave);

  const requestMyTaste = async (token: string) => {
    const { isSuccess, result } = await getMyTaste(token);
    if (isSuccess) {
      const { spicy, sweet, salty, oily } = result.responseTasteInfo;
      setFlavors({
        spicy: Math.round(spicy * 2) / 2,
        sweet: Math.round(sweet * 2) / 2,
        salty: Math.round(salty * 2) / 2,
        oily: Math.round(oily * 2) / 2,
      });
    }
  };

  useEffect(() => {
    if (token.accessToken) {
      requestMyTaste(token.accessToken);
    }
  }, [token]);

  useEffect(() => {
    if (token.accessToken) {
      const { nickname } = getUserDataByToken(token.accessToken);
      setName(nickname);
    }
  }, [token]);

  const flavorData: Array<FlavorStaticData> = [
    {
      type: "spicy",
      title: "매워요",
      subtitle: "맵기",
      img: Spicy,
      value: flavors.spicy,
    },
    {
      type: "sweet",
      title: "달아요",
      subtitle: "달기",
      img: Sweet,
      value: flavors.sweet,
    },
    {
      type: "salty",
      title: "짜요",
      subtitle: "짜기",
      img: Salty,
      value: flavors.salty,
    },
    {
      type: "oily",
      title: "기름져요",
      subtitle: "기름지기",
      img: Oily,
      value: flavors.oily,
    },
  ];

  return (
    <style.MyPageUser>
      <LeftTitleBox
        title={`안녕하세요. ${name}님`}
        subtitle="이런 맛을 좋아하셨어요"
      />
      <style.HoverGrid>
        <style.HoverImageContainer>
          {isHover ? <HoverInfoCompo /> : null}
        </style.HoverImageContainer>
        <div>
          {flavorData.map((item, index) => (
            <MyPageFlavorData key={index} item={item} />
          ))}
        </div>
      </style.HoverGrid>
    </style.MyPageUser>
  );
}
