import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as style from "@/present/component/DiaryCompo/DiaryCompo.style";
import DeleteDiaryButton from "@/assets/image/Diary/DeleteDiaryButton.png";
import Image from "next/image";

import Button from "@/present/common/Button/Button";
import MyButton from "@/present/component/DiaryCompo/DiaryArrowButton";
import MyHeader from "@/present/component/DiaryCompo/MyHeader";
import { useAtom } from "jotai";
import { getUserDataByToken, userTokenSave } from "@/store/userStore";
import { putDiary, deleteDiary, getDiaryDetail } from "@/action/apis/diary";

import Emotion1 from "@/assets/image/Diary/CircleEmotion/emotion1.png";
import Emotion2 from "@/assets/image/Diary/CircleEmotion/emotion2.png";
import Emotion3 from "@/assets/image/Diary/CircleEmotion/emotion3.png";
import Emotion4 from "@/assets/image/Diary/CircleEmotion/emotion4.png";
import Emotion5 from "@/assets/image/Diary/CircleEmotion/emotion5.png";

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

  // const setEmotionValue = (value) => {
  //   setDiary((prev) => ({
  //     ...prev,
  //     emotion: value,
  //   }));
  // };

  // 일기 정보를 가져옵니다.
  const requestDiaryDetail = async (token: string, pid: string) => {
    const { isSuccess, result } = await getDiaryDetail(token, pid);
    if (isSuccess) {
      setDiary(result);
    }
  };

  useEffect(() => {
    if (token.accessToken && pid) {
      requestDiaryDetail(token.accessToken, String(pid));
    }
  }, [token, pid]);

  const putClick = async () => {
    putDiary(token.accessToken, diary, pid);
  };

  // 일기를 삭제합니다.
  const deleteClick = async () => {
    deleteDiary(token.accessToken, pid);
    router.push("/diary");
  };

  return (
    <style.DiaryEditContainer>
      <MyHeader
        headText={"일기 수정하기"}
        leftChild={<div></div>}
        rightChild={<div></div>}
      ></MyHeader>

      <style.DiaryEditTitle>
        <div className="title">일기 제목</div>

        <Image
          width={32}
          height={32}
          src={DeleteDiaryButton}
          alt="DeleteDiaryButton"
          onClick={deleteClick}
        />
      </style.DiaryEditTitle>
      <style.DiaryEditTitleInput>
        <input
          placeholder="제목을 써주세요."
          name="title"
          value={diary.title}
          onChange={(e) =>
            setDiary((prev) => ({
              ...prev,
              title: e.target.value,
            }))
          }
        />
      </style.DiaryEditTitleInput>
      <style.DiaryImageContainer>
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
      </style.DiaryImageContainer>

      <style.DiaryEmotionContainer>
        <div className="title">오늘의 감정</div>
        <div style={{ display: "flex" }}>
          <style.EmotionImageWrapper>
            <Image
              src={Emotion1}
              alt="Emotion1"
              onClick={() =>
                setDiary((prev) => ({
                  ...prev,
                  emotion: "1",
                }))
              }
            />
            <div>매우 긍정적</div>
          </style.EmotionImageWrapper>

          <style.EmotionImageWrapper>
            <Image
              src={Emotion2}
              alt="Emotion2"
              onClick={() =>
                setDiary((prev) => ({
                  ...prev,
                  emotion: "2",
                }))
              }
            />
            <div>긍정적</div>
          </style.EmotionImageWrapper>

          <style.EmotionImageWrapper>
            <Image
              src={Emotion3}
              alt="Emotion3"
              onClick={() =>
                setDiary((prev) => ({
                  ...prev,
                  emotion: "3",
                }))
              }
            />
            <div>보통</div>
          </style.EmotionImageWrapper>

          <style.EmotionImageWrapper>
            <Image
              src={Emotion4}
              alt="Emotion4"
              onClick={() =>
                setDiary((prev) => ({
                  ...prev,
                  emotion: "4",
                }))
              }
            />
            <div>부정적</div>
          </style.EmotionImageWrapper>

          <style.EmotionImageWrapper>
            <Image
              src={Emotion5}
              alt="Emotion5"
              onClick={() =>
                setDiary((prev) => ({
                  ...prev,
                  emotion: "5",
                }))
              }
            />
            <div>매우 부정적</div>
          </style.EmotionImageWrapper>
        </div>
      </style.DiaryEmotionContainer>

      <style.DiaryContentContainer>
        <div className="title">오늘의 일기</div>
        <textarea
          placeholder="오늘은 어땠나요..?"
          // name="content"
          value={diary.content}
          onChange={(e) =>
            setDiary((prev) => ({
              ...prev,
              content: e.target.value,
            }))
          }
        />
      </style.DiaryContentContainer>
      <Button context="수정 완료" handler={putClick}></Button>
    </style.DiaryEditContainer>
  );
}
