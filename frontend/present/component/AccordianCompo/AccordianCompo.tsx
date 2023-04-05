import React, { useState } from "react";
import * as style from "./AccordianCompo.style";
import { AccordianProps } from "@/types/Accordian/dummy.js";
import Arrow from "@/assets/icon/arrow.svg";

export default function AccordianCompo({
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
      <style.Content open={elem?.isOpen}>{elem?.content}</style.Content>
    </style.Container>
  );
}
