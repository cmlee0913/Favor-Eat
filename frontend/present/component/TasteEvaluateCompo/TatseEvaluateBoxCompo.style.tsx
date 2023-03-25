import { theme } from "@/action/theme";
import styled from "styled-components";

const borderRadiusStyle = 20;

export const Container = styled.div`
  background-color: ${theme.colors.mono.light_1};
  border-radius: ${borderRadiusStyle}px;

  height: 100%;
  width: 60%;

  ${theme.devices.tablet} {
    width: 50%;
  }
`;

export const Header = styled.div`
  height: 25%;
  top: 50%;
  border-radius: ${borderRadiusStyle}px ${borderRadiusStyle}px 0 0;
  background-color: ${theme.colors.main.purple.dark_1};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.2rem;

  /* title */
  & div:first-child {
    font-size: 1.3rem;
    font-weight: 700;
    color: ${theme.colors.mono.light_1};
  }
`;
