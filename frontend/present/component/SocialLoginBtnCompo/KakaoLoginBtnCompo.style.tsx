import styled from "styled-components";
import { theme } from "@/action/theme";

import kakaoLogoSvg from "@/assets/icon/kakao-logo.svg";

export const Container = styled.div`
  position: absolute;
  top: 30%;
  left: 12%;
`;

export const LoginGuideText = styled.div`
  font-size: 24px;
  margin-bottom: 30px;

  ${theme.devices.tablet} {
    font-size: 20px;
    margin-bottom: 25px;
  }
  ${theme.devices.mobile} {
    font-size: 16px;
  }
`;

export const BtnContainer = styled.div`
  background-color: #ffe812;
  width: fit-content;
  padding: 20px 30px;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${theme.devices.tablet} {
    padding: 15px 25px;
  }
  ${theme.devices.mobile} {
    padding: 10px 20px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  cursor: point;
  color: ${theme.colors.mono.dark_2};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const KakaoLogo = styled(kakaoLogoSvg)`
  width: 2em;
  ${theme.devices.tablet} {
    width: 1.5em;
  }
  ${theme.devices.mobile} {
    width: 1em;
  }
`;

export const ButtonName = styled.span`
  font-size: 20px;
  margin-left: 15px;
  ${theme.devices.tablet} {
    font-size: 16px;
    margin-left: 7px;
  }
  ${theme.devices.mobile} {
    font-size: 12px;
    margin-left: 7px;
  }
`;
