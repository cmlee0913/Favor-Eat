import styled from "styled-components";
import { theme } from "@/constant/theme";

export const AutoHeightImageWrapper = styled.div`
  width: 100%;
  & > span {
    position: unset !important;
    & .autoImage {
      object-fit: contain !important;
      position: relative !important;
      height: auto !important;
    }
  }

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
