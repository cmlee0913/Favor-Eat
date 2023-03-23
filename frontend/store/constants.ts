export const apiURL =
  process.env.NODE_ENV === "production"
    ? "http://j8d108.p.ssafy.io:8080"
    : "http://j8d108.p.ssafy.io:8000";

export const kakaoLoginUrl = `${apiURL}/oauth2/authorization/kakao`;

export const ACCESS_TOKEN = "accessToken";
