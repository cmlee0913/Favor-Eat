import React, { useState } from "react";
import { useRouter } from "next/router";
import * as style from "./DiaryCompo.style";

import DiaryItem from "./DiaryItem";
import DiaryLongButton from "./DiaryLongButton";
import DiaryControlMenu from "./DiaryControlMenu";

const sortOptionList = [
  { value: "latest", name: "최신 순" },
  { value: "oldest", name: "오래된 순" },
];

const filterOptionList = [
  { value: "all", name: "전부 다" },
  { value: "good", name: "좋은 감정만" },
  { value: "bad", name: "안 좋은 감정만" },
];

const DiaryList = ({ diaryList }) => {
  const router = useRouter();
  // 순서 정렬필터 최초 값
  const [sortType, setSortType] = useState("latest");
  // 감정 정렬필터 최초 값
  const [filter, setFilter] = useState("all");

  // 순서 정렬 value에 따른 정렬값 반환 함수
  const getProcessedDiaryList = () => {
    // diaryList의 원본을 건드리지않기 위해 깊은복사
    const copyList = JSON.parse(JSON.stringify(diaryList));

    // 감정 정렬 콜백함수
    const filterCallBack = (item) => {
      if (filter === "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };

    // 날짜 정렬 콜백함수
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(a.registedDate) - parseInt(b.registedDate);
      } else {
        return parseInt(b.registedDate) - parseInt(a.registedDate);
      }
    };

    // 감정 정렬함수
    const filteredList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));
    // 날짜 정렬함수(감정점수를 필터시킨것을 정렬)
    const sortedList = filteredList.sort(compare);
    return sortedList;
  };

  const newDiary = () => {
   router.push("/diary/new");
  };
  
  return (
    <div>
      <style.ControlMenuContainer>
        <DiaryControlMenu
          value={sortType}
          onChange={setSortType}
          optionList={sortOptionList}
        />
        <DiaryControlMenu
          value={filter}
          onChange={setFilter}
          optionList={filterOptionList}
        />
        <DiaryLongButton text={"새 일기 쓰기"} onClick={newDiary} />
      </style.ControlMenuContainer>
      {getProcessedDiaryList().map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
};

export default DiaryList;
