import { theme } from "@/action/theme";
import styled from "styled-components";

export const HeaderContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  width: calc(100vw - 4rem);
  height: 3rem;
  padding: 1rem 2rem;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background-color: ${(props) =>
    props.isOpen ? "transparent" : theme.colors.mono.light_1};
  z-index: 50;

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
`;

export const Container = styled.div`
  position: relative;
`;
