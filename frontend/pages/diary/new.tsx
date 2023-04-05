import { useState, useEffect } from "react";
import MyButton from "@/present/component/DiaryCompo/DiaryArrowButton";
import MyHeader from "@/present/component/DiaryCompo/MyHeader";
import { useRouter } from "next/router";
import { postDiary } from "@/action/apis/diary";
import { useAtom } from "jotai";
import { getUserDataByToken, userTokenSave } from "@/store/userStore";

export default function NewDiary() {
  const [token] = useAtom(userTokenSave);
  const router = useRouter();

  const [diary, setDiary] = useState({
    title: "",
    content: "",
    emotion: "",
    responsePhotoAttributes: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDiary((prev) => ({ ...prev, [name]: value }));
    console.log(diary);
  };

  const postClick = async () => {
    postDiary(token.accessToken, diary);
  };

  return (
    <div className="DiaryEditor" style={{ marginTop: "5.5rem" }}>
      <MyHeader
        headText={"새 일기쓰기"}
        leftChild={
          <MyButton text={"< 뒤로가기"} onClick={() => router.back()} />
        }
        rightChild={
          <MyButton text={"삭제하기"} onClick={console.log("수정 필요")} />
        }
      />
      <div>
        <section>
          <h4>제목</h4>
          <div className="input_box text_wrapper">
            <textarea
              placeholder="오늘은 어땠나요"
              name="title"
              value={diary.title}
              onChange={handleInputChange}
            />
          </div>
        </section>

        <section>
          <h4>오늘은 언제인가요?</h4>
        </section>
        {/* <section>
          <h4>오늘의 음식 사진</h4>
          <div className="input_box text_wrapper">
            <input
              type="file"
              name="foodPhoto"
              value={diary.foodPhoto}
              onChange={handleInputChange}
            />
          </div>
        </section> */}
        <section>
          <h4>오늘의 감정</h4>
          <div className="input_box">
            <input value={diary.emotion} name="emotion" onChange={handleInputChange}></input>
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className="input_box text_wrapper">
            <textarea
              placeholder="오늘은 어땠나요"
              name="content"
              value={diary.content}
              onChange={handleInputChange}
            />
          </div>
        </section>
        <section>
          <div className="control_box">
            <MyButton text={"< 뒤로가기"} onClick={() => router.back()} />
            <MyButton text={"작성완료"} onClick={postClick} />
          </div>
        </section>
      </div>
    </div>
  );
}
