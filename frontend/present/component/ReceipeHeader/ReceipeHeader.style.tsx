import { theme } from "@/action/theme";
import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  margin: 1rem 0 0 0;
  display: flex;

  & * {
    margin: 0 1rem 0 0;
  }

  & div:first-child {
    height: 1rem;
    border-right: solid 2px white;
  }

  & div {
    display: flex;

    span {
      line-height: 1rem;
    }

    span:first-child {
        font-weight: bold;
    }
  }
`;

export const Container = styled.div`
  width: calc(100% - 4rem);
  border-radius: 2rem 2rem 0 0;
  padding: 1.5rem 2rem;
  background-color: blue;
  color: ${theme.colors.mono.light_1};

  & h2 {
    margin: 0;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    font-size: 1.8rem;

    & span:nth-child(2) {
      display: flex;
      align-items: center;
    }

    & img {
      height: 2rem;
      width: auto;
      cursor: pointer;
    }

    & img:nth-child(1) {
      margin-right: 0.5rem;
    }

    & img:nth-child(2) {
      transform: scaleY(-1);
    }
  }
`;
