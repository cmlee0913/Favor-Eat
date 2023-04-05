import { useState, useEffect } from "react";
import * as style from "@/present/component/DiaryCompo/pageStyle";
import DiaryList from "@/present/component/DiaryCompo/DiaryList";
import DiaryButton from "@/present/component/DiaryCompo/DiaryArrowButton";
import MyHeader from "@/present/component/DiaryCompo/MyHeader";
import { useAtom } from "jotai";
import { getUserDataByToken, userTokenSave } from "@/store/userStore";
import { getDiaryList } from "@/action/apis/diary";

export default function Diary() {
  const [token] = useAtom(userTokenSave);
  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  const requestDiaryList = async (token: string, date: Date) => {
    const { isSuccess, result } = await getDiaryList(token);
    if (isSuccess) {
      setData(result);
    }
  };

  useEffect(() => {
    if (token.accessToken) {
      requestDiaryList(token.accessToken, curDate);
    }
  }, [token, curDate]);

  const increaseMonth = () => {
    setCurDate(
      (prevDate) => new Date(prevDate.setMonth(prevDate.getMonth() + 1))
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      (prevDate) => new Date(prevDate.setMonth(prevDate.getMonth() - 1))
    );
  };

  return (
    <style.DiaryContainer>
      <MyHeader
        headText={headText}
        leftChild={<DiaryButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<DiaryButton text={">"} onClick={increaseMonth} />}
      />

      <DiaryList diaryList={data} />
    </style.DiaryContainer>
  );
}
