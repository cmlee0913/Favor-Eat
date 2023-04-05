import { useState, useEffect } from "react";

import InfoMember from "@/present/layout/Info/InfoMember";
import InfoAccordian from "@/present/layout/Info/InfoAccordian";

import InfoDataSource from "@/present/layout/Info/InfoDataSource";
import InfoTechStack from "@/present/layout/Info/InfoTechStack";
import InfoArchive from "@/present/layout/Info/InfoArchive";

import { InfoTypes } from "@/types/Info/dummy";

import GridReverseLayout from "@/present/layout/GridLayout/GridReverseLayout";

export default function Info() {
  const [selectIdx, setSelectedIdx] = useState(0);
  const [infoArr, setInfoArr] = useState<Array<InfoTypes>>([
    {
      category: "데이터 출처",
      content: <InfoDataSource />,
      isOpen: true,
    },
    {
      category: "기술 스택",
      content: <InfoTechStack />,
      isOpen: false,
    },
    {
      category: "프로젝트 관리",
      content: <InfoArchive />,
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
