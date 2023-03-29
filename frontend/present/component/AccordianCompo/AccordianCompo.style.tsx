import styled from "styled-components";
import { theme } from "@/constant/theme";

export const Title = styled.div`
  width: calc(100%-2rem);
  padding: 1.5rem 1.6rem 1.5rem 0.4rem;
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
    ${(props) =>
      props.open ? theme.accordianColor[props.idx] : theme.colors.mono.dark_0};
  font-family: "Pretendard-Bold";
  font-size: 1.2rem;

  & ${Content} {
    border-top: solid 2.2px ${(props) => theme.accordianColor[props.idx]};
  }

  & ${Title} {
    color: ${(props) =>
      props.open ? theme.accordianColor[props.idx] : theme.colors.mono.dark_0};

    & svg {
      transform: rotate(${(props) => (props.open ? "0.5turn" : "0")});
      path {
        fill: ${(props) =>
          props.open
            ? theme.accordianColor[props.idx]
            : theme.colors.mono.dark_0};
      }
    }
  }
`;
