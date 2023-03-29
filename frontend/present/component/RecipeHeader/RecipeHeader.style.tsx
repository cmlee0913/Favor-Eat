import { theme } from "@/constant/theme";
import styled from "styled-components";

export const Info = styled.div`
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

  ${theme.devices.mobile} {
    & * {
      margin: 0 0.5rem 0 0;
    }

    & div:first-child {
      height: 1rem;
    }

    & div {
      font-size: 1rem;
      display: flex;

      span {
        line-height: 1rem;
      }

      span:first-child {
        font-weight: bold;
      }
    }
  }
`;

export const Container = styled.div<{ selectIdx: number }>`
  width: calc(100% - 4rem);
  border-radius: 2rem 2rem 0 0;
  padding: 1.5rem 2rem;
  transition: ${theme.trans};
  background-color: ${(props) => theme.accordianColor[props.selectIdx]};
  color: ${theme.colors.mono.light_1};
  position: relative;
  z-index: 2;

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
  }

  ${theme.devices.tablet} {
    width: calc(100% - 3rem);
    padding: 1.5rem;
    border-radius: 0;

    & h2 {
      font-size: 1.6rem;
    }
  }
`;
