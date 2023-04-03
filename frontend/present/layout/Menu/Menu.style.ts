import { theme } from "@/constant/theme";
import styled from "styled-components";
import { fadeInUp } from "../Guide/Guide.style";

export const PC = [472.75, 452.9, 488.6, 630, 365.73];
export const PCblank = [0, 121.12, 0, 186.4, 0];

const calPosVal = (num: number) => {
  return num / PC[0];
};

export const Menu = styled.div<{ idx: number }>`
  --width: calc((100vw - 5rem) / 5);
  --height: calc((100vh - 20rem) / 5);
  --mainWidth: ${(props) => calPosVal(PC[props.idx])};
  --subWidth: ${(props) => calPosVal(PCblank[props.idx])};
  --default: calc(var(--mainWidth) * var(--width));
  --position: calc(
    ${(props) => props.idx} * var(--width) - var(--subWidth) * var(--default) +
      4.5rem
  );

  ${theme.devices.desktop} {
    width: var(--default);
    position: absolute;
    left: var(--position);
    top: calc(${(props) => props.idx} * var(--height) + 11rem);
  }

  ${theme.devices.tablet} {
    height: 16vh;
    position: relative;
    right: auto;
    left: auto;
    top: auto;
  }

  & path:nth-last-child(2),
  & path:nth-last-child(1) {
    animation: ${fadeInUp} 1.8s;
  }

  & path {
    animation: ${fadeInUp} 1s;
  }
`;

export const InnerMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: auto;
    height: 15vh;
    object-fit: cover;

    svg {
      display: inline-block;
      height: 100%;
    }
  }
`;

export const InnerPC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    height: auto;
    object-fit: cover;

    svg {
      display: inline-block;
      height: 100%;
    }
  }
`;

export const Body = styled.div`
  &.Mobile {
    display: none;
  }

  ${theme.devices.tablet} {
    &.Mobile {
      display: block;
    }

    &.PC {
      display: none;
    }
  }
`;

export const Container = styled.div`
  background-color: #fff3f5;
  width: calc(100vw - 6rem);
  height: calc(100vh - 11rem);
  padding: 5.5rem 3rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8999;

  ${theme.devices.tablet} {
    width: calc(100vw - 3rem);
    height: calc(100vh - 11rem);
    padding: 5.5rem 1.5rem;
  }
`;
