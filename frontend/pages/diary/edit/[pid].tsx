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
import { theme } from "@/constant/theme";

import Emotion1 from "@/assets/image/Diary/CircleEmotion/emotion1.png";
import Emotion2 from "@/assets/image/Diary/CircleEmotion/emotion2.png";
import Emotion3 from "@/assets/image/Diary/CircleEmotion/emotion3.png";
import Emotion4 from "@/assets/image/Diary/CircleEmotion/emotion4.png";
import Emotion5 from "@/assets/image/Diary/CircleEmotion/emotion5.png";

import { theme } from "@/constant/theme";

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
      setDiary(result);
    }
  };
  const emotions = [
    {
      src: Emotion1,
      alt: "매우 긍정적",
      emotion: "1",
      color: theme.colors.character.sweet,
    },
    {
      src: Emotion2,
      alt: "긍정적",
      emotion: "2",
      color: theme.colors.character.etc,
    },
    {
      src: Emotion3,
      alt: "보통",
      emotion: "3",
      color: theme.colors.character.oily,
    },
    {
      src: Emotion4,
      alt: "부정적",
      emotion: "4",
      color: theme.colors.character.salty,
    },
    {
      src: Emotion5,
      alt: "매우 부정적",
      emotion: "5",
      color: theme.colors.character.spicy,
    },
  ];

  const emotionHandler = (elem) =>
    setDiary((prev) => ({
      ...prev,
      emotion: elem.emotion,
    }));

  const emotionArr = emotions.map((elem, idx) => {
    const color = elem.emotion === diary.emotion ? elem.color : "#cccccc";
    return (
      <style.EmotionImageWrapper key={idx} bgColor={color}>
        <Image
          src={elem.src}
          alt={elem.alt}
          onClick={() => {
            emotionHandler(elem);
          }}
        />
        <div>{elem.alt}</div>
      </style.EmotionImageWrapper>
    );
  });

  useEffect(() => {
    if (token.accessToken && pid) {
      requestDiaryDetail(token.accessToken, String(pid));
    }
  }, [token, pid]);

  const putClick = async () => {
    putDiary(token.accessToken, diary, pid);
    router.push(`/diary/`);
  };

  // 일기를 삭제합니다.
  const deleteClick = async () => {
    deleteDiary(token.accessToken, pid);
    router.push("/diary");
  };

  const emotions = [
    {
      src: Emotion1,
      alt: "매우 긍정적",
      emotion: "1",
      color: theme.colors.character.sweet,
    },
    {
      src: Emotion2,
      alt: "긍정적",
      emotion: "2",
      color: theme.colors.character.etc,
    },
    {
      src: Emotion3,
      alt: "보통",
      emotion: "3",
      color: theme.colors.character.oily,
    },
    {
      src: Emotion4,
      alt: "부정적",
      emotion: "4",
      color: theme.colors.character.salty,
    },
    {
      src: Emotion5,
      alt: "매우 부정적",
      emotion: "5",
      color: theme.colors.character.spicy,
    },
  ];

  const emotionHandler = (elem) =>
    setDiary((prev) => ({
      ...prev,
      emotion: elem.emotion,
    }));

  const emotionArr = emotions.map((elem, idx) => {
    const color = elem.emotion === diary.emotion ? elem.color : "#cccccc";
    return (
      <style.EmotionImageWrapper key={idx} bgColor={color}>
        <Image
          src={elem.src}
          alt={elem.alt}
          onClick={() => {
            emotionHandler(elem);
          }}
        />
        <div>{elem.alt}</div>
      </style.EmotionImageWrapper>
    );
  });

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
        <div style={{ display: "flex" }}>{emotionArr}</div>
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
      <div>
        <Button context="수정 완료" handler={putClick}></Button>
      </div>
    </style.DiaryEditContainer>
  );
}
