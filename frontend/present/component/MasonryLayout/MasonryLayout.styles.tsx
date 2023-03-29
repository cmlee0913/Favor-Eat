import styled from "styled-components";
import { theme } from "@/constant/theme";

export const Item = styled.div`
  ${theme.devices.desktop} {
    width: 16vw;
  }
  ${theme.devices.tablet} {
    width: 25vw;
  }
  ${theme.devices.mobile} {
    width: 33vw;
  }
`;
