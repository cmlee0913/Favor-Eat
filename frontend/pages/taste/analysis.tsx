import React, { useState } from "react";
import * as style from "@/present/layout/taste/analysis/AnalysisLayout.style";

import TopLayout from "@/present/layout/taste/analysis/TopLayout";
import MiddleLayout from "@/present/layout/taste/analysis/MiddleLayout";
import BottomLayout from "@/present/layout/taste/analysis/BottomLayout";

export default function Analysis() {
  const MAX_COUNT = 5;
  const [count, setCount] = useState(0);
  const [buttonShow, setButtonShow] = useState(true);

  return (
    <style.Container>
      <TopLayout count={count} max={MAX_COUNT} />
      <MiddleLayout
        count={count}
        setCount={setCount}
        buttonShow={buttonShow}
        changeShowMode={setButtonShow}
      />
      <BottomLayout />
    </style.Container>
  );
}
