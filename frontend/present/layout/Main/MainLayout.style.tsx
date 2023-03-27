import styled, { css } from "styled-components";
import { theme } from "@/action/theme";

import MainFoodActive from "@/assets/icon/Main/MainFoodActive.svg";
import AnotherFoodActive from "@/assets/icon/Main/AnotherFoodActive.svg";
import MainFoodInactive from "@/assets/icon/Main/MainFoodInactive.svg";
import AnotherFoodInactive from "@/assets/icon/Main/AnotherFoodInactive.svg";
import RefreshIcon from "@/assets/icon/Main/RefreshIcon.svg";

const white = theme.colors.mono.light_1;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 9vw;
  width: 100vw;
  height: 100vh;
`;

export const Foods = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 5px;
  column-gap: 5px;
  background-color: ${theme.colors.main.purple.light_1};
  box-shadow: inset 2.5vw 0 ${white}, inset -2.5vw 0 ${white};
  position: relative;

  & > div:nth-child(2) {
    justify-self: end;
    align-self: end;
  }
  & > div:nth-child(3) {
    justify-self: start;
    align-self: end;
  }
  & > div:nth-child(4) {
    justify-self: end;
    align-self: flex-start;
  }
  & > div:nth-child(5) {
    justify-self: start;
    align-self: flex-start;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;
`;

export const Slogan = styled.div`
  font-size: 3rem;
  font-weight: 900;
`;

export const CharacterImage = styled.div`
  width: 25vw;
  height: auto;

  img {
    width: inherit;
    height: inherit;
  }
`;

const RecommendIconStyle = css`
  width: 4.5rem;
  height: 4.5rem;
  :hover {
    cursor: pointer;
  }
`;

export const RecommendIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const MainRecommendActive = styled(MainFoodActive)`
  ${RecommendIconStyle}
`;

export const AnotherRecommendInactive = styled(AnotherFoodInactive)`
  ${RecommendIconStyle}
`;

export const RefreshButton = styled(RefreshIcon)`
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 5vh;
  left: 50%;
  transform: translateX(-50%);
`;
