import { theme } from "@/constant/theme";
import styled from "styled-components";

export const Container = styled.div<{ isColumn: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-left: 5px;
  display: flex;
  flex-direction: ${({ isColumn }) => (isColumn ? "column" : "row")};
  flex-wrap: ${({ isColumn }) => (isColumn ? "nowrap" : "wrap")};
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  background-color: ${theme.colors.background.gray};
  z-index: inherit;

  ${theme.devices.tablet} {
    gap: 0.5rem;
  }

  & > div {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 2fr;
    width: 100%;
  }
`;

export const LevelCircle = styled.div<{ color: string }>`
  border-radius: 100%;
  width: 1.2em;
  height: 1.2em;
  background-color: ${({ color }) =>
    color ? color : theme.colors.characterLevel.spicy.level_1};
  position: relative;

  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    font-size: 1em;
    font-family: Pretendard-Bold;
    color: ${theme.colors.mono.light_1};
  }
`;

export const LevelFood = styled.div`
  font-size: 0.9rem;
  font-family: Pretendard-Bold;
  word-break: keep-all;
`;
