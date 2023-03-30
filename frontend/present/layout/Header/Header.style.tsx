import { theme } from "@/constant/theme";
import styled from "styled-components";

export const HeaderContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  width: calc(100vw - 4rem);
  height: 3rem;
  padding: 1rem 2rem;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  background-color: ${(props) =>
    props.isOpen ? "transparent" : theme.colors.mono.light_1};
  z-index: 90;

  & svg {
    width: 30px;
    height: auto;
    cursor: pointer;
  }

  & svg.Arrow {
    transform: rotate(0.25turn);

    &:hover {
      path {
        fill: ${theme.colors.main.blue};
      }
    }
  }

  ${theme.devices.tablet} {
    padding: 1rem 1rem;
    width: calc(100vw - 2rem);
    height: 2.5rem;

    & svg.Arrow {
      width: 25px;
    }
  }
`;

export const Container = styled.div`
  position: relative;
`;
