import React from "react";
import AccordianCompo from "@/present/component/AccordianCompo/AccordianCompo";
import TestCompo from "@/present/component/TestCompo";
import { AccordianCompoTypes } from "@/types/Accordian/dummy";
import { FlavorInfo } from "@/types/FlavorProgress/FlavorSummaryTypes";
import FlavorProgressListCompo from "@/present/common/FlavorProgress/FlavorProgressListCompo";

export default function info() {
  const flavorList: Array<FlavorInfo> = [
    { type: "spicy", value: 1 },
    { type: "sweet", value: 3.4 },
    { type: "salty", value: 4.27 },
  ];
  const test: Array<AccordianCompoTypes> = [
    {
      category: "맛",
      content: <FlavorProgressListCompo flavors={flavorList} />,
    },
    { category: "영양소", content: <TestCompo /> },
    { category: "레시피", content: <TestCompo /> },
  ];

  const accordian: any = test.map((elem, idx) => {
    return (
      <AccordianCompo
        key={idx}
        category={elem.category}
        content={elem.content}
        idx={idx}
      />
    );
  });

  return <div>{accordian}</div>;
}
