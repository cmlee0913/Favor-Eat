import React from "react";
import * as style from "./Guide.style";
import Image from "next/image";

import Pink1 from "@/assets/image/GuideCloud/Pink1.png";
import Pink2 from "@/assets/image/GuideCloud/Pink2.png";
import Test from "@/assets/image/test.jpg"

import { useScroll } from "@/action/hooks/useScroll";
import { useState } from "react";
import { useEffect } from "react";

export default function SuggestLayout() {
  const [scrollY, viewHeight] = useScroll();
  const [picPos, setPicPos] = useState(0)

  useEffect(()=> {
    console.log(scrollY)
    const tmp = scrollY-viewHeight
    if (tmp>0) setPicPos(tmp)
  }, [scrollY])

  console.log(picPos)

  return (
    <style.Container className="Pink">
      <style.SampleImg picPos={picPos}>
        <Image className="SampleImg" src={Test} alt="SampleImage"/>
      </style.SampleImg>

      {/* 구름 */}
      <style.Cloud>
        <Image className="Cloud Suggest Reverse" src={Pink1} alt="Cloud" />
        <Image className="Cloud Suggest" src={Pink2} alt="Cloud" />
      </style.Cloud>
    </style.Container>
  );
}
