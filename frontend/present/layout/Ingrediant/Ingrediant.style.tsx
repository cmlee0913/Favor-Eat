import { theme } from "@/constant/theme";
import styled, { keyframes } from "styled-components";

const openProgressbar = (width) => keyframes`
    0% {
        width: 0;
        opacity: 0;
        color: transparent;
    }
    
    100% {
        width: ${width};
        opacity: 1;
    }
`;

export const Contentbar = styled.div<{
  color: string;
  width: number;
  idx: number;
}>`
  width: 0;
  height: inherit;
  background-color: ${(props) => props.color};
  border-radius: 1rem;
  animation: ${openProgressbar} 2s forwards;
  animation-delay: ${(props) => `0.${props.idx}s`};

  &.Vitamin {
    height: 18px;
    width: ${(props) => props.width}px;
    text-align: center;

    p {
      font-family: "Inter-Medium" !important;
      position: relative;
      padding: 0;
      margin: 0 !important;
      font-size: 0.8rem !important;
    }
  }
`;

export const Progressbar = styled.div`
  width: 100%;
  height: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  & p {
    font-family: "Inter-Medium" !important;
  }

  &.Vitamin {
    height: fit-content;
    flex-direction: column;
    gap: 0;
    justify-content: flex-start;
    width: fit-content;
  }
`;

export const EctNutrientCompo = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr 20px;
  align-items: center;

  & p {
    margin-block: 0.5rem;
    font-family: "Pretendard-Light";
    font-size: 1rem;
  }

  &.Vitamin {
    display: grid;
    grid-template-columns: 1fr 5fr 20px;
    align-items: flex-end;
    justify-content: flex-start;

    & p {
      margin-block: 0;
      font-family: "Pretendard-Light";
      font-size: 1rem;
    }

    & > div {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      gap: 0.5rem;
    }
  }
`;

export const NullContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 2rem;

  & img:nth-child(1) {
    width: 50%;
    height: auto;
  }

  & img:nth-child(2) {
    margin-block: 2rem 0.5rem;
    padding: 0;
    width: 4%;
    height: auto;
  }

  & p {
    font-family: "Pretendard-Bold";
    padding: 0;
    margin-block: 0 1rem;
    color: ${theme.colors.main.grey};
  }

  ${theme.devices.tablet} {
    height: calc(100vh - 20rem);

    img:nth-child(1) {
      width: 80%;
      height: auto;
    }

    img:nth-child(2) {
      margin-block: 2rem 0.5rem;
      padding: 0;
      width: 4%;
      height: auto;
    }
  }
`;

export const Container = styled.div`
  padding-block: 2rem;

  & .PieChart {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  ${theme.devices.tablet} {
    padding-top: 6rem;
  }
`;
