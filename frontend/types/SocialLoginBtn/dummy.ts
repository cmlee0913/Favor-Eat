enum SocialLoginType {
  kakao = "kakao",
  google = "google",
}

interface SocialLoginCompo {
  type: SocialLoginType;
  title: string;
}

export { SocialLoginType };
export type { SocialLoginCompo };
