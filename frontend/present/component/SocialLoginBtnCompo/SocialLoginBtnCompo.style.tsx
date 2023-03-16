import styled from "styled-components";
import { theme } from "@/action/theme";
import { SocialLoginType } from "@/types/SocialLoginBtn/dummy";

import kakaoLogoSvg from "@/assets/icon/kakao-logo.svg";
import googleLogoSvg from "@/assets/icon/google-logo.svg";

const color = {
  kakao: "#FFE812",
  google: theme.colors.mono.light_1,
};

const Container = styled.div<{ type: SocialLoginType }>`
  background-color: ${(props) =>
    props.type === SocialLoginType.kakao ? color.kakao : color.google};
  width: fit-content;
  padding: 20px 30px;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${theme.devices.mobile} {
    padding: 10px 20px;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  cursor: point;
  color: ${theme.colors.mono.dark_2};
`;

const KakaoLogo = styled(kakaoLogoSvg)`
  width: 40px;
  ${theme.devices.mobile} {
    width: 20px;
  }
`;
const GoogleLogo = styled(googleLogoSvg)`
  width: 40px;
  ${theme.devices.mobile} {
    width: 20px;
  }
`;

const Logo = (type: SocialLoginType) =>
  type === SocialLoginType.google ? <GoogleLogo /> : <KakaoLogo />;

const ButtonName = styled.span`
  font-size: 24px;
  margin-left: 15px;
  ${theme.devices.mobile} {
    font-size: 10px;
    margin-left: 7px;
  }
`;

export { Container, StyledLink, Logo, ButtonName };
