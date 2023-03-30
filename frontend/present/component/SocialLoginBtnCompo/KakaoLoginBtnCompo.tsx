import * as style from "./KakaoLoginBtnCompo.style";

import { kakaoLoginUrl } from "@/store/constants";

export default function KakaoLoginCompo() {
  return (
    <style.Container>
      <style.LoginGuideText className="PC">지금 바로 시작하세요</style.LoginGuideText>
      <style.LoginGuideText className="Mobile">지금 바로<br />시작하세요</style.LoginGuideText>
      <style.BtnContainer>
        <style.StyledLink href={kakaoLoginUrl}>
          <style.KakaoLogo />
          <style.ButtonName>카카오 로그인</style.ButtonName>
        </style.StyledLink>
      </style.BtnContainer>
    </style.Container>
  );
}
