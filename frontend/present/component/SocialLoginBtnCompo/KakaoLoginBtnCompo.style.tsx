import styled from "styled-components";
import { theme } from "@/constant/theme";

import kakaoLogoSvg from "@/assets/icon/kakao-logo.svg";

export const Container = styled.div`
  position: absolute;
  top: 30%;
  left: 12%;
  z-index: 50;

  ${theme.devices.tablet} {
    top: 50%;
    left: 7%;
  }
`;

export const LoginGuideText = styled.div`
  font-size: 3rem;
  margin-bottom: 30px;
  font-family: "Pretendard-SemiBold";

  &.Mobile {
    display: none;
  }

  ${theme.devices.tablet} {
    &.Mobile {
      display: block;
    }

    &.PC {
      display: none;
    }

    font-size: 2rem;
    margin-bottom: 25px;
  }

  ${theme.devices.mobile} {
    font-size: 200%;
  }
`;

export const BtnContainer = styled.div`
  background-color: #ffe812;
  width: fit-content;
  padding: 20px 30px;
  border-radius: 2rem;
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
  font-size: 1.5rem;
  margin-left: 15px;
  font-family: "Pretendard-Bold";
  ${theme.devices.tablet} {
    font-size: 2rem;
    margin-left: 7px;
  }
  ${theme.devices.mobile} {
    font-size: 150%;
    margin-left: 7px;
  }
`;
