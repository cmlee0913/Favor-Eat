import React from "react";

import AccordianPurpleCompo from "@/present/component/AccordianPurpleCompo/AccordianPurpleCompo";
import { InfoContentProps } from "@/types/Info/dummy";

import RightTitleBox from "@/present/common/TitleBox/RightTitleBox/RightTitleBox";

export default function AlarmAccordian({
  alarmArr,
  selectIdx,
  setSelectedIdx,
}: InfoContentProps) {
  const accordianHandler = (idx: number) => {
    setSelectedIdx(idx);
  };

  const accordians = alarmArr.map((elem, idx) => {
    return (
      <AccordianPurpleCompo
        key={idx}
        elem={elem}
        idx={idx}
        accordianHandler={() => accordianHandler(idx)}
      />
    );
  });

  return (
    <div>
      <RightTitleBox title="알림 설정" />
      {accordians}
    </div>
  );
}
