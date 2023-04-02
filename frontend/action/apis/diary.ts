import { getAsync, deleteAsync, putAsync, postAsync } from "./apis";
import { ApiResult } from "@/types/api/apiType";

// 일기 리스트 가져오기
export const getDiaryList = async (accessToken: string) => {
  const response = await getAsync("/diary", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};

// 일기 작성하기
export const postDiary = async (accessToken: string) => {
  const response = await putAsync(`/diary/post`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};

// 일기 수정하기
export const putDiary = async (accessToken: string) => {
  const response = await putAsync(`/diary/put/{id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};

// 일기 삭제하기
export const deleteDiary = async (accessToken: string) => {
  const response = await deleteAsync(`/diary/delete/{id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};
