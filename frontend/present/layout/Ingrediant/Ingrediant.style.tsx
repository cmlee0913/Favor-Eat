import { theme } from "@/constant/theme";
import styled from "styled-components";

export const Contentbar = styled.div<{ color: string; width: number }>`
  width: ${(props) => props.width}%;
  height: inherit;
  background-color: ${(props) => props.color};
  border-radius: 1rem;
`;

export const Progressbar = styled.div`
  width: 100%;
  height: 18px;
  display: flex;
  align-items: center;
  gap: 1rem;

  & p {
    font-family: "Inter-Medium" !important;
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
`;
