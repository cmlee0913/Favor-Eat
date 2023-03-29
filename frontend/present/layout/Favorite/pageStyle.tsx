import styled from "styled-components";
import { theme } from "@/constant/theme";

export const Container = styled.div`
  margin-top: 5.5rem;
  font-size: 40px;
  font-weight: bold;

  ${theme.devices.desktop} {
    margin-left: 3vw;
    margin-right: 3vw;
  }
  ${theme.devices.tablet} {
    margin-left: 2vw;
    margin-right: 2vw;

    font-size: 32px;
  }

  ${theme.devices.mobile} {
    margin-left: 2vw;
    margin-right: 2vw;

    font-size: 24px;
  }
`;
