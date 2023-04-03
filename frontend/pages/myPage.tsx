import { useState, useEffect } from "react";

import * as style from "@/present/layout/MyPage/pageStyle";
import { useAtom } from "jotai";
import { userTokenSave } from "@/store/userStore";

import GridReverseLayout from "@/present/layout/GridLayout/GridReverseLayout";
import MyPageUser from "@/present/layout/MyPage/MyPageUser";
import MyPageAccordian from "@/present/layout/MyPage/MyPageAccordian";
import MyPageButton from "@/present/layout/MyPage/MyPageButton";

import { MyPageTypes } from "@/types/MyPage/dummy";
import { useRouter } from "next/router";

import Ingredient from "@/present/layout/MyPage/Ingredient";
import Thumbnail from "@/present/layout/MyPage/Thumbnail";

export default function MyPage() {
  const router = useRouter();
  const [token] = useAtom(userTokenSave);

  const goFavorite = () => router.push("/favorite");

  const [selectIdx, setSelectedIdx] = useState(0);
  const [myPageArr, setMyPageArr] = useState<Array<MyPageTypes>>([
    {
      category: (
        <style.CategoryContainer>
          <div>즐겨찾기한 레시피</div>
          <MyPageButton context="더보기" handler={goFavorite} />
        </style.CategoryContainer>
      ),
      content: <Thumbnail />,
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
    <GridReverseLayout>
      <MyPageUser />
      <MyPageAccordian
        myPageArr={myPageArr}
        selectIdx={selectIdx}
        setSelectedIdx={setSelectedIdx}
      />
    </GridReverseLayout>
  );
}
