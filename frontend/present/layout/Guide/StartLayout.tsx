import React from "react";
import * as style from "./Guide.style";
import Image from "next/image";

// Cloud Image
import EndCloudViolet from "@/assets/image/GuideCloud/VioletCloud.png";
import Violet1 from "@/assets/image/GuideCloud/Violet1.png";
import Violet2 from "@/assets/image/GuideCloud/Violet2.png";
import Violet3 from "@/assets/image/GuideCloud/Violet3.png";

export default function StartLayout() {
  return (
    <style.Container className="Violet">
      {/* 문구 */}
      <div>
        <style.Slogan className="Main">Life is uncertain,</style.Slogan>
        <style.Slogan className="Main">Favor is certain</style.Slogan>
      </div>

      {/* 구름 */}
      <style.Cloud>
        <Image className="Cloud Start" src={Violet1} alt="Cloud" />
        <Image className="Cloud Start" src={Violet2} alt="Cloud" />
        <Image className="Cloud Start" src={Violet3} alt="Cloud" />
      </style.Cloud>

      {/* 연결 포인트 */}
      <Image className="EndPoint" src={EndCloudViolet} alt="Layout EndPoint" />
    </style.Container>
  );
}
