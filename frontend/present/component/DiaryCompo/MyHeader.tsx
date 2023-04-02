import * as style from "./DiaryCompo.style";

const MyHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <style.DiaryHeader>
      <div className="head_btn_left">{leftChild}</div>
      <div className="head_text">{headText}</div>
      <div className="head_btn_right">{rightChild}</div>
    </style.DiaryHeader>
  );
};

export default MyHeader;
