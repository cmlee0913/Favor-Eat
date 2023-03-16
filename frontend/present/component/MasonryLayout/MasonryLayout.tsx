import { useState } from "react";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import AutoHeightImage from "./AutoHeightImage";
import useMediaQuery from "@/action/hooks/useMediaQuery";

import { theme } from "@/action/theme";
import * as styles from "./MarsonryLayout.styles";

function getItems(nextGroupKey: number, count: number) {
  const nextItems = [];
  const nextKey = nextGroupKey * count;

  for (let i = 0; i < count; ++i) {
    nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
  }
  return nextItems;
}

const Item = ({ num }: any) => (
  <AutoHeightImage
    src={`https://naver.github.io/egjs-infinitegrid/assets/image/${
      (num % 33) + 1
    }.jpg`}
    alt="egjs"
  />
);

export default function App() {
  const [items, setItems] = useState(() => getItems(0, 10));
  const isTablet = useMediaQuery("(min-width: 769px)");
  const isPhone = useMediaQuery("(min-width: 426px)");

  let columnNumber = 6;
  // 삼항연산자 사용
  `${
    isTablet && isPhone
      ? (columnNumber = 6)
      : `${!isTablet && isPhone ? (columnNumber = 4) : (columnNumber = 3)}`
  }`;

  return (
    <div>
      <MasonryInfiniteGrid
        // media query에 따라 가변적으로 변해야하는 옵션
        column={columnNumber}
        // 항상 고정되는 옵션들
        gap={10} // items간 간격
        resizeDebounce={20} // 화면 크기가 바뀜에 따라 resize할 때 반응하는 시간 50 = 0.5s
        align={"center"} // items들의 정렬 기준
        onRequestAppend={(e) => {
          const nextGroupKey = (+e.groupKey! || 0) + 1;

          setItems([...items, ...getItems(nextGroupKey, 10)]);
        }}
      >
        {items.map((item) => (
          <styles.Item>
            <Item
              data-grid-groupkey={item.groupKey}
              key={item.key}
              num={item.key}
            />{" "}
          </styles.Item>
        ))}
      </MasonryInfiniteGrid>
    </div>
  );
}
