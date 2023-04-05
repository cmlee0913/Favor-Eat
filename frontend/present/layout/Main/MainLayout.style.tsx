import styled from "styled-components";
import { theme } from "@/constant/theme";

import RefreshIcon from "@/assets/icon/Main/RefreshIcon.svg";

const white = theme.colors.mono.light_1;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  gap: 9vw;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;

  ${theme.devices.tablet} {
    gap: 9vw;
    padding-top: 12%;
    justify-content: flex-start;
    flex-direction: column;
  }
  ${theme.devices.mobile} {
    padding-top: 30%;
  }
`;

export const Foods = styled.div`
  position: fixed;
  top: 0;
  left: 10vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 5px;
  column-gap: 5px;
  width: 45vw;
  background-color: ${theme.colors.main.purple.light_1};
  box-shadow: inset 2.5vw 0 ${white}, inset -2.5vw 0 ${white};
  position: relative;

  ${theme.devices.tablet} {
    display: none;
  }

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
  position: fixed;
  right: 4vw;
  top: 50%;
  width: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;

  ${theme.devices.tablet} {
    width: 60%;
    left: 50%;
    transform: translateX(-50%);
    top: 10vh;
    gap: 2vh;
  }
`;

export const Slogan = styled.div`
  font-size: 3rem;
  font-family: Inter-Black;

  ${theme.devices.tablet} {
    order: 2;
    font-size: 2.5rem;
  }
  ${theme.devices.mobile} {
    order: 2;
    font-size: 1.5rem;
  }
`;

export const CharacterImage = styled.div`
  width: 25vw;
  height: auto;

  ${theme.devices.tablet} {
    order: 1;
    width: 60%;
    height: auto;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const RefreshButton = styled(RefreshIcon)`
  width: 2.3rem;
  height: 2.3rem;
  position: absolute;
  top: 10vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 90;

  &:hover {
    cursor: pointer;
  }
`;

export const MobileImageContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  position: absolute;
  bottom: 10%;
  height: fit-content;
  width: 100vw;

  ${theme.devices.desktop} {
    display: none;
  }

  ${theme.devices.tablet} {
    bottom: 10%;
    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: ${theme.colors.background.violet};
    }

    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #b7b7ed;
      border: 3.5px solid ${theme.colors.background.violet};
    }
  }

  ${theme.devices.mobile} {
  }

  & > div {
    width: auto;
    white-space: nowrap;
    margin: 3vh 0;
    height: fit-content;
  }

  ${theme.devices.tablet} {
    display: flex;
  }

  ${theme.devices.mobile} {
    border-radius: 10px;
  }
`;

export const MobileRefreshButton = styled(RefreshIcon)`
  width: 2rem;
  height: 2rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: none;
  z-index: 90;

  :hover {
    cursor: pointer;
  }

  ${theme.devices.tablet} {
    display: block;
  }

  ${theme.devices.mobile} {
    top: 48%;
  }
`;
