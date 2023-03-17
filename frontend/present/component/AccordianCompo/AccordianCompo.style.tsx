import styled from "styled-components";
import { theme } from "@/action/theme";

const color = [
  theme.colors.main.red,
  theme.colors.main.yellow,
  theme.colors.main.skyblue,
];

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
`;

export const Container = styled.div<{ open: boolean; idx: number }>`
  border-bottom: solid 2.2px
    ${(props) => (props.open ? color[props.idx] : theme.colors.mono.dark_1)};

  & ${Content} {
    border-top: solid 2.2px ${(props) => color[props.idx]};
  }

  & ${Title} {
    color: ${(props) =>
      props.open ? color[props.idx] : theme.colors.mono.dark_1};

    & svg {
      transform: rotate(${(props) => (props.open ? "0.5turn" : "0")});
      path {
        fill: ${(props) =>
          props.open ? color[props.idx] : theme.colors.mono.dark_1};
      }
    }
  }
`;
