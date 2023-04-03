import { theme } from "@/constant/theme";
import styled, { css } from "styled-components";

export const Container = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const Page = styled.span`
  z-index: inherit;
  font-size: 1.3rem;
  font-family: Pretendard-Medium;
  position: relative;
  top: 1.8rem;
  left: 5rem;
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
  }
`;

export const ChooseBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 30%;

  & > div {
    background-color: ${theme.colors.mono.light_1};
    color: ${theme.colors.main.purple.dark_4};
    font-size: 1.5rem;
    font-family: Pretendard-Bold;
    padding: 0.7rem;
    text-align: center;

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
`;

export const CharacterProgress = styled.div<{ percentage: number }>`
  background-color: #ffdce1;
  width: 100%;
  height: 3rem;

  img {
    position: absolute;
    top: -2rem;
    left: ${({ percentage }) => {
      if (percentage === undefined || percentage === null) return 0;
      if (percentage === 100) return percentage - 5;
      return percentage ? percentage : 0;
    }}%;
    transition: all 0.3s linear;
    width: 4.5rem;
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
