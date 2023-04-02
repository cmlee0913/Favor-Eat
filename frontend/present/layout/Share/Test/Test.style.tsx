import { theme } from "@/constant/theme";
import styled, { css } from "styled-components";

export const CloudStyle = css`
  width: 30vw;
  height: auto;
  position: absolute;
`;

export const Sky = styled.div`
  position: fixed;
  background-color: ${theme.colors.background.violet};
  height: 50vh;
  bottom: 50vh;
  width: 100vw;

  ${theme.devices.tablet} {
    bottom: 40vh;
    height: 60vh;
  }

  svg:first-child {
    top: 4vh;
    left: 5vw;
    ${CloudStyle}
  }
  svg:last-child {
    top: 2vh;
    right: 10vw;
    ${CloudStyle}
  }
`;

export const Mountain = styled.div`
  position: fixed;
  bottom: 35vh;
  width: 100vw;

  ${theme.devices.mobile} {
    bottom: 34vh;
  }

  svg {
    width: 100%;
    height: auto;
  }
`;

export const Ground = styled.div`
  position: fixed;
  bottom: 0;
  height: 36vh;
  width: 100%;
  background-color: ${theme.colors.background.pink};
`;

const Tree1Style = css`
  width: 4rem;
  height: auto;

  ${theme.devices.mobile} {
    width: 2rem;
  }
`;
const Tree2Style = css`
  width: 10rem;
  height: auto;
  ${theme.devices.tablet} {
    width: 8rem;
  }
  ${theme.devices.mobile} {
    width: 4rem;
  }
`;
const Tree3Style = css`
  width: 4rem;
  height: auto;
  ${theme.devices.mobile} {
    width: 2rem;
  }
`;
const Tree4Style = css`
  width: 5rem;
  height: auto;
  ${theme.devices.mobile} {
    width: 2rem;
  }
`;

export const Trees = styled.div`
  position: absolute;
  top: -3rem;

  ${theme.devices.mobile} {
    top: -1.5rem;
  }

  svg {
    position: relative;
  }

  & > svg:first-child {
    left: 1vw;
    ${Tree1Style}
  }
  & > svg:nth-child(2) {
    left: 15vw;
    ${Tree2Style}
    ${theme.devices.tablet} {
      left: 5vw;
    }
    ${theme.devices.mobile} {
      left: 3vw;
    }
  }
  & > svg:nth-child(3) {
    left: 20vw;
    ${Tree3Style}
    ${theme.devices.mobile} {
      left: 18vw;
    }
  }
  & > svg:nth-child(4) {
    left: 24vw;
    ${Tree4Style}
    ${theme.devices.mobile} {
      left: 20vw;
    }
  }
  & > svg:nth-child(5) {
    left: 35vw;
    ${Tree1Style}
    ${theme.devices.tablet} {
      display: none;
    }
  }
  & > svg:nth-child(6) {
    left: 36vw;
    transform: scaleX(-1);
    ${Tree4Style}
    ${theme.devices.tablet} {
      display: none;
    }
  }
  & > svg:nth-child(7) {
    left: 34vw;
    top: 1vh;
    transform: scaleX(-1);
    ${Tree2Style}

    ${theme.devices.tablet} {
      left: 20vw;
    }
  }
  & > svg:nth-child(8) {
    left: 40vw;
    transform: scaleX(-1);
    ${Tree3Style}
    ${theme.devices.tablet} {
      left: 25vw;
    }
  }
`;
