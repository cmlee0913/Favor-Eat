import styled from "styled-components";
import { theme } from "@/constant/theme";

export const Title = styled.div`
  width: calc(100%-2rem);
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: space-between;

  & svg {
    width: 19px;
    height: auto;
  }
`;

export const Content = styled.div`
  transition: all 0.2s ease;
  width: calc(100%-2rem);
  padding: 1.5rem 1rem 1.5rem 1rem;

  display: flex;
  margin: auto;
`;

export const Container = styled.div<{ open: boolean; idx: number }>`
  border-bottom: solid 2.2px
    ${(props) => (props.open ? theme.colors.main.blue : theme.colors.main.blue)};

  & ${Content} {
    border-top: solid 2.2px ${(props) => theme.colors.main.blue};
  }

  & ${Title} {
    font-weight: bold;
    font-size: 18px;
    color: ${(props) =>
      props.open ? theme.colors.mono.dark_3 : theme.colors.mono.dark_3};

    & svg {
      transform: rotate(${(props) => (props.open ? "0.5turn" : "0")});
      path {
        fill: ${(props) =>
          props.open ? theme.colors.main.blue : theme.colors.main.blue};
      }
    }
  }
`;
