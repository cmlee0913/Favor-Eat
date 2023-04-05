import { useState, useEffect } from "react";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import {
  getItems,
  onRequestAppend,
  requestFavoriteFoodList,
} from "@/action/apis/favorite";
import { useAtom } from "jotai";
import { userTokenSave } from "@/store/userStore";
import useMediaQuery from "@/action/hooks/useMediaQuery";
import { Item } from "./FavoriteItem";

export default function MasonryLayout() {
  const [items, setItems] = useState<Array<any>>();
  const [columnNumber, setColumnNumber] = useState(6);
  const [token] = useAtom(userTokenSave);

  const isTablet = useMediaQuery("(min-width: 769px)");
  const isPhone = useMediaQuery("(min-width: 426px)");

  useEffect(() => {
    setItems(() => getItems(0, 10));
  }, []);

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

  useEffect(() => {
    if (isTablet && isPhone) {
      setColumnNumber(6);
    } else if (!isTablet && isPhone) {
      setColumnNumber(4);
    } else {
      setColumnNumber(3);
    }
  }, [isTablet, isPhone]);

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
        onRequestAppend={(e) => onRequestAppend(e, token, items, setItems)}
      >
        {items.map((item) => (
          <Item
            data-grid-groupkey={item.groupKey}
            key={item.key}
            src={item.src}
            recipeId={item.recipeId}
          />
        ))}
      </MasonryInfiniteGrid>
    </>
  );
}
