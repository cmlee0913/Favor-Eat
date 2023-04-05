import { ApiResult } from "@/types/api/apiType";
import { nextItemType } from "@/types/MyPage/dummy";
import { UserTokenType } from "@/types/store/userStoreTypes";
import { getAsync } from "./apis";
// import { getRecommendFoodList } from '@/action/apis/main';

export const getFavoriteFoodList = async (
  accessToken: string
): Promise<ApiResult> => {
  const { isSuccess, result } = await getAsync(`/foods/favor`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return { isSuccess, result };
};

// export const getRecommendFoodList
export function getItems(nextGroupKey: number, count: number) {
  const nextItems: Array<nextItemType> = [];
  const nextKey = nextGroupKey * count;

  for (let i = 0; i < count; ++i) {
    nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
  }
  return nextItems;
}

export const requestFavoriteFoodList = async (token: string) => {
  const { isSuccess, result } = await getFavoriteFoodList(token);
  if (isSuccess) {
    const list = [];

    result.forEach((item) => {
      list.push({
        src: item.image,
        recipeName: item.name,
        recipeId: item.foodsId,
      });
    });
    return list;
  }
  return null;
};

export const onRequestAppend = async (
  e: any,
  token: UserTokenType,
  items: Array<any>,
  setItems: Function
) => {
  const nextGroupKey = (+e.groupKey! || 0) + 1;

  const newList = await requestFavoriteFoodList(token.accessToken);
  if (newList === null) {
    return;
  }

  // 중복되지 않은 항목들만 추가
  const filteredList = newList.filter((newItem) => {
    return !items.some((item) => item.recipeId === newItem.recipeId);
  });

  setItems([
    ...items,
    ...filteredList.map((newItem) => {
      return {
        groupKey: nextGroupKey,
        key: `${nextGroupKey}-${newItem.recipeId}`,
        ...newItem,
      };
    }),
  ]);
};
