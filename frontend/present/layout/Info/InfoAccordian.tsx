import React from "react";

import AccordianCompo from "@/present/component/AccordianCompo/AccordianCompo";
import { InfoContentProps } from "@/types/Info/dummy";
import * as style from "./Info.style";

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

  return (
    <div>
      <style.Accordians>
        <div className="title">출처</div>
        {accordians}
      </style.Accordians>
    </div>
  );
}
