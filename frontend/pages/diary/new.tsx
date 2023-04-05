import { useState, useEffect } from "react";
import MyButton from "@/present/component/DiaryCompo/DiaryArrowButton";
import MyHeader from "@/present/component/DiaryCompo/MyHeader";
import { useRouter } from "next/router";
import { postDiary } from "@/action/apis/diary";
import { useAtom } from "jotai";
import { getUserDataByToken, userTokenSave } from "@/store/userStore";
import * as style from "@/present/component/DiaryCompo/DiaryCompo.style";
import Image from "next/image";
import Emotion1 from "@/assets/image/Diary/CircleEmotion/emotion1.png";
import Emotion2 from "@/assets/image/Diary/CircleEmotion/emotion2.png";
import Emotion3 from "@/assets/image/Diary/CircleEmotion/emotion3.png";
import Emotion4 from "@/assets/image/Diary/CircleEmotion/emotion4.png";
import Emotion5 from "@/assets/image/Diary/CircleEmotion/emotion5.png";
import Button from "@/present/common/Button/Button";
import { theme } from "@/constant/theme";

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

  const backToDiary = async () => {
    await router.back();
  };

  const postClick = async () => {
    postDiary(token.accessToken, diary);
    await router.push("/diary");
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
        headText={"새 일기쓰기"}
        leftChild={<div></div>}
        rightChild={<div></div>}
      ></MyHeader>

      <style.DiaryEditTitle>
        <div className="title">일기 제목</div>
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

      <style.ButtonsContainer>
        <Button context="뒤로가기" handler={backToDiary}></Button>
        <Button context="작성하기" handler={postClick}></Button>
      </style.ButtonsContainer>
    </style.DiaryEditContainer>
  );
}
