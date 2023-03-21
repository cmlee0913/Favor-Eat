import { FlavorInfo } from "@/types/FlavorProgress/FlavorSummaryTypes";
import * as style from "./FlavorProgressCompo.style";

export default ({ value, type }: FlavorInfo) => {
  const percentage = ((value - 1) / 4) * 100;
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
  }

  return (
    <>
      <style.Container>
        <span>
          이 음식의 {flavorTypeString}는 {value}&nbsp;입니다.
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
