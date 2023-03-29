import { getAsync } from "./apis";

export const getTasteRecipeList = async (
  requestCount: number,
  accessToken: string,
) => {
  const response = await getAsync(`/user/list/${requestCount}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  console.log(response);
};
