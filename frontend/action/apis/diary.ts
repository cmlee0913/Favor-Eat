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

// 일기 하나 가져오기
export const getDiaryDetail = async (accessToken: string) => {
  const response = await getAsync("/diary/{id}", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};

// 일기 작성하기
export const postDiary = async (accessToken: string) => {
  const response = await postAsync(`/diary`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};

// 일기 수정하기
export const putDiary = async (accessToken: string) => {
  const response = await putAsync(`/diary/{id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};

// 일기 삭제하기
export const deleteDiary = async (accessToken: string) => {
  const response = await deleteAsync(`/diary/{id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};
