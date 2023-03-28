import { useState, useEffect } from "react";
import MyPageUser from "@/present/layout/MyPage/MyPageUser";
import MyPageAccordian from "@/present/layout/MyPage/MyPageAccordian";
import MyPageGridLayout from "@/present/layout/MyPage/MyPageGridLayout";

import { MyPageTypes } from "@/types/MyPage/dummy";

import Ingredient from "@/present/layout/MyPage/Ingredient";

export default function MyPage() {
  const [selectIdx, setSelectedIdx] = useState(0);
  const [myPageArr, setMyPageArr] = useState<Array<MyPageTypes>>([
    {
      category: "즐겨찾기한 레시피",
      content: <Ingredient />,
      isOpen: true,
    },
    {
      category: "못 먹는 재료",
      content: <Ingredient />,
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
    <MyPageGridLayout>
      <MyPageUser />
      <MyPageAccordian
        myPageArr={myPageArr}
        selectIdx={selectIdx}
        setSelectedIdx={setSelectedIdx}
      />
    </MyPageGridLayout>
  );
}
