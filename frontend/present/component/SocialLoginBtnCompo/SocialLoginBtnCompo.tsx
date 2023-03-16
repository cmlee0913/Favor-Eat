import { SocialLoginCompo } from "@/types/SocialLoginBtn/dummy";
import * as style from "./SocialLoginBtnCompo.style";

import { socialLoginUrl } from "@/store/constants";

export default function SocialLoginBtnCompo({ type, title }: SocialLoginCompo) {
  return (
    <style.Container type={type}>
      <style.StyledLink href={socialLoginUrl[type]}>
        {style.Logo(type)}
        <style.ButtonName>{title}</style.ButtonName>
      </style.StyledLink>
    </style.Container>
  );
}
