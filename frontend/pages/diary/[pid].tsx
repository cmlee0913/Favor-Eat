import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as style from "@/present/component/DiaryCompo/DiaryCompo.style";
import Image from "next/image";

import EditDiaryButton from "@/assets/image/Diary/EditDiaryButton.png";
import { useAtom } from "jotai";
import { userTokenSave } from "@/store/userStore";
import { getDiaryDetail } from "@/action/apis/diary";

import Emotion1 from "@/assets/image/Emotion/emotion1.png";
import Emotion2 from "@/assets/image/Emotion/emotion2.png";
import Emotion3 from "@/assets/image/Emotion/emotion3.png";
import Emotion4 from "@/assets/image/Emotion/emotion4.png";
import Emotion5 from "@/assets/image/Emotion/emotion5.png";

export default function Diary() {
  const [token] = useAtom(userTokenSave);
  const router = useRouter();
  const { pid } = router.query;
  const [data, setData] = useState(null);

  const strDate = new Date(parseInt(data?.registedDate)).toLocaleDateString();
  const emotionImages = [0, Emotion1, Emotion2, Emotion3, Emotion4, Emotion5];

  const goEdit = () => {
    router.push(`/diary/edit/${data.id}`);
  };

  const requestDiaryDetail = async (token: string, pid: string) => {
    const { isSuccess, result } = await getDiaryDetail(token, pid);
    if (isSuccess) {
      console.log(result);
      setData(result); // result 값을 data 상태로 저장합니다.
    }
  };

  useEffect(() => {
    if (token.accessToken && pid) {
      requestDiaryDetail(token.accessToken, String(pid));
    }
  }, [token, pid]);

  const emotionImagePath = data?.emotion ? emotionImages[data.emotion] : "";

  return (
    <style.DiaryDetailContainer>
      <style.DiaryDetailNote>
        <style.DiaryDetailStyle>
          <div>{strDate}의 기록</div>
          <Image src={EditDiaryButton} alt="EditDiaryButton" onClick={goEdit} />
        </style.DiaryDetailStyle>

        <style.DiaryDetailGrid>
          <style.DiaryDetailLeftGrid>
            <div>오늘의 감정</div>
            <div>
              {/* {data?.emotion && (
                <Image
                  src={emotionImagePath}
                  alt="emotion"
                  width={150}
                  height={150}
                />
              )} */}
            </div>
            <div>오늘의 사진첩</div>
            <div>{data?.responsePhotoAttributes}</div>
          </style.DiaryDetailLeftGrid>
          <style.DiaryDetailRightGrid>
            <div>{data?.title}</div>
            <div>오늘의 일기</div>
            <div>{data?.content}</div>
          </style.DiaryDetailRightGrid>
        </style.DiaryDetailGrid>
      </style.DiaryDetailNote>
    </style.DiaryDetailContainer>
  );
}
