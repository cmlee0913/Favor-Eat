import Image from "next/image";
import { useRouter } from "next/router";

import useImageRatioSize from "@/action/hooks/useImageRatioSize";
import useWindowDimensions from "@/action/hooks/useWindowSize";
import * as style from "./FlipImageCardCompo.style";

import Spicy from "@/assets/image/Character/Spicy.png";
import Sweet from "@/assets/image/Character/Sweet.png";
import Salty from "@/assets/image/Character/Salty.png";
import Oily from "@/assets/image/Character/Oily.png";
import { saveFoodFavor, saveFoodNonFavor } from "@/action/apis/recipeFavor";
import { userTokenSave } from "@/store/userStore";
import { useAtom } from "jotai";

export default function FilpImageCardCompo({
  imgSrc,
  foodName,
  flavor,
  contents,
  recipeId,
}) {
  const router = useRouter();
  const windowSize = useWindowDimensions();
  const { width, height } = useImageRatioSize(
    imgSrc,
    windowSize.width * 0.23,
    windowSize.height * 0.37,
  );

  const getCharacter = (type: string) => {
    switch (type) {
      case "spicy":
        return Spicy;
      case "sweet":
        return Sweet;
      case "salty":
        return Salty;
      case "oily":
        return Oily;
    }
  };

  const moveHandler = () => {
    const tmpIdx = 6998483;
    router.push(`/recipe/${tmpIdx}`);
  };

  const [token] = useAtom(userTokenSave);
  const onClickFavor = async (e) => {
    saveFoodFavor(token.accessToken, recipeId);
    e.stopPropagation();
  };
  const onClickNoFavor = async (e) => {
    saveFoodNonFavor(token.accessToken, recipeId);
    e.stopPropagation();
  };

  return (
    <style.Container onClick={moveHandler}>
      <style.CardWrapper width={width} height={height}>
        <style.Card className="card">
          <style.Front className="front">
            <img src={imgSrc} />
          </style.Front>
          <style.Back className="back">
            <style.LikeHateBox>
              <style.LikeButton onClick={onClickFavor} />
              <style.HateButton onClick={onClickNoFavor} />
            </style.LikeHateBox>
            <style.FlexItem>
              <div className="foodName">{foodName}</div>
              <style.FlavorBox>
                <span>
                  <Image
                    width={40}
                    height={50}
                    src={getCharacter(flavor.type)}
                    alt="flavor character"
                  />
                </span>
                <div className="flavorValue">{flavor.value}</div>
              </style.FlavorBox>
            </style.FlexItem>
            {contents.map((item) => (
              <style.FlexItem key={item.key}>
                <div className="contentName">{item.key}</div>
                <span className="contentValue">{item.value}</span>
              </style.FlexItem>
            ))}
          </style.Back>
        </style.Card>
      </style.CardWrapper>
    </style.Container>
  );
}
