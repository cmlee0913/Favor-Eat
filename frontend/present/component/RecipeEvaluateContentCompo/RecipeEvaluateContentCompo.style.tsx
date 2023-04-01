import { theme } from "@/constant/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;

export const Header = styled.div`
  border-radius: inherit;
  background-color: ${theme.colors.main.skyblue};
  color: ${theme.colors.mono.light_1};
  font-size: 1.6rem;
  padding: 2.8rem;

  ${theme.devices.tablet} {
    padding: 2rem;
  }

  font-family: Pretendard-Bold;
`;

export const Body = styled.div`
  padding: 3rem;
  ${theme.devices.tablet} {
    padding: 2rem;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.7rem;

  ${theme.devices.tablet} {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`;

export const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  gap: 0.5rem;
`;

export const Text = styled.div<{ type: string }>`
  display: grid;
  grid-template-columns: 0.7fr 2fr;
  justify-content: center;
  gap: 0.5rem;

  ${theme.devices.tablet} {
    grid-template-columns: 1fr 2fr;
  }

  /* character sub title */
  & > div:first-child {
    font-size: 1.2rem;
    font-family: Pretendard-Medium;

    ${theme.devices.tablet} {
      font-size: 1rem;
    }
  }

  /* value title */
  & > div:nth-child(2) {
    font-size: 1.2rem;
    font-family: Pretendard-Medium;

    ${theme.devices.tablet} {
      font-size: 1rem;
    }

    & > span {
      font-family: Pretendard-Medium;
      margin: 5px;
      color: ${({ type }) => (type ? theme.colors.character[type] : "black")};
    }
  }
`;

export const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 2fr;

  ${theme.devices.tablet} {
    grid-template-columns: 1fr 2fr;
  }

  & > div {
    width: 100%;
    height: 100%;

    img {
      width: 3.5rem;
      height: auto;

      ${theme.devices.tablet} {
        width: 2rem;
        height: auto;
      }
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 1.5rem 0;
`;
