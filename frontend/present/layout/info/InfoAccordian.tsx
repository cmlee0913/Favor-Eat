import React from "react";

import AccordianCompo from "@/present/component/AccordianCompo/AccordianCompo";
import { InfoContentProps } from "@/types/Info/dummy";

export default function InfoAccordian({
  infoArr,
  selectIdx,
  setSelectedIdx,
}: InfoContentProps) {
  const accordianHandler = (idx: number) => {
    setSelectedIdx(idx);
  };

  const accordians = infoArr.map((elem, idx) => {
    return (
      <AccordianCompo
        key={idx}
        elem={elem}
        idx={idx}
        accordianHandler={() => accordianHandler(idx)}
      />
    );
  });

  return <div id="accordian">{accordians}</div>;
}
