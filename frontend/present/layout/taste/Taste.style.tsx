import { theme } from "@/action/theme";
import styled from "styled-components";

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
        }
        &:nth-child(2) {
        }
        &:nth-child(3) {
        }
        &:nth-child(4) {
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

export const Character = styled.p`
  & img.Character {
    position: absolute;
    height: auto;

    &.Responsive {
      &:nth-child(1) {
        z-index: 6;
        width: 6.5%;
        left: 34.07%;
        bottom: 26%;
      }
      &:nth-child(2) {
        z-index: 6;
        width: 6.85%;
        left: 46.5%;
        bottom: 26%;
      }
      &:nth-child(3) {
        z-index: 6;
        width: 6.25%;
        right: 34.07%;
        bottom: 26%;
      }
      &:nth-child(4) {
        z-index: 6;
        width: 8.33%;
        left: 16%;
        bottom: 4.5%;
      }

      ${theme.devices.tablet} {
      }

      ${theme.devices.mobile} {
        &:nth-child(1) {
          width: 17.39%;
          left: 6.34%;
        }
        &:nth-child(2) {
          width: 17.39%;
          left: 41%;
        }
        &:nth-child(3) {
          width: 17.39%;
          right: 6.58%;
        }
        &:nth-child(4) {
          width: 14.07%;
          left: 28.23%;
          bottom: 2.31%;
        }
      }
    }
  }
`;

export const Introduction = styled.p`
  & p.Introduction {
    z-index: 9999;
    position: absolute;
    margin: 0;

    :nth-child(1) {
      font-size: 45px;
      text-align: center;
      left: 40%;
      top: 0;
    }
    :nth-child(2) {
      font-size: 30px;
      bottom: 20%;
      left: 35%;
    }
    :nth-child(3) {
      font-size: 30px;
      bottom: 20%;
      left: 49%;
    }
    :nth-child(4) {
      font-size: 30px;
      bottom: 20%;
      left: 61%;
    }

    ${theme.devices.tablet} {
    }
    ${theme.devices.mobile} {
      :nth-child(1) {
        font-size: 15px;
        left: 30%;
        top: 10%;
      }
      :nth-child(2) {
        bottom: 20%;
        left: 10%;
      }
      :nth-child(3) {
        bottom: 20%;
        left: 47%;
      }
      :nth-child(4) {
        bottom: 20%;
        left: 80%;
      }
    }
  }
`;
