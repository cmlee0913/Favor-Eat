import React from "react";
import GridLayout from "@/present/layout/GridLayout/GridLayout";
import ReceipeAccordian from "@/present/layout/Accordian/ReceipeAccordian";
import ReceipeImg from "@/present/layout/ReceipeImg/ReceipeImg";

import Test from "@/assets/image/test.jpg";
import ReceipeNav from "@/present/layout/ReceipeNav/ReceipeNav";

export default function Receipe() {
  const mainImg = Test;
  const subImg = [Test, Test, Test];

  return (
    <>
      <GridLayout>
        <ReceipeImg mainImg={mainImg} subImg={subImg} />
        <div>
            <ReceipeNav />
          <ReceipeAccordian />
        </div>
      </GridLayout>
    </>
  );
}
