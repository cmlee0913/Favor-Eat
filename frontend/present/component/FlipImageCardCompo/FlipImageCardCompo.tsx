import useImageRatioSize from "@/action/hooks/useImageRatioSize";
import useWindowDimensions from "@/action/hooks/useWindowSize";
import * as style from "./FlipImageCardCompo.style";
import Image from "next/image";

import Spicy from "@/assets/image/Character/Spicy.png";
import Sweet from "@/assets/image/Character/Sweet.png";
import Salty from "@/assets/image/Character/Salty.png";
import Oily from "@/assets/image/Character/Oily.png";

export default function FilpImageCardCompo({
  imgSrc,
  foodName,
  flavor,
  contents,
}) {
  const windowSize = useWindowDimensions();
  const { width, height } = useImageRatioSize(
    imgSrc,
    windowSize.width * 0.22,
    windowSize.height * 0.48,
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

  return (
    <style.Container>
      <style.CardWrapper width={width} height={height}>
        <style.Card className="card">
          <style.Front className="front">
            <img src={imgSrc} />
          </style.Front>
          <style.Back className="back">
            <style.FoodFlexBox>
              <style.LikeHateBox>
                <style.LikeButton />
                <style.HateButton />
              </style.LikeHateBox>
              <style.FlexItem>
                <style.FoodName>{foodName}</style.FoodName>
                <style.FlavorBox>
                  <span>
                    <Image
                      width={40}
                      height={50}
                      src={getCharacter(flavor.type)}
                      alt="flavor character"
                    />
                  </span>
                  <style.FlavorValue>{flavor.value}</style.FlavorValue>
                </style.FlavorBox>
              </style.FlexItem>
              {contents.map((item) => (
                <style.FlexItem key={item.key}>
                  <style.ContentName>{item.key}</style.ContentName>
                  <span>{item.value}</span>
                </style.FlexItem>
              ))}
            </style.FoodFlexBox>
          </style.Back>
        </style.Card>
      </style.CardWrapper>
    </style.Container>
  );
}
