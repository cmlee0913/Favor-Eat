import React from "react";
import AccordianCompo from "@/present/component/AccordianCompo/AccordianCompo";
import Piechart from "@/present/component/PieChart/PieChart";

export default function ReceipeAccordian() {
  const test = [
    {
      category: "맛",
      content: <div>HIHI</div>,
    },
    {
      category: "영양소",
      content: <Piechart />,
    },
    {
      category: "레시피",
      content: <div>HIHI</div>,
    },
  ];

  const accordians = test.map((elem, idx) => {
    return (
      <AccordianCompo
        key={idx}
        category={elem.category}
        content={elem.content}
        idx={idx}
      />
    );
  });

  return <div id="accordian">{accordians}</div>;
}
