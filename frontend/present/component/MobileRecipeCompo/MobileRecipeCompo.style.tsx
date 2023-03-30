import { theme } from "@/constant/theme";
import styled from "styled-components";
import ArrowIcon from "@/assets/icon/arrow.svg";

export const Container = styled.div`
  position: relative;
  display: inline-block;
  margin: 1vw;

  ${theme.devices.tablet} {
    width: 30vw;
    height: 30vw;
  }

  ${theme.devices.mobile} {
    width: 65%;
    height: 65%;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;

  img {
    object-fit: cover;
    border-radius: inherit;
    width: inherit;
    height: inherit;
    aspect-ratio: unset;
  }
`;

export const NextButton = styled(ArrowIcon)`
  width: 1.3rem;
  height: 1.3rem;
  transform: rotate(-90deg);
  justify-self: flex-end;
  align-self: flex-start;

  path {
    fill: ${theme.colors.mono.dark_1};
  }
`;

export const BottomContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  margin-top: 2%;
  gap: 3%;

  .flex {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
  }

  .foodName {
    font-size: 1rem;
    width: 60%;
    word-break: keep-all;

    ${theme.devices.mobile} {
      width: 55%;
    }
  }

  .flavorValue {
    font-size: 1rem;
  }

  .flavorCharacter {
    width: 15%;
    height: 15%;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
