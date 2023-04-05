import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as style from "@/present/component/DiaryCompo/DiaryCompo.style";
import DeleteDiaryButton from "@/assets/image/Diary/DeleteDiaryButton.png";
import Image from "next/image";

import MyButton from "@/present/component/DiaryCompo/DiaryArrowButton";
import MyHeader from "@/present/component/DiaryCompo/MyHeader";
import { useAtom } from "jotai";
import { getUserDataByToken, userTokenSave } from "@/store/userStore";
import { putDiary, deleteDiary, getDiaryDetail } from "@/action/apis/diary";

export default function Diary() {
  const [token] = useAtom(userTokenSave);
  const router = useRouter();
  const { pid } = router.query;

  const [diary, setDiary] = useState({
    title: "",
    content: "",
    emotion: "",
    responsePhotoAttributes: [],
  });

  // 일기 정보를 가져옵니다.
  const requestDiaryDetail = async (token: string, pid: string) => {
    const { isSuccess, result } = await getDiaryDetail(token, pid);
    if (isSuccess) {
      setDiary(result); // result 값을 data 상태로 저장합니다.
    }
  };

  useEffect(() => {
    if (token.accessToken && pid) {
      requestDiaryDetail(token.accessToken, String(pid));
    }
  }, [token, pid]);

  // const putClick = async () => {
  //   putDiary(token.accessToken, pid);
  // };

  // 일기를 삭제합니다.
  const deleteClick = async () => {
    deleteDiary(token.accessToken, pid);
  };

  return (
    <style.DiaryEditContainer>
      <MyHeader
        headText={"일기 수정하기"}
        leftChild={<div></div>}
        rightChild={<div></div>}
      ></MyHeader>

      <style.DiaryEditTitle>
        <div className="title">제목</div>

        <Image
          width={32}
          height={32}
          src={DeleteDiaryButton}
          alt="DeleteDiaryButton"
          onClick={deleteClick}
        />
      </style.DiaryEditTitle>
      <div>
        <input
          style={{ border: "none" }}
          placeholder="오늘은 어땠나요"
          name="title"
          value={diary.title}
          onChange={(e) =>
            setDiary((prev) => ({
              ...prev,
              title: e.target.value,
            }))
          }
        />
      </div>
      <section>
        <div className="title">오늘의 사진첩</div>
        <div>
          <input
            type="file"
            name="foodPhoto"
            value={diary.responsePhotoAttributes}
            onChange={(e) =>
              setDiary((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
          />
        </div>
      </section>

      <section>
        <div className="title">오늘의 감정</div>
        <input
          value={diary.emotion}
          onChange={(e) =>
            setDiary((prev) => ({
              ...prev,
              emotion: e.target.value,
            }))
          }
        ></input>
      </section>

      <section>
        <div className="title">오늘의 일기</div>
        <textarea
          placeholder="오늘은 어땠나요"
          name="content"
          value={diary.content}
          onChange={(e) =>
            setDiary((prev) => ({
              ...prev,
              content: e.target.value,
            }))
          }
        />
      </section>
    </style.DiaryEditContainer>
  );
}
