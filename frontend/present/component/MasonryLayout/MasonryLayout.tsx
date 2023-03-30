import { useState, useEffect } from "react";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import Image from "next/image";
import { getFavoriteFoodList } from "@/action/apis/favorite";
import AutoHeightImage from "./AutoHeightImage";
import { useAtom } from "jotai";
import { userTokenSave } from "@/store/userStore";
import useMediaQuery from "@/action/hooks/useMediaQuery";

const requestFavoriteFoodList = async (token: string) => {
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

function getItems(nextGroupKey: number, count: number) {
  const nextItems = [];
  const nextKey = nextGroupKey * count;

  for (let i = 0; i < count; ++i) {
    nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
  }
  return nextItems;
}

const Item = ({ src, num }: any) => (
  <div>
    <AutoHeightImage src={src} alt="egjs" />
    {/* <div>{`${num}`}</div> */}
  </div>
);

export default function MasonryLayout() {
  const [items, setItems] = useState(() => getItems(0, 10));

  const [token] = useAtom(userTokenSave);

  const isTablet = useMediaQuery("(min-width: 769px)");
  const isPhone = useMediaQuery("(min-width: 426px)");

  let columnNumber = 6;

  useEffect(() => {
    if (token.accessToken) {
      requestFavoriteFoodList(token.accessToken).then((list) => {
        if (list === null) {
          return;
        }
        const newList = [...list];
        setItems(newList);
      });
    }
  }, [token.accessToken]);

  if (isTablet && isPhone) {
    columnNumber = 6;
  } else if (!isTablet && isPhone) {
    columnNumber = 4;
  } else {
    columnNumber = 3;
  }

  if (items === null) {
    return null;
  }

  return (
    <>
      {/* {items.length} */}
      <MasonryInfiniteGrid
        className="container"
        column={columnNumber}
        gap={10}
        resizeDebounce={20} // 화면 크기가 바뀜에 따라 resize할 때 반응하는 시간 50 = 0.5s
        onRequestAppend={(e) => {
          const nextGroupKey = (+e.groupKey! || 0) + 1;

          setItems([...items, ...getItems(nextGroupKey, 10)]);
        }}
      >
        {items.map((item) => (
          <Item
            data-grid-groupkey={item.groupKey}
            key={item.key}
            num={item.key}
            src={item.src}
          />
        ))}
      </MasonryInfiniteGrid>
    </>
  );
}
