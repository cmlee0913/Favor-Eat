import { theme } from "@/constant/theme";
import styled from "styled-components";

export const NullContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 2rem;

  img:nth-child(1) {
    width: 50%;
    height: auto;
  }

  img:nth-child(2) {
    margin-block: 2rem 0.5rem;
    padding: 0;
    width: 4%;
    height: auto;
  }

  p {
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 2rem;
`;
