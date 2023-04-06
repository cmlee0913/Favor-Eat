import * as style from "./DiaryCompo.style";

const MyHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <style.DiaryHeader>
      <div>{leftChild}</div>
      <style.DiaryHeaderTitle>{headText}</style.DiaryHeaderTitle>
      <div>{rightChild}</div>
    </style.DiaryHeader>
  );
};

export default MyHeader;
