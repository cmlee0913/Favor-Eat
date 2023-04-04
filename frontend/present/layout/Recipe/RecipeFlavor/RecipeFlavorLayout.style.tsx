import { theme } from "@/constant/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  gap: 1rem;
  ${theme.devices.tablet} {
    flex-direction: column;
    gap: 5vh;
  }
`;

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

export const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 3rem;
  gap: 2rem;
  position: relative;

  & > div:first-child {
    position: relative;
  }
  & > div:nth-child(2) {
    position: relative;
  }
  & > div:nth-child(3) {
    position: relative;
  }
  & > div:nth-child(4) {
    position: relative;
  }

  ${theme.devices.desktop} {
    flex-grow: 0.5;
  }

  ${theme.devices.tablet} {
    flex-direction: row;
    width: 100%;
  }

  & > div {
    flex-grow: 1;
  }
`;
export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
  gap: 2rem;
  ${theme.devices.desktop} {
    flex-grow: 2;
  }
  ${theme.devices.tablet} {
    width: 100%;
  }

  & > div {
    flex-grow: 1;
  }
`;

export const PCHover = styled.div`
  width: 6.5rem;
  height: auto;
  position: relative;
  display: block;

  ${theme.devices.tablet} {
    display: none;
  }
`;

export const MobileHover = styled.div<{ left: number }>`
  ${theme.devices.desktop} {
    display: none;
  }
  ${theme.devices.tablet} {
    display: block;
    width: 10rem;
    height: 130%;
    left: ${({ left }) => (left ? left : 0)}%;
    position: absolute;
    text-align: center;
    border-radius: 10px;
    top: 15vh;
    z-index: 10;

    & > div {
      background-color: ${theme.colors.background.gray};
    }
  }
`;
