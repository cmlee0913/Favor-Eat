import { theme } from "@/constant/theme";
import styled, { keyframes } from "styled-components";

export const fadeInUp = keyframes`
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
    font-family: "Inter-Black";

    &:nth-child(1) {
      top: 14%;
      left: 7%;
    }

    &:nth-child(2) {
      top: 37%;
      right: 7%;
    }

    ${theme.devices.tablet} {
      display: none;
    }
  }

  &.Mobile {
    display: none;
    position: absolute;
    font-family: "Inter-Black";
    font-size: 300%;
    z-index: 15;

    ${theme.devices.tablet} {
      display: block;
      left: 11.78%;
      top: 15%;
    }

    ${theme.devices.mobile} {
      top: 35%;
      left: 5%;
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

export const SampleImg = styled.div`
  & img.SampleImg {
    width: auto;
    height: 37%;
    position: absolute;
    z-index: 6;
    top: 5%;

    &:nth-child(1) {
      top: 34.56%;
      left: 0;
    }

    &:nth-child(2) {
      right: 51.12%;
      top: 53.23%;
    }

    &:nth-child(3) {
      right: 24.6%;
      top: 34.56%;
    }

    &:nth-child(4) {
      right: 0;
      top: 17.01%;
    }
  }
`;

export const FunctionImg = styled.div`
  & img.SampleImg {
    width: auto;
    height: 25vw;
    position: absolute;
    z-index: 6;

    &:nth-child(1) {
      top: 40.32%;
      left: 0;
    }

    &:nth-child(2) {
      right: 58.3%;
      top: 23.59%;
    }

    &:nth-child(3) {
      right: 35.16%;
      top: 40.31%;
    }

    &:nth-child(4) {
      right: 12%;
      top: 58.04%;
    }

    &:nth-child(5) {
      right: 0;
      top: 40.58%;
    }

    ${theme.devices.tablet} {
      height: 27vw;

      &:nth-child(1) {
        top: 50.32%;
      }

      &:nth-child(2) {
        right: 57.3%;
        top: 38%;
      }

      &:nth-child(3) {
        top: 50.31%;
      }

      &:nth-child(4) {
        top: 63.04%;
      }

      &:nth-child(5) {
        top: 50.58%;
      }
    }
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
        top: 0;
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
`;

export const SampleTest = styled.div`
  position: absolute;
  z-index: 60;

  &.Suggest {
    left: 3%;
    top: 13%;
  }

  &.Function {
    text-align: right;
    right: 3.63%;
    top: 15.8%;
  }

  & p.Mobile {
    display: none;
  }

  & > h1 {
    font-size: 3rem;
    margin: 0;
    font-family: "Pretendard-Bold";
  }

  & > p {
    font-size: 20px;
    font-family: "Pretendard-Semibold";
  }

  ${theme.devices.tablet} {
    & p.PC {
      display: none;
    }

    & p.Mobile {
      display: block;
    }

    &.Suggest {
      left: 3%;
      top: 20%;
    }

    &.Function {
      text-align: left;
      left: 3%;
      top: 15.8%;
    }

    & > h1 {
      font-size: 2rem;
    }

    & > p {
      font-size: 20px;
    }
  }

  ${theme.devices.mobile} {
    &.Function {
      text-align: left;
      left: 3%;
      top: 15.8%;
    }

    & > h1 {
      font-size: 2rem;
    }

    & > p {
      font-size: 15px;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 150vh;

  &.Violet {
    background-color: ${theme.colors.background.violet};
  }

  &.Pink {
    background-color: ${theme.colors.background.pink};

    &.Suggest {
      padding-top: 20rem;
      height: calc(150vh - 20rem);
    }
  }

  & img.EndPoint {
    position: absolute;
    bottom: -5vw;
    width: 100%;
    height: auto;
    z-index: 1;
  }
`;
