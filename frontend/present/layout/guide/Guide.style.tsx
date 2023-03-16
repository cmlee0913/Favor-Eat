import { theme } from "@/action/theme";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
      -webkit-transform: translate(0px, 30px);
      -ms-transform: translate(0px, 30px);
      transform: translate(0px, 30px);
    }
    to {
      opacity: 1;
    }
`;

export const Slogan = styled.p`
  &.Main {
    position: absolute;
    font-size: 400%;
    z-index: 3;

    &:nth-child(1) {
      top: 14%;
      left: 7%;
    }

    &:nth-child(2) {
      top: 37%;
      right: 7%;
    }
  }
`;

export const Character = styled.div`
  position: fixed;
  z-index: 5000;
  left: 42vw;

  & img {
    height: 80vh;
    width: auto;
  }

  ${theme.devices.tablet} {
    left: 50vw;

    & img {
      height: 90vh;
      width: auto;
    }
  }

  ${theme.devices.mobile} {
    left: 40vw;

    & img {
      height: 70vh;
      width: auto;
    }
  }
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10%;
  z-index: 3;
  background-color: #34314c;
`;

export const SampleImg = styled.div<{ picPos: number }>`
  & img.SampleImg {
    width: 15%;
    height: auto;
    position: absolute;
    right: ${props => props.picPos*2}px;
    top: ${props => props.picPos*1.2}px;
    z-index: 6;
  }
`;

export const Cloud = styled.div`
  & img.Cloud {
    position: absolute;
    height: auto;
    z-index: 2;
    animation: ${fadeInUp} 1s;

    &.Reverse {
      transform: scaleX(-1);
      animation: none;
    }

    &.Start {
      &:nth-child(1) {
        width: 20%;
        right: 30.47%;
        top: 1.89%;
      }

      &:nth-child(2) {
        width: 40%;
        left: 0.9%;
        top: 37%;
      }

      &:nth-child(3) {
        width: 50%;
        right: 0;
        top: 60%;
      }
    }

    &.Suggest {
      &:nth-child(1) {
        width: 90%;
        left: 0.23%;
        top: 20%;
      }

      &:nth-child(2) {
        width: 25%;
        right: 4.27%;
        top: 70%;
      }
    }

    &.Function {
      &:nth-child(1) {
        width: 70%;
        left: 2.48%;
        top: 20%;
      }

      &:nth-child(2) {
        width: 22%;
        left: 10%;
        top: 70%;
      }
    }

    &.End {
      &:nth-child(1) {
        width: 20%;
        left: 20.38%;
        top: 10%;
      }

      &:nth-child(2) {
        width: 40%;
        height: auto;
        right: -0.02%;
        top: 30%;
      }

      &:nth-child(3) {
        width: 60%;
        height: auto;
        left: 0;
        top: 50%;
      }
    }

    ${theme.devices.tablet} {
      &.Start {
        &:nth-child(1) {
          width: 50%;
          right: 30.47%;
          top: 5%;
        }

        &:nth-child(2) {
          width: 45%;
          left: 2.09%;
          top: 50%;
        }

        &:nth-child(3) {
          width: 90%;
          right: 0%;
          top: 70%;
        }
      }

      &.Suggest {
        &:nth-child(1) {
          width: 150%;
          left: -70%;
          top: 10%;
        }

        &:nth-child(2) {
          width: 70%;
          right: 10.59%;
          top: 70%;
        }
      }

      &.Function {
        &:nth-child(1) {
          width: 180%;
          left: -80%;
          top: 20%;
        }

        &:nth-child(2) {
          width: 40%;
          left: 53.75%;
          top: 70%;
        }
      }

      &.End {
        &:nth-child(1) {
          width: 20%;
          left: 20.38%;
          top: 10%;
        }

        &:nth-child(2) {
          width: 40%;
          height: auto;
          right: -0.02%;
          top: 30%;
        }

        &:nth-child(3) {
          width: 60%;
          height: auto;
          left: 0;
          top: 50%;
        }
      }
    }

    ${theme.devices.mobile} {
      &.Start {
        &:nth-child(1) {
          width: 50%;
          right: 30.47%;
          top: 5%;
        }

        &:nth-child(2) {
          width: 45%;
          left: 2.09%;
          top: 50%;
        }

        &:nth-child(3) {
          width: 90%;
          right: 0%;
          top: 70%;
        }
      }

      &.Suggest {
        &:nth-child(1) {
          width: 150%;
          left: -70%;
          top: 10%;
        }

        &:nth-child(2) {
          width: 70%;
          right: 10.59%;
          top: 70%;
        }
      }

      &.Function {
        &:nth-child(1) {
          width: 180%;
          left: -80%;
          top: 20%;
        }

        &:nth-child(2) {
          width: 40%;
          left: 53.75%;
          top: 70%;
        }
      }

      &.End {
        &:nth-child(1) {
          width: 20%;
          left: 20.38%;
          top: 10%;
        }

        &:nth-child(2) {
          width: 40%;
          height: auto;
          right: -0.02%;
          top: 30%;
        }

        &:nth-child(3) {
          width: 60%;
          height: auto;
          left: 0;
          top: 50%;
        }
      }
    }
  }
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  &.Violet {
    background-color: ${theme.colors.background.violet};
  }

  &.Pink {
    background-color: ${theme.colors.background.pink};
  }

  & img.EndPoint {
    position: absolute;
    bottom: -5vw;
    width: 100%;
    height: auto;
    z-index: 1;
  }
`;
