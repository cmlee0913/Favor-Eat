import { theme } from "@/constant/theme";
import styled, { css } from "styled-components";

export const Container = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  /* drag none */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Page = styled.span`
  z-index: inherit;
  font-size: 1.3rem;
  font-family: Pretendard-Medium;
  position: relative;
  top: 1.8rem;
  left: 5rem;

  ${theme.devices.tablet} {
    top: 1rem;
    left: 1rem;
  }
  span {
    color: ${theme.colors.main.purple.dark_2};
  }
`;

export const FoodContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  gap: 1.5rem;

  ${theme.devices.tablet} {
    top: 10%;
  }
`;

export const FoodTitle = styled.div`
  font-size: 1.5rem;
  font-family: Pretendard-ExtraBold;
`;

export const FoodImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  img {
    object-fit: cover;
    width: 12rem;
    height: 12rem;

    ${theme.devices.tablet} {
      width: 10rem;
      height: 10rem;
    }
  }
`;

export const ChooseBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 30%;

  ${theme.devices.tablet} {
    width: 80%;
  }

  & > div {
    background-color: ${theme.colors.mono.light_1};
    color: ${theme.colors.main.purple.dark_4};
    font-size: 1.5rem;
    font-family: Pretendard-Bold;
    padding: 0.7rem;
    text-align: center;
    word-break: keep-all;

    :hover {
      cursor: pointer;
    }
  }
`;

export const BottomContainer = styled.div`
  position: absolute;
  bottom: 8%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  ${theme.devices.tablet} {
    gap: 1rem;
    bottom: 12%;
  }
`;

export const CharacterProgress = styled.div<{ percentage: number }>`
  background-color: #ffdce1;
  width: 100%;
  height: 3rem;

  img {
    position: absolute;
    top: -2rem;
    width: 4.5rem;
    /* pc */
    left: ${({ percentage }) => {
      if (percentage === undefined || percentage === null) return 0;
      if (percentage === 100) return percentage - 5;
      return percentage - 10;
    }}vw;

    /* table */
    ${theme.devices.tablet} {
      left: ${({ percentage }) => {
        if (percentage === undefined || percentage === null) return 0;
        if (percentage === 100) return percentage - 8;
        return percentage - 10;
      }}vw;
    }
    /* mobile */
    ${theme.devices.tablet} {
      left: ${({ percentage }) => {
        if (percentage === undefined || percentage === null) return 0;
        if (percentage === 100) return percentage - 15;
        return percentage - 10;
      }}vw;
    }
    transition: all 0.3s linear;
    height: auto;
  }
`;

export const Percentage = styled.div`
  font-size: 1.3rem;
  color: ${theme.colors.main.purple.dark_2};
  font-family: Pretendard-Bold;
`;

export const Character = styled.div``;

export const ProgressBar = styled.div<{ percentage: number }>`
  width: 50%;
  height: 2rem;
  background-color: ${theme.colors.mono.light_1};
  border-radius: 25px;
  padding: 0.5rem;

  & > div {
    background-color: #b7b7ed;
    border-top-left-radius: inherit;
    width: ${({ percentage }) => (percentage ? percentage : 0)}%;
    height: 100%;
    transition: all 0.3s linear;

    //bottom radius는 percentage가 100일때만
    border-bottom-left-radius: inherit;
    border-top-right-radius: ${({ percentage }) =>
      percentage === 100 ? "inherit" : "reset"};
    border-bottom-right-radius: ${({ percentage }) =>
      percentage === 100 ? "inherit" : "reset"};
  }
`;
