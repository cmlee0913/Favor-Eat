import { theme } from "@/constant/theme";
import styled from "styled-components";

export const MobileContent = styled.div`
  display: none;

  ${theme.devices.tablet} {
    display: block;
    margin: 2rem;
    position: relative;
    top: 10vh;
  }
`;

export const Content = styled.div`
  ${theme.devices.tablet} {
    margin-top: 12rem;
    #accordian {
      display: none;
    }
  }
`;
