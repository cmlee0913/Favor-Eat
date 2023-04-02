import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import MyButton from "@/present/component/DiaryCompo/MyButton";
import MyHeader from "@/present/component/DiaryCompo/MyHeader";

// 가상의 일기 데이터 가져오기
import diaryList from "./index";

const Diary = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [data, setData] = useState(null);

  // 일기 데이터 가져오기
  useEffect(() => {
    const diaryData = Array.isArray(diaryList)
      ? diaryList.find((diary) => diary.id === pid)
      : null;
    setData(diaryData);
    console.log(diaryData);
  }, [pid]);

  return (
    <div className="DiaryPage">
      <MyHeader
        headText={"날짜가 들어가야한다."}
        leftChild={
          <MyButton text={"< 뒤로가기"} onClick={() => router.back()} />
        }
        rightChild={
          <MyButton
            text={"수정하기"}
            onClick={() => router.push(`/diary/edit/${pid}`)}
          />
        }
      />
      <article>
        <section>
          <h4>오늘의 감정</h4>
          <div>{pid}</div>
          <div
            className={[
              "diary_img_wrapper",
              `diary_img_wrapper_${data?.emotion}`,
            ].join(" ")}
          ></div>
        </section>  
        <section>
          <h4>오늘의 일기</h4>
          <div className="diary_content_wrapper">
            <p>{data?.content}</p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Diary;
