import { getAsync } from "./apis";

export const getMyTaste = async (accessToken: string) => {
  const response = await getAsync("/users", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};
