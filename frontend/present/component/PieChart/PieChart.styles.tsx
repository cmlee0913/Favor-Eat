import styled from "styled-components";
import { theme } from "@/action/theme";

export const Wrapper = styled.div`
  ${theme.devices.desktop} {
    width: 600px;
    height: 400px;
    /* margin: "0 auto"; */
  }
  ${theme.devices.tablet} {
    width: 400px;
    height: 200px;
    /* margin: "0 auto"; */
  }
  ${theme.devices.mobile} {
    width: 300px;
    height: 150px;
    /* margin: "0 auto"; */
  }
`;
