import styled from "styled-components";

import ProgressIndicatorSvg from "@/assets/icon/ProgressIndicator.svg";
import LevelSvg from "@/assets/icon/ProgressLevel.svg";
import { theme } from "@/action/theme";

const spicyColors = ["#ABAFC4", "#C7959E", "#E37C79", "#E05D60", "#DC3C47"];
const sweetColors = ["#ABAFC4", "#D6BE94", "#FFCC66", "#FFBB4C", "#FFAA33"];
const saltyColors = ["#ABAFC4", "#77B4D2", "#47B8E0", "#3E9CE0", "#3681E0"];

export const ImgForMobile = styled.div`
  display: none;
  width: 100%;

  img {
    height: 30vh;
    width: 100%;
    object-fit: cover;
  }

  ${theme.devices.tablet} {
    display: block;
  }
`;

const chooseColor = (type: string) => {
  switch (type) {
    case "spicy":
      return spicyColors[4];
    case "sweet":
      return sweetColors[4];
    case "salty":
      return saltyColors[4];
  }
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 300px;

  ${theme.devices.tablet} {
    width: 100%;
  }
`;

export const ProgressBox = styled.div`
  padding: 0 3vw;
  ${theme.devices.tablet} {
    padding: 0 8vw;
  }
`;

export const Progress = styled.div<{ flavor: string }>`
  border-radius: 5px;
  height: 15px;
  margin-bottom: 3px;
  background: linear-gradient(
    to right,
    ${({ flavor }) => {
      switch (flavor) {
        case "spicy":
          return spicyColors.join();
        case "sweet":
          return sweetColors.join();
        case "salty":
          return saltyColors.join();
      }
    }}
  );
`;

export const ProgressIndicator = styled(ProgressIndicatorSvg)`
  left: ${({ left }) => left}%;
  transform: translateX(-50%);
  text-align: center;
  position: relative;
  width: auto;
  height: 10px;
  & path {
    fill: ${({ flavor }) => chooseColor(flavor)};
  }
`;

const LevelWrapper = styled.div`
  position: relative;
`;

const LevelIcon = styled(LevelSvg)`
  width: 40px;
  height: 40px;
  & path {
    fill: ${({ color }) => color};
  }

  ${theme.devices.tablet} {
    width: 30px;
    height: 30px;
  }
`;

const LevelText = styled.div`
  font-size: 19px;
  font-weight: 500;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-60%);
  color: #fff;

  ${theme.devices.tablet} {
    font-size: 15px;
  }
`;

export const ProgressLevelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 -1.2rem;

  ${theme.devices.tablet} {
    margin: 0 -0.9rem;
  }
`;

const makeLevelList = (colorList: string[]) => {
  const list: JSX.Element[] = [];
  colorList.forEach((color, index) => {
    list.push(
      <LevelWrapper key={index}>
        <LevelText>{index + 1}</LevelText>
        <LevelIcon color={color} />
      </LevelWrapper>,
    );
  });
  return list;
};

export const ProgressLevelList = (type: string) => {
  switch (type) {
    case "spicy":
      return makeLevelList(spicyColors);
    case "sweet":
      return makeLevelList(sweetColors);
    case "salty":
      return makeLevelList(saltyColors);
  }
};
