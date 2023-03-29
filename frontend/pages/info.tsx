import { useState, useEffect } from "react";

import InfoMember from "@/present/layout/Info/InfoMember";
import InfoAccordian from "@/present/layout/Info/InfoAccordian";
import InfoStaticData from "@/present/layout/Info/InfoStaticData";

import { InfoTypes } from "@/types/Info/dummy";

import GridReverseLayout from "@/present/layout/GridLayout/GridReverseLayout";

export default function Info() {
  const [selectIdx, setSelectedIdx] = useState(0);
  const [infoArr, setInfoArr] = useState<Array<InfoTypes>>([
    {
      category: "만개의 레시피/식품 영양 크롤링",
      content: <InfoStaticData />,
      isOpen: true,
    },
    {
      category: "백/프론트 래퍼런스 넣기",
      content: <InfoStaticData />,
      isOpen: false,
    },
    {
      category: "노션/피그마 etc",
      content: <InfoStaticData />,
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
    <GridReverseLayout>
      <InfoMember />
      <InfoAccordian
        infoArr={infoArr}
        selectIdx={selectIdx}
        setSelectedIdx={setSelectedIdx}
      />
    </GridReverseLayout>
  );
}
