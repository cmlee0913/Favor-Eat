import React, {useRef} from "react";
import AccordianCompo from "@/present/component/AccordianCompo/AccordianCompo";
import { ReceipeContentProps } from "@/types/Receipe/dummy";

export default function ReceipeAccordian({receipeArr, selectIdx, setSelectedIdx}:ReceipeContentProps) {
  const accordianHandler = (idx:number) => {
    setSelectedIdx(idx)
  }
  
  // 아코디언 컴포넌트 생성
  const accordians = receipeArr.map((elem, idx) => {
    return (
      <AccordianCompo
        key={idx}
        elem={elem}
        idx={idx}
        accordianHandler={()=>accordianHandler(idx)}
      />
    );
  });

  return <div id="accordian">{accordians}</div>;
}
