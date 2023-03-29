import React, { useState } from "react";
import * as style from "./AccordianPurpleCompo.style";
import { AccordianProps } from "@/types/Accordian/dummy.js";
import Arrow from "@/assets/icon/arrow.svg";

export default function AccordianPurpleCompo({
  elem,
  idx,
  accordianHandler,
}: AccordianProps) {
  const openSub = () => {
    accordianHandler();
  };

  return (
    <style.Container open={elem?.isOpen} idx={idx}>
      <style.Title onClick={openSub}>
        <div>{elem?.category}</div>
        <Arrow />
      </style.Title>
      {elem?.isOpen && <style.Content>{elem?.content}</style.Content>}
    </style.Container>
  );
}
