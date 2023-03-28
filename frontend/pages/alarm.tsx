import { useState, useEffect } from "react";

import InfoGridLayout from "@/present/layout/Info/InfoGridLayout";
import AlarmAdvise from "@/present/layout/Alarm/AlarmAdvise";
import AlarmSetting from "@/present/layout/Alarm/AlarmSetting";
import AlarmAccordian from "@/present/layout/Alarm/AlarmAccordian";

import { AlarmTypes } from "@/types/Alarm/dummy";

export default function Alarm() {
  const [selectIdx, setSelectedIdx] = useState(0);
  const [alarmArr, setAlarmArr] = useState<Array<AlarmTypes>>([
    {
      category: "아침",
      content: <AlarmSetting />,
      isOpen: true,
    },
    {
      category: "점심",
      content: <AlarmSetting />,
      isOpen: false,
    },
    {
      category: "저녁",
      content: <AlarmSetting />,
      isOpen: false,
    },
  ]);

  useEffect(() => {
    const tmp = alarmArr.map((elem, idx) => {
      if (idx === selectIdx) {
        elem.isOpen = true;
      } else {
        elem.isOpen = false;
      }
      return elem;
    });
    setAlarmArr([...tmp]);
  }, [selectIdx]);

  return (
    <InfoGridLayout>
      <AlarmAdvise />
      <AlarmAccordian
        alarmArr={alarmArr}
        selectIdx={selectIdx}
        setSelectedIdx={setSelectedIdx}
      />
    </InfoGridLayout>
  );
}
