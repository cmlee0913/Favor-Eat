import { theme } from "@/action/theme";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: calc(100vw - 4rem);
  height: 3rem;
  padding: 1rem 2rem;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background-color: ${theme.colors.mono.light_1};
  z-index: 50;
`;

export const Container = styled.div`
    position: relative;
`;
