import React from "react";
import * as style from "./Guide.style";

import Image from "next/image";
import Violet1 from "@/assets/image/GuideCloud/Violet1.png";
import Violet2 from "@/assets/image/GuideCloud/Violet2.png";
import Violet3 from "@/assets/image/GuideCloud/Violet4.png";

export default function EndLayout() {
  return (
    <style.Container className="Violet">

      {/* 구름 */}
      <style.Cloud>
        <Image className="Cloud End Reverse" src={Violet1} alt="Cloud" />
        <Image className="Cloud End Reverse" src={Violet2} alt="Cloud" />
        <Image className="Cloud End" src={Violet3} alt="Cloud" />
      </style.Cloud>
      <style.Bottom />
    </style.Container>
  );
}
