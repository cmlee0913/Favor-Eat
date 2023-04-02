import { useState, useEffect } from "react";

import * as style from "@/present/component/DiaryCompo/pageStyle";
import DiaryList from "@/present/component/DiaryCompo/DiaryList";
import MyButton from "@/present/component/DiaryCompo/MyButton";
import MyHeader from "@/present/component/DiaryCompo/MyHeader";

export default function Diary() {
  // 사용하는 더미 데이터
  const diaryList = [
    {
      id: 1,
      date: 1680220800001,
      emotion: 1,
      content: "가상의 일기를 씁니다",
    },
    {
      id: 2,
      date: 1680220800002,
      emotion: 2,
      content: "가상의 일기를 씁니다2",
    },
    {
      id: 3,
      date: 1680220800003,
      emotion: 3,
      content: "가상의 일기를 씁니다3",
    },
    {
      id: 4,
      date: 1680220800004,
      emotion: 4,
      content: "가상의 일기를 씁니다4",
    },
    {
      id: 5,
      date: 1681220830305,
      emotion: 5,
      content: "가상의 일기를 씁니다5",
    },
  ];

  const [data, setData] = useState();
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  useEffect(() => {
    const firstDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      1
    ).getTime();

    const lastDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth() + 1,
      0,
      23,
      56,
      59
    ).getTime();

    setData(
      diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
    );
  }, [curDate]);

  return (
    <style.DiaryContainer>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      />

      <DiaryList diaryList={data} />
    </style.DiaryContainer>
  );
}
