export const apiURL =
  process.env.NODE_ENV === "production"
    ? "https://j8d108.p.ssafy.io/api"
    : "https://j8d108.p.ssafy.io/api-test";

export const kakaoLoginUrl = `${apiURL}/oauth2/authorization/kakao`;

export const ACCESS_TOKEN = "accessToken";
