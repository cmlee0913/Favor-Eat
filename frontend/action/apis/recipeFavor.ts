import { deleteAsync, postAsync } from "./apis";

export const saveFoodFavor = async (
  accessToken: string,
  foodId: string | string[],
) => {
  const response = await postAsync(`/foods/favor/${foodId}`, null, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};

export const deleteFoodFavor = async (
  accessToken: string,
  foodId: string | string[],
) => {
  const response = await deleteAsync(`/foods/favor/${foodId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};

export const saveFoodNonFavor = async (
  accessToken: string,
  foodId: string | string[],
) => {
  const response = await postAsync(`/foods/nonfavor/${foodId}`, null, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};
