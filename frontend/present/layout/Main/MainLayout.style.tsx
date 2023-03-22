import styled, { css } from "styled-components";
import MainFoodActive from "@/assets/icon/MainFoodActive.svg";
import AnotherFoodActive from "@/assets/icon/AnotherFoodActive.svg";
import MainFoodInactive from "@/assets/icon/MainFoodInactive.svg";
import AnotherFoodInactive from "@/assets/icon/AnotherFoodInactive.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 9vw;
  width: 100vw;
  height: calc(100vh - 6rem);
`;

export const Foods = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  row-gap: 5px;
  column-gap: 5px;

  & > div:first-child {
    justify-self: end;
    align-self: end;
  }
  & > div:nth-child(2) {
    justify-self: start;
    align-self: end;
  }
  & > div:nth-child(3) {
    justify-self: end;
    align-self: flex-start;
  }
  & > div:nth-child(4) {
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
  font-size: 50px;
  font-weight: 900;
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
