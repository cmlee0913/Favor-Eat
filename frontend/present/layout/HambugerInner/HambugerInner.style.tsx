import styled from "styled-components";
import { theme } from "@/action/theme";
import { fadeInUp } from "../Guide/Guide.style";

const ingArr = [249.85, 265.65, 210.22, 328, 187];
const arrPos = [
  [-48, 80],
  [90, -55],
  [-85, 75],
  [90, -90],
  [-125, 30],
];
const fontPos = [
  [-76, 125],
  [167, -50],
  [-115, 112],
  [200, -84],
  [-155, 47],
];

export const IngreContainer = styled.div<{ idx: number }>`
  width: 15.5vw;
  height: calc((70vh - 4rem) / 5 - 1rem);
  position: absolute;
  top: calc((15.5vw - 4rem) * ${(props) => props.idx} / 2 + 12rem);
  left: calc(17vw * ${(props) => props.idx} + 8vw);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & img {
    height: auto;

    &:nth-child(1) {
      position: relative;
      width: 100%;
      animation: ${fadeInUp} 1s;
    }

    &:nth-child(2) {
      width: calc(${(props) => ingArr[props.idx]}px * 0.8);
      animation: ${fadeInUp} 1.5s;
      position: absolute;
      z-index: 6;
      top: ${(props) => arrPos[props.idx][0]}%;
      left: ${(props) => arrPos[props.idx][1]}%;
    }
  }

  & div {
    position: absolute;
    width: 100%;
    top: ${(props) => fontPos[props.idx][0]}%;
    left: ${(props) => fontPos[props.idx][1]}%;
    color: ${theme.colors.main.blue};
    animation: ${fadeInUp} 1.5s;
  }

  &:hover {
    & img {
      height: auto;

      &:nth-child(1) {
        position: relative;
        width: 110%;
      }
    }
  }
`;

export const InnerHeader = styled.div``;

export const InnerBody = styled.div`
  width: 100%;
  height: 100%;
`;

export const InnerContainer = styled.div`
  width: 90vw;
  height: 80vh;
  background-color: ${theme.colors.background.pink};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;

  padding: 10vh 5vw;
`;
