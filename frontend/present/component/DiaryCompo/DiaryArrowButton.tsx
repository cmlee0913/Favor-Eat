import * as style from "./DiaryCompo.style";

const DiaryButton = ({ text, onClick }) => {
  // 버튼의 타입이 지정된게 아니면 디폴트로 값 전환시키기
  return (
    <style.DiaryArrowButton>
      <div onClick={onClick}>{text}</div>
    </style.DiaryArrowButton>
  );
};

export default DiaryButton;
