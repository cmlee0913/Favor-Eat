import { theme } from "@/constant/theme";
import styled from "styled-components";

export const Container = styled.button`
  color: ${theme.colors.mono.light_1};
  border: none;
  background-color: ${theme.colors.main.blue};
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  min-width: 10rem;
  border-radius: 2rem;

  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.main.skyblue};
  }

  ${theme.devices.tablet} {
    font-size: 1rem;
    min-width: 5vw;
  }
`;
