export const apiURL =
  process.env.NODE_ENV === "production"
    ? "https://j8d108.p.ssafy.io/api"
    : "http://j8d108.p.ssafy.io:8000/api";

export const kakaoLoginUrl = `${apiURL}/oauth2/authorization/kakao`;

export const ACCESS_TOKEN = "accessToken";
