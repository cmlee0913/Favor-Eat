export const apiURL = `${process.env.REACT_APP_API_SERVER_URL}`;

export const socialLoginUrl = {
  kakao: `${apiURL}/oauth2/authorization/kakao`,
  google: `${apiURL}/oauth2/authorization/google`,
};

export const ACCESS_TOKEN = "accessToken";
