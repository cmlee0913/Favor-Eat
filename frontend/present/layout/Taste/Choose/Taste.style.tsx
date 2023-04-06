import { theme } from "@/constant/theme";
import styled, { css } from "styled-components";

export const Sky = styled.p`
  & img.Sky {
    position: absolute;
    width: 100vw;
    height: 52.12vh;
    top: 0%;
    z-index: 0;
    /* display: none; */

    ${theme.devices.tablet} {
    }

    ${theme.devices.mobile} {
      height: 53.29vh;
    }
  }
`;

export const Ground = styled.p`
  & img.Ground {
    position: absolute;
    width: 100vw;
    height: 47.88vh;
    bottom: 0%;
    z-index: 5;

    ${theme.devices.tablet} {
    }

    ${theme.devices.mobile} {
      height: 46.71vh;
    }
  }
`;

export const Bush = styled.p`
  & img.Bush {
    position: absolute;
    height: auto;
    bottom: 0%;
    z-index: 6;

    &.Responsive {
      &:nth-child(1) {
        width: 30%;
        z-index: 7;
      }
      &:nth-child(2) {
        width: 29.92%;
        left: 18.53%;
      }
      &:nth-child(3) {
        width: 24.12%;
        right: 0%;
        z-index: 7;
      }
      &:nth-child(4) {
        width: 12.67%;
        right: 0%;
        bottom: 10.97%;
      }

      ${theme.devices.tablet} {
        &:nth-child(1) {
        }
        &:nth-child(2) {
        }
        &:nth-child(3) {
        }
        &:nth-child(4) {
          bottom: 5%;
        }
      }
      ${theme.devices.mobile} {
        position: fixed;

        &:nth-child(1) {
          width: 51.35%;
          z-index: 7;
        }
        &:nth-child(2) {
          width: 51.15%;
          left: 29.5%;
        }
        &:nth-child(3) {
          width: 42.77%;
          z-index: 5;
        }
        &:nth-child(4) {
          visibility: hidden;
        }
      }
    }
  }
`;

export const Cloud = styled.p`
  & img.Cloud {
    position: absolute;
    height: auto;
    z-index: 2;

    &.Responsive {
      &:nth-child(1) {
        width: 21%;
        top: 15.85%;
        left: 0%;
      }
      &:nth-child(2) {
        width: 64.58%;
        top: 20.21%;
        right: 0%;
      }
      &:nth-child(3) {
        display: none;
      }
      &:nth-child(4) {
        display: none;
      }
      &:nth-child(5) {
        display: none;
      }

      ${theme.devices.tablet} {
        &:nth-child(1) {
          top: 30%;
        }
        &:nth-child(2) {
          top: 33%;
        }
        &:nth-child(3) {
          display: none;
        }
        &:nth-child(4) {
          display: none;
        }
        &:nth-child(5) {
          display: none;
        }
      }

      ${theme.devices.mobile} {
        &:nth-child(1) {
          width: 37.23%;
        }
        &:nth-child(2) {
          width: 99.07%;
        }
        &:nth-child(3) {
          top: 0%;
          display: block;
          width: 32%;
        }
        &:nth-child(4) {
          top: 0%;
          left: 12.5%;
          display: block;
          width: 78.46%;
        }
        &:nth-child(5) {
          top: 0%;
          right: 0%;
          width: 30.17%;
          display: block;
        }
      }
    }
  }
`;

export const Glass = styled.p`
  & img.Glass {
    position: absolute;
    height: auto;
    z-index: 4;

    &.Responsive {
      &:nth-child(1) {
        width: 7.5%;
        top: 44.87%;
        left: 7.8%;
      }
      &:nth-child(2) {
        width: 8.23%;
        top: 37.5%;
        right: 22.82%;
      }
      &:nth-child(3) {
        width: 7.5%;
        top: 44.87%;
        right: 5.02%;
      }
      ${theme.devices.tablet} {
        &:nth-child(1) {
          top: 47%;
          left: 7.8%;
        }
        &:nth-child(2) {
          top: 43%;
          right: 35%;
        }
        &:nth-child(3) {
          top: 47%;
          right: 5.02%;
        }
      }

      ${theme.devices.mobile} {
        &:nth-child(1) {
          width: 13.3%;
          top: 48.28%;
          left: 16.06%;
        }
        &:nth-child(2) {
          display: none;
        }
        &:nth-child(3) {
          width: 13.3%;
          top: 48.28%;
          right: 18.51%;
        }
      }
    }
  }
`;

export const Hill = styled.p`
  & img.Hill {
    position: absolute;
    height: auto;
    z-index: 3;

    &.Responsive {
      &:nth-child(1) {
        width: 91.1%;
        top: 28.71%;
      }
      &:nth-child(2) {
        width: 70.36%;
        right: 0%;
        top: 28.91%;
      }
      &:nth-child(3) {
        width: 68.47%;
        top: 42.7%;
      }
      &:nth-child(4) {
        width: 61.2%;
        right: 0%;
        top: 38.03%;
      }

      ${theme.devices.tablet} {
        &:nth-child(1) {
          height: 12.67%;
          top: 35%;
        }
        &:nth-child(2) {
          width: 77%;
          height: 10.78%;
          top: 40%;
        }
        &:nth-child(3) {
          width: 64%;
          height: 7.9%;
          top: 45%;
        }
        &:nth-child(4) {
          width: 76%;
          height: 12.48%;
          top: 45%;
        }
      }

      ${theme.devices.mobile} {
        &:nth-child(1) {
          width: 90.66%;
          height: 12.67%;
          top: 37%;
        }

        &:nth-child(2) {
          width: 85.76%;
          height: 10.78%;
          top: 40%;
        }

        &:nth-child(3) {
          width: 61.3%;
          height: 7.9%;
          top: 48%;
        }

        &:nth-child(4) {
          width: 71.31%;
          height: 12.48%;
          top: 45%;
        }
      }
    }
  }
`;

export const CharacterContainer = styled.div`
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  gap: 6vw;
  z-index: 1000;

  ${theme.devices.tablet} {
    gap: 13vw;
    top: 50%;
    left: 50%;
  }
  ${theme.devices.mobile} {
    gap: 10vw;
    top: 50%;
    left: 50%;
  }
`;

export const CharacterNameStyle = css`
  font-size: 1.3rem;
  text-align: center;
  margin-top: 10px;
  font-family: Pretendard-Bold;

  ${theme.devices.tablet} {
    font-size: 0.9rem;
    text-align: center;
    margin-top: 5px;
  }
  ${theme.devices.tablet} {
    font-size: 0.7rem;
    text-align: center;
    margin-top: 5px;
  }
`;

export const Character = styled.div`
  width: auto;
  height: 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${theme.devices.tablet} {
    height: 3.5rem;
  }
  ${theme.devices.mobile} {
    height: 3rem;
  }

  &:hover {
    cursor: pointer;
  }

  &.selected {
    transform: scale(1.5);
    transition: ${theme.trans};
  }

  img {
    width: 100%;
    height: 100%;
  }
  div {
    ${CharacterNameStyle}
  }
`;

export const Introduction = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  font-family: Pretendard-Bold;
  z-index: 999;
  position: absolute;
  top: 10vh;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  letter-spacing: 0.2rem;
  & > div {
    margin: 0.1rem;
    word-break: keep-all;
  }

  ${theme.devices.mobile} {
    font-size: 1.2rem;
  }
`;

export const ChooseButton = styled.div`
  background-color: ${theme.colors.main.purple.dark_4};
  color: ${theme.colors.mono.light_1};
  padding: 1.3rem 1.8rem;
  border-radius: 100px;
  font-size: 1.5rem;
  font-weight: 600;
  z-index: 1000;
  position: absolute;
  bottom: 15vh;
  left: 50%;
  transform: translateX(-50%);
  word-break: keep-all;
  text-align: center;
  font-family: Pretendard-Bold;

  :hover {
    cursor: pointer;
    background-color: ${theme.colors.main.skyblue};
  }

  ${theme.devices.tablet} {
    padding: 1rem 1.5rem;
    font-size: 1.2rem;
    bottom: 30vh;
  }
  ${theme.devices.tablet} {
    padding: 0.8rem 1rem;
    font-size: 1rem;
    bottom: 25vh;
  }
`;
