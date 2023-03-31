import { theme } from "@/constant/theme";
import styled from "styled-components";

export const TitleContainer = styled.div`
  background-color: ${theme.colors.main.blue};
  color: ${theme.colors.mono.light_1};
  padding: 0.5rem 1.5rem 0.5rem 2.5rem;
  position: relative;
  left: -2rem;
  border-radius: 2rem;
`;

export const IconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: ${theme.colors.main.blue};
  border-radius: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;

  & img {
    width: 3rem;
    height: 3rem;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Pretendard-Medium";
`;
