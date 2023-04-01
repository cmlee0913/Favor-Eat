import * as style from "./TasteRatingCompo.style";

import SpicyLeft from "@/assets/icon/taste/rating/SpicyLeft.svg";
import SpicyRight from "@/assets/icon/taste/rating/SpicyRight.svg";
import SweetLeft from "@/assets/icon/taste/rating/SweetLeft.svg";
import SweetRight from "@/assets/icon/taste/rating/SweetRight.svg";
import SaltyLeft from "@/assets/icon/taste/rating/SaltyLeft.svg";
import SaltyRight from "@/assets/icon/taste/rating/SaltyRight.svg";
import OilyLeft from "@/assets/icon/taste/rating/OilyLeft.svg";
import OilyRight from "@/assets/icon/taste/rating/OilyRight.svg";
import { useEffect, useState } from "react";

export default function TasteRatingCompo({
  type,
  setRatingValue,
  recipeId,
  ratingValue,
}) {
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
  const [clicked, setClicked] = useState(false);
  const [value, setValue] = useState(0);

  const onMouseOver = (index: number) => {
    setRatingActive(index);
  };

  const setRatingActive = (index: number) => {
    const list = [...ratingList];

    for (let i = 0; i < list.length; i++) {
      //누른곳 앞은 다 active
      if (i < index) {
        list[i] = { left: true, right: true };
        continue;
      }
      //누른 index는 left냐 right에 따라 active
      if (i === index) {
        list[i] = { left: true, right: true };
        continue;
      }
      //누른 index 오른쪽은
      list[i] = { left: false, right: false };
    }
    setRatingList(list);
  };

  const onResetRating = () => {
    //값을 활성화 한적이 없으면 reset
    if (!clicked && ratingValue === 0) {
      setRatingList(Array(5).fill({ left: false, right: false }));
      return;
    }

    const { index } = getIndexByRatingValue();
    setRatingActive(index - 1);
  };

  const getIndexByRatingValue = () => {
    let index: number = Math.floor(value / 1);
    if (index < 0) {
      index = 0;
    }

    return { index };
  };

  const onClickRating = (ratingIconIndex: number) => {
    let value = ratingIconIndex + 1;
    setValue(value);
    setClicked(true);
  };

  useEffect(() => {
    setValue(ratingValue);
    setRatingActive(ratingValue - 1);
  }, [ratingValue]);

  useEffect(() => {
    if (clicked) {
      const { index } = getIndexByRatingValue();
      setRatingActive(index - 1);
      setRatingValue(value, type);
    }
  }, [value]);

  //내부 요소 reset
  useEffect(() => {
    const { index } = getIndexByRatingValue();
    setRatingActive(index - 1);
    setRatingValue(value, type);
    setClicked(false);
    setValue(0);
    const newList = Array(5).fill({ left: false, right: false });
    setRatingList(newList);
  }, [recipeId]);

  return (
    <style.Container onMouseOut={onResetRating}>
      {ratingList.map((shape, index) => {
        return (
          <span key={index}>
            <style.Rating
              characterType={type}
              active={shape.left}
              onMouseOver={() => onMouseOver(index)}
              onClick={() => onClickRating(index)}
            >
              {ratingImg[type].left}
            </style.Rating>
            <style.Rating
              characterType={type}
              active={shape.right}
              onMouseOver={() => onMouseOver(index)}
              onClick={() => onClickRating(index)}
            >
              {ratingImg[type].right}
            </style.Rating>
          </span>
        );
      })}
    </style.Container>
  );
}
