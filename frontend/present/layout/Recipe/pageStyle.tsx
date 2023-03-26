import { theme } from "@/action/theme";
import styled from "styled-components";

export const PageContainer = styled.div`
  & .GridLayout:nth-child(2) {
    display: none;
  }

  ${theme.devices.tablet} {
    & .GridLayout:nth-child(1) {
      display: none;
    }

    & .GridLayout:nth-child(2) {
      display: block;
    }
  }
`;
