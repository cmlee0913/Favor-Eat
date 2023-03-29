import styled from "styled-components";
import { theme } from "@/constant/theme";

export const Item = styled.div`
  ${theme.devices.desktop} {
    width: 15vw;
  }
  ${theme.devices.tablet} {
    width: 23vw;
  }
  ${theme.devices.mobile} {
    width: 31vw;
  }
`;
