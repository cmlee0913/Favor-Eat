import { theme } from "@/action/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
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
