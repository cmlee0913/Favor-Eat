import { theme } from "@/constant/theme";
import styled from "styled-components";
import ArrowIcon from "@/assets/icon/arrow.svg";

export const Container = styled.div`
  position: relative;
  display: inline-block;
  margin: 1vw;

  :hover {
    cursor: pointer;
  }

  ${theme.devices.tablet} {
    width: 30vw;
    height: 30vw;
    max-height: 200px;
  }

  ${theme.devices.mobile} {
    width: 50vw;
    height: 50vw;
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
