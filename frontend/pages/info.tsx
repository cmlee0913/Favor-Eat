import { useState, useEffect } from "react";

import InfoGridLayout from "@/present/layout/Info/InfoGridLayout";
import InfoMember from "@/present/layout/Info/InfoMember";
import InfoAccordian from "@/present/layout/Info/InfoAccordian";
import InfoStaticData from "@/present/layout/info/InfoStaticData";

import { InfoTypes } from "@/types/Info/dummy";

export default function Info() {
  const [selectIdx, setSelectedIdx] = useState(0);
  const [infoArr, setInfoArr] = useState<Array<InfoTypes>>([
    {
      category: "자료 출처 1번",
      content: <InfoStaticData />,
      isOpen: true,
    },
    {
      category: "자료 출처 2번",
      content: <InfoStaticData />,
      isOpen: false,
    },
    {
      category: "자료 출처 3번",
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
    <InfoGridLayout>
      <InfoMember />
      <InfoAccordian
        infoArr={infoArr}
        selectIdx={selectIdx}
        setSelectedIdx={setSelectedIdx}
      />
    </InfoGridLayout>
  );
}
