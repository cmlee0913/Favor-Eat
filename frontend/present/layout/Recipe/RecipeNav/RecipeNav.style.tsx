import { theme } from "@/action/theme";
import styled from "styled-components";

export const NavCompo = styled.div`
  z-index: 100;
  ${theme.devices.tablet} {
    position: fixed;
    top: 4.5rem;
    width: 100%;
  }
`;
