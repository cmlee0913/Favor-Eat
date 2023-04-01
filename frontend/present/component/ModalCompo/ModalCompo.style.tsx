import { theme } from "@/constant/theme";
import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
`;

export const Container = styled.div`
  width: fit-content;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 25px;
  background-color: ${theme.colors.mono.light_1};
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
