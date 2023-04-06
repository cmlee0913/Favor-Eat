import { FlavorInfo } from "@/types/RecipeFlavor/dummy";
import * as style from "./FlavorProgressCompo.style";

export default ({ value, type }: FlavorInfo) => {
  let percentage =
    value === 0 || value === null || value === undefined
      ? 0
      : ((value - 1) / 4) * 100;
  let flavorTypeString = "";
  switch (type) {
    case "spicy":
      flavorTypeString = "맵기";
      break;
    case "sweet":
      flavorTypeString = "달기";
      break;
    case "salty":
      flavorTypeString = "짜기";
      break;
    case "oily":
      flavorTypeString = "기름기";
      break;
  }

  return (
    <>
      <style.Container>
        <span>
          이 음식의 {flavorTypeString}는 {value ? value : 0}&nbsp;입니다.
        </span>
        <style.ProgressBox>
          <style.ProgressIndicator left={percentage} flavor={type} />
          <style.Progress flavor={type}></style.Progress>
          <style.ProgressLevelWrapper>
            {style.ProgressLevelList(type)}
          </style.ProgressLevelWrapper>
        </style.ProgressBox>
      </style.Container>
    </>
  );
};
