import React from "react";
import * as style from "./Guide.style";
import Image from "next/image";

import Pink1 from "@/assets/image/GuideCloud/Pink1.png";
import Pink2 from "@/assets/image/GuideCloud/Pink2.png";

import EndCloudPink from "@/assets/image/GuideCloud/PinkCloud.png";

export default function FunctionLayout() {
  return (
    <style.Container className="Pink">
        
      {/* 구름 */}
      <style.Cloud>
        <Image className="Cloud Function" src={Pink1} alt="Cloud" />
        <Image className="Cloud Function Reverse" src={Pink2} alt="Cloud" />
        <Image className="EndPoint" src={EndCloudPink} alt="Layout EndPoint" />
      </style.Cloud>
    </style.Container>
  );
}
