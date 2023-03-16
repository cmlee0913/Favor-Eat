import React from "react";
import AccordianCompo from "@/present/component/AccordianCompo/AccordianCompo";
import TestCompo from "@/present/component/TestCompo";
import { AccordianCompoTypes } from "@/types/Accordian/dummy";

export default function info() {
  const test:Array<AccordianCompoTypes> = [
    { category: "맛", content: <TestCompo /> },
    { category: "영양소", content: <TestCompo /> },
    { category: "레시피", content: <TestCompo /> },
  ];

  const accordian:any = test.map((elem, idx) => {
    return <AccordianCompo key={idx} category={elem.category} content={elem.content} idx={idx}/>
  });

  return (
    <div>
        {accordian}
    </div>
  );
}
