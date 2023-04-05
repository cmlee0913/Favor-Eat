import styled from "styled-components";
import { theme } from "@/constant/theme";

import Image from "next/image";
import DiaryImage from "@/assets/image/Diary/DiaryDetailPage.png";

// Common Diary Style
export const DiaryHeader = styled.div`
  padding: 20px 20vw;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  border-bottom: 1px solid #e2e2e2;

  margin-bottom: 15px;
`;

export const DiaryHeaderTitle = styled.div`
  font-family: "Pretendard-Bold";
  color: ${theme.colors.main.purple.dark_4};
  font-size: 1.6rem;
`;

export const DiaryButton = styled.div`
  width: 8rem;
  height: 2rem;

  background-color: ${theme.colors.main.purple.dark_4};
  color: ${theme.colors.mono.light_1};

  padding: 0.5rem 1rem;
  border-radius: 2rem;

  font-family: "Pretendard-Bold";
  font-size: 1.2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// Diary.tsx
export const DiaryArrowButton = styled.div`
  cursor: pointer;

  padding: 0.5vh 1.5vw 0.5vh 1.5vw;
  border-radius: 12px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${theme.colors.mono.dark_0};
  color: white;

  font-size: 3rem;
  font-family: "Pretendard-medium";
  & > div {
    position: relative;
    top: -0.2rem;
  }
`;

export const DiaryLongButton = styled.div`
  cursor: pointer;

  width: 50vw;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  color: white;
  background-color: ${theme.colors.main.purple.dark_1};

  font-family: "Pretendard-medium";
  font-size: 1.1rem;
`;

export const ControlMenuContainer = styled.div`
  display: flex;
  gap: 5vw;
  align-items: center;
  height: 35px;

  select {
    width: 20vw;
    border-radius: 5px;
    height: 35px;
  }
`;

export const DiaryItemContainer = styled.div`
  padding: 1rem 0 1rem 0;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-between;
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 4fr 1fr;
`;

export const DiaryImageWrapper = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;

  img {
    width: 180px;
    height: auto;
  }
`;

export const DiaryContentWrapper = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%; /* 필요에 따라 조정 */

  & > div {
    margin: 5px;
  }

  font-size: 1.2rem;
  font-family: "Pretendard-Bold";
`;

export const DiaryButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// DiaryDetail.tsx([pid].tsx)

export const DiaryDetailContainer = styled.div`
  background-image: url(${DiaryImage.src});

  background-size: 100% 100%;
  background-position: center;

  margin-left: 12vw;
  width: 76vw;
  height: 100vh;

  overflow: hidden; // 스크롤 없애기
`;

export const DiaryDetailNote = styled.div`
  position: absolute;

  top: 20%;
  left: 22%;
  width: 56vw;
  height: 65vh;
`;

export const DiaryDetailStyle = styled.div`
  display: flex;
  align-items: center; /* 세로 가운데 정렬 */
  color: ${theme.colors.main.blue};
  font-family: "Pretendard Bold";
  font-size: 2.4rem;

  margin-bottom: 1vh;

  & > div {
    flex: 1; /* div 요소가 남아 있는 공간 모두 차지하도록 설정 */
    display: flex;
    justify-content: center; /* div 내부 컨텐츠 중앙 정렬 */
  }

  img {
    width: 2rem;
    height: 2rem;
    margin-left: 1rem; /* 이미지와 텍스트 사이 간격 */
  }
`;

export const DiaryDetailGrid = styled.div`
  height: 55vh;

  display: grid;
  grid-template-columns: 4fr 5fr;
`;

export const DiaryDetailLeftGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 4fr 1fr 4fr;

  font-size: 1.2rem;
  font-family: "Pretandard SemiBold";
  color: ${theme.colors.main.purple.dark_1};
`;

export const DiaryDetailRightGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 7fr;

  div {
    :nth-child(1) {
      font-size: 1.2rem;
      font-family: "Pretandard SemiBold";
      color: ${theme.colors.main.purple.dark_3};
    }

    :nth-child(2) {
      font-size: 1.2rem;
      font-family: "Pretandard SemiBold";
      color: ${theme.colors.main.purple.dark_1};
    }

    :nth-child(3) {
      font-size: 1rem;
      font-family: "Pretandard SemiBold";
      color: ${theme.colors.mono.dark_3};

      border-radius: 10px;
      padding: 20px;
      background-color: ${theme.colors.main.purple.light_1};
    }
  }
`;

export const DiaryEditContainer = styled.div`
  margin-top: 5.5rem;
  margin-left: 3vw;
  margin-right: 3vw;

  div.title {
    font-family: "Pretand Medium";
    font-size: 0.8rem;
    margin-bottom: 2vh;
  }
`;

export const DiaryEditTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DiaryEditTitleInput = styled.div`
  input {
    border: none;
    width: 500px;
    font-size: 1.2rem;
  }

  margin-bottom: 3vh;
`;

export const DiaryImageContainer = styled.div`
  margin-bottom: 3vh;
`;

export const DiaryEmotionContainer = styled.div`
  margin-bottom: 3vh;
`;

export const EmotionImageWrapper = styled.div<{ bgColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2vw;

  padding: 15px;
  background-color: ${(props) => props.bgColor};
  border-radius: 15px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 15px;
  }

  div {
    text-align: center;
  }
`;

export const DiaryContentContainer = styled.div`
  textArea {
    border: none;
    border-radius: 15px;
    background-color: ${theme.colors.main.purple.light_1};

    padding: 20px;
    min-width: 90vw;
    min-height: 20vh;

    font-family: "Pretendard Bold";
    color: ${theme.colors.main.purple.dark_1};

    margin-bottom: 5vh;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;
