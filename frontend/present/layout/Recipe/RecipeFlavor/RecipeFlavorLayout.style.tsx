import { theme } from "@/action/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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

export const PCHover = styled.div<{ show: boolean }>`
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  width: 6.5rem;

  ${theme.devices.tablet} {
    display: none;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export const MobileHover = styled.div<{ show: boolean; left: number }>`
  height: auto;
  position: absolute;
  z-index: 2;
  text-align: center;
  box-shadow: 5px 5px 8px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  left: 10%;

  ${theme.devices.desktop} {
    display: none;
  }
  ${theme.devices.tablet} {
    width: 80vw;
    display: ${({ show }) => (show ? "block" : "none")};
    bottom: -5%;
  }
  ${theme.devices.mobile} {
    width: 80vw;
    display: ${({ show }) => (show ? "block" : "none")};
    bottom: 10%;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
