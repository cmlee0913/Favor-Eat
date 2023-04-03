import { useState, useEffect } from "react";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import { getFavoriteFoodList } from "@/action/apis/favorite";
import AutoHeightImage from "./AutoHeightImage";
import { useAtom } from "jotai";
import { userTokenSave } from "@/store/userStore";
import useMediaQuery from "@/action/hooks/useMediaQuery";
import { useRouter } from "next/router";
import Link from "next/link";

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

const Item = ({ src, num, recipeId }: any) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/recipe/${recipeId}`);
  };

  return (
    <div>
      <Link href={`/recipe/${recipeId}`} prefetch={false}>
        <AutoHeightImage src={src} alt="egjs" />
        {/* <div>{`${num}`}</div> */}
      </Link>
    </div>
  );
};

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

  if (!items) {
    return null;
  }

  return (
    <>
      <MasonryInfiniteGrid
        className="container"
        column={columnNumber}
        gap={10}
        resizeDebounce={20}
        onRequestAppend={async (e) => {
          const nextGroupKey = (+e.groupKey! || 0) + 1;
          console.log("append");

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
        }}
      >
        {items.map((item) => (
          <Item
            data-grid-groupkey={item.groupKey}
            key={item.key}
            num={item.key}
            src={item.src}
            recipeId={item.recipeId}
          />
        ))}
      </MasonryInfiniteGrid>
    </>
  );
}
