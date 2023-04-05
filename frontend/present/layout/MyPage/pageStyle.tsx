import styled from "styled-components";
import { theme } from "@/constant/theme";

export const CategoryContainer = styled.div`
  width: 45vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${theme.devices.tablet} {
    width: 90vw;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: ${theme.colors.background.violet};
`;
