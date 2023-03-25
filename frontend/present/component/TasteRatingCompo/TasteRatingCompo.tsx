import * as style from "./TasteRatingCompo.style";

import SpicyLeft from "@/assets/icon/taste/rating/SpicyLeft.svg";
import SpicyRight from "@/assets/icon/taste/rating/SpicyRight.svg";
import SweetLeft from "@/assets/icon/taste/rating/SweetLeft.svg";
import SweetRight from "@/assets/icon/taste/rating/SweetRight.svg";
import SaltyLeft from "@/assets/icon/taste/rating/SaltyLeft.svg";
import SaltyRight from "@/assets/icon/taste/rating/SaltyRight.svg";
import OilyLeft from "@/assets/icon/taste/rating/OilyLeft.svg";
import OilyRight from "@/assets/icon/taste/rating/OilyRight.svg";
import { useState } from "react";

export default function TasteRatingCompo({ type }) {
  const ratingImg = {
    spicy: {
      left: <SpicyLeft />,
      right: <SpicyRight />,
    },
    sweet: {
      left: <SweetLeft />,
      right: <SweetRight />,
    },
    salty: {
      left: <SaltyLeft />,
      right: <SaltyRight />,
    },
    oily: {
      left: <OilyLeft />,
      right: <OilyRight />,
    },
  };
  const [ratingList, setRatingList] = useState(
    Array(5).fill({ left: false, right: false }),
  );

  const onMouseOver = (index: number, side: string) => {
    const list = [...ratingList];

    for (let i = 0; i < list.length; i++) {
      if (i < index) {
        list[i] = { left: true, right: true };
        continue;
      }
      if (i === index) {
        if (side === "left") {
          list[i] = { left: true, right: false };
          continue;
        }
        list[i] = { left: true, right: true };
        continue;
      }
      list[i] = { left: false, right: false };
    }
    setRatingList(list);
  };

  const onResetRating = () => {
    setRatingList(Array(5).fill({ left: false, right: false }));
  };

  return (
    <style.Container onMouseOut={onResetRating}>
      {ratingList.map((shape, index) => {
        return (
          <div>
            <style.Rating
              characterType={type}
              active={shape.left}
              onMouseOver={() => onMouseOver(index, "left")}
            >
              {ratingImg[type].left}
            </style.Rating>
            <style.Rating
              characterType={type}
              active={shape.right}
              onMouseOver={() => onMouseOver(index, "right")}
            >
              {ratingImg[type].right}
            </style.Rating>
          </div>
        );
      })}
    </style.Container>
  );
}
