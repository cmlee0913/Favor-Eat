import React, {useRef} from "react";
import AccordianCompo from "@/present/component/AccordianCompo/AccordianCompo";
import { ReceipeContentProps } from "@/types/Receipe/dummy";

export default function ReceipeAccordian({ReceipeArr, selectIdx, setSelectedIdx}:ReceipeContentProps) {
  const accordianRef = useRef()

  const accordianHandler = (idx:number) => {
    setSelectedIdx(idx)
  }
  
  // 아코디언 컴포넌트 생성
  const accordians = ReceipeArr.map((elem, idx) => {
    return (
      <AccordianCompo
        key={idx}
        category={elem.category}
        content={elem.content}
        idx={idx}
        accordianHandler={()=>accordianHandler(idx)}
      />
    );
  });

  return <div id="accordian">{accordians}</div>;
}
