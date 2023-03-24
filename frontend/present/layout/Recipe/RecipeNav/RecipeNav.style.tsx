import { theme } from "@/action/theme";
import styled from "styled-components";

export const NavCompo = styled.div`
  ${theme.devices.tablet} {
    position: fixed;
    top: 0;
    width: 100%;
  }
`;
