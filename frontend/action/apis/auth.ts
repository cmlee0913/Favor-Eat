import { putAsync } from "./apis";

export async function logoutAsync(token: string) {
  const response = await putAsync("/users/signout", null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
