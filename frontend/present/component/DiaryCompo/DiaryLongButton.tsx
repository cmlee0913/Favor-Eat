import * as style from "./DiaryCompo.style";

const DiaryLongButton = ({ text, onClick }) => {
  return (
    <style.DiaryLongButton onClick={onClick}>
      <div>{text}</div>
    </style.DiaryLongButton>
  );
};

export default DiaryLongButton;
