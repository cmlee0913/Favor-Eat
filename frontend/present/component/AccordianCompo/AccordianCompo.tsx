import React, { useState } from "react";
import * as style from "./AccordianCompo.style";
import { AccordianProps } from "@/types/Accordian/dummy.js";
import Arrow from "@/assets/icon/arrow.svg"

export default function AccordianCompo({
  category,
  content,
  idx,
}: AccordianProps) {
  const [open, setOpen] = useState(false);

  const openSub = () => {
    setOpen(!open);
  };

  return (
    <style.Container open={open} idx={idx}>
      <style.Title onClick={openSub}>
        <div>{category}</div>
        <Arrow />
      </style.Title>
      {open && <style.Content>{content}</style.Content>}
    </style.Container>
  );
}
