import styled from "styled-components";
import { theme } from "@/constant/theme";

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

  & text {
    font-family: "Pretendard-Medium";
    color: #59577c;

    &:nth-child(1) {
      color: #000;
    }
  }

  & rect {
    font-family: "Pretendard-Light";
  }

  & strong {
    font-family: "Pretendard-ExtraLight";
  }
`;
