import { useState, useEffect } from "react";

import TestCompo from "@/present/component/TestCompo";
import GridLayout from "@/present/layout/GridLayout/GridLayout";
import InfoAccordian from "@/present/layout/info/InfoAccordian";
import Information from "@/present/layout/info/Information";
import { InfoTypes } from "@/types/Info/dummy";

import * as style from "./Info.style";

export default function InfoLayout() {
  const [selectIdx, setSelectedIdx] = useState(0);
  const [infoArr, setInfoArr] = useState<Array<InfoTypes>>([
    {
      category: "AAA",
      content: <TestCompo />,
      isOpen: true,
    },
    {
      category: "BBB",
      content: <TestCompo />,
      isOpen: false,
    },
    {
      category: "CCC",
      content: <TestCompo />,
      isOpen: false,
    },
  ]);

  useEffect(() => {
    const tmp = infoArr.map((elem, idx) => {
      if (idx === selectIdx) {
        elem.isOpen = true;
      } else {
        elem.isOpen = false;
      }

      return elem;
    });

    setInfoArr([...tmp]);
  }, [selectIdx]);

  return (
    <style.Container>
      <GridLayout>
        <Information />
        <InfoAccordian
          infoArr={infoArr}
          selectIdx={selectIdx}
          setSelectedIdx={setSelectedIdx}
        />
      </GridLayout>
    </style.Container>
  );
}
