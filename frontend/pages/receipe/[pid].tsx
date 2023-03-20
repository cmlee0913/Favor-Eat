import React, {useState} from "react";
import GridLayout from "@/present/layout/GridLayout/GridLayout";
import ReceipeImg from "@/present/layout/Receipe/ReceipeImg/ReceipeImg";

import Test from "@/assets/image/test.jpg";
import ReceipeNav from "@/present/layout/Receipe/ReceipeNav/ReceipeNav";
import ReceipeContent from "@/present/layout/Receipe/ReceipeContent/ReceipeContent";
import Piechart from "@/present/component/PieChart/PieChart";

export default function Receipe() {
  const [selectIdx, setSelectedIdx] = useState(0)
  //TestImg
  const mainImg = Test;
  const subImg = [Test, Test, Test];

  //Accordian Category
  const ReceipeArr = [
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

  return (
    <>
      <GridLayout>
        {/* 음식 이미지 */}
        <ReceipeImg mainImg={mainImg} subImg={subImg} />

        {/* 음식 상세 정보 */}
        <div>
          <ReceipeNav ReceipeArr={ReceipeArr} selectIdx={selectIdx} />
          <ReceipeContent ReceipeArr={ReceipeArr} selectIdx={selectIdx} setSelectedIdx={setSelectedIdx}/>
        </div>
      </GridLayout>
    </>
  );
}
