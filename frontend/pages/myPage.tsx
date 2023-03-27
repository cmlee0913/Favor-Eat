import GridLayout from "@/present/layout/GridLayout/GridLayout";
import { useState, useEffect } from "react";
import * as style from "@/present/layout/MyPage/pageStyle";
import MyPageUser from "@/present/layout/MyPage/MyPageUser";
import MyPageAccordian from "@/present/layout/MyPage/MyPageAccordian";

import { MyPageTypes } from "@/types/MyPage/dummy";
import TestCompo from "@/present/component/TestCompo";

export default function MyPage() {
  const [selectIdx, setSelectedIdx] = useState(0);
  const [myPageArr, setMyPageArr] = useState<Array<MyPageTypes>>([
    {
      category: "즐겨찾기한 레시피",
      content: <TestCompo />,
      isOpen: true,
    },
    {
      category: "못 먹는 재료",
      content: <TestCompo />,
      isOpen: false,
    },
  ]);

  useEffect(() => {
    const tmp = myPageArr.map((elem, idx) => {
      if (idx === selectIdx) {
        elem.isOpen = true;
      } else {
        elem.isOpen = false;
      }
      return elem;
    });
    setMyPageArr([...tmp]);
  }, [selectIdx]);

  return (
    <style.Container>
      <GridLayout>
        <MyPageUser />
        <MyPageAccordian
          myPageArr={myPageArr}
          selectIdx={selectIdx}
          setSelectedIdx={setSelectedIdx}
        />
      </GridLayout>
    </style.Container>
  );
}
