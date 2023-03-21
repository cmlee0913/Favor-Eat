import React from "react";
import * as style from "./Guide.style";
import Image from "next/image";

import Pink1 from "@/assets/image/GuideCloud/Pink1.png";
import Pink2 from "@/assets/image/GuideCloud/Pink2.png";
import Test from "@/assets/image/test.jpg";

export default function SuggestLayout({ picPos }: { picPos: number }) {
  return (
    <style.Container className="Pink">
      <style.SampleImg picPos={picPos}>
        {picPos < 1500 && (
          <Image className="SampleImg" src={Test} alt="SampleImage" />
        )}
      </style.SampleImg>

      {/* 구름 */}
      <style.Cloud>
        <Image className="Cloud Suggest Reverse" src={Pink1} alt="Cloud" />
        <Image className="Cloud Suggest" src={Pink2} alt="Cloud" />
      </style.Cloud>
    </style.Container>
  );
}
