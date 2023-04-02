import React from "react";
import * as style from "./Info.style";

export default function InfoMember() {
  return (
    <style.InfoMemberContainer>
      <div className="title">팀원 소개</div>
      <style.InfoMember>
        <div className="job">백엔드</div>
        <div className="job">프론트엔드</div>
        <div className="job">디자인</div>

        <div className="name">김호균</div>
        <div className="name">박재희</div>
        <div className="name">김희진</div>

        <div className="name">이창민</div>
        <div className="name">오민준</div>
        <div className="name"></div>

        <div className="name">장예은</div>
        <div className="name">이효진</div>
      </style.InfoMember>
    </style.InfoMemberContainer>
  );
}
