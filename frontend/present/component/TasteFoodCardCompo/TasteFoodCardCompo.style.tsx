import { theme } from "@/action/theme";
import styled from "styled-components";

export const Card = styled.div`
  width: 15vw;
  height: 50vh;
  object-fit: cover;
  min-width: 200px;
  border-radius: 15px;

  ${theme.devices.tablet} {
    height: 17rem;
  }
  ${theme.devices.mobile} {
    width: 10rem;
    height: 14rem;
    min-width: 120px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: 2rem 1.3rem 0px ${theme.colors.main.purple.dark_1};

    ${theme.devices.tablet} {
      box-shadow: 1.6rem 1rem 0px ${theme.colors.main.purple.dark_1};
    }
    ${theme.devices.mobile} {
      box-shadow: 1.2rem 1rem 0px ${theme.colors.main.purple.dark_1};
    }
  }

  div {
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.main.purple.dark_1};
    overflow: hidden;
    position: relative;
    border-radius: inherit;

    ::after {
      display: block;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      transform: translateX(-100%);
      animation: 2s loading linear 0.5s infinite;
      background: linear-gradient(
        90deg,
        transparent,
        ${theme.colors.main.purple.dark_2},
        transparent
      );
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      transform: translateX(-100%);
      z-index: 1;
    }

    @keyframes loading {
      0% {
        transform: translateX(-100%);
      }
      60% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  }
`;
