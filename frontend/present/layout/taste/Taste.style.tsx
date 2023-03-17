import { theme } from "@/action/theme";
import styled from "styled-components";

export const Bush = styled.p`
  & img.Bush {
    position: absolute;
    height: auto;
    bottom: 0%;

    &.Test {
      &:nth-child(1) {
        width: 25%;
        left: 0%;
        z-index: 2;
      }
      &:nth-child(2) {
        width: 25%;
        left: 18%;
        z-index: 1;
      }
      &:nth-child(3) {
        width: 25%;
        left: 75%;
        z-index: 2;
      }
      &:nth-child(4) {
        width: 13%;
        left: 87%;
        bottom: 11%;
        z-index: 1;
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
          width: 60%;
          left: 0%;
          z-index: 3;
        }
        &:nth-child(2) {
          width: 60%;
          left: 29.5%;
          z-index: 2;
        }
        &:nth-child(3) {
          width: 50%;
          z-index: 1;
        }
        &:nth-child(4) {
          visibility: hidden;
        }
      }
    }
  }
`;

export const test2 = styled.p`
  width: 100px;
`;
