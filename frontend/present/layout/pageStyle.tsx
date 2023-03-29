import { theme } from "@/constant/theme";
import styled from "styled-components";

export const PageContainer = styled.div`
  overflow: hidden;
`;

export const Container404 = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;

  img {
    width: 38rem;
    height: auto;
  }

  div {
    background-color: ${theme.colors.main.blue};
    padding: 1rem;
    color: ${theme.colors.mono.light_1};
    border-radius: 2rem;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.main.skyblue};
    }
  }
`;

export const ContainerLoading = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
`;
