import React from "react";
import * as style from "./Taste.style";

import Image from "next/image";

import Bush1 from "@/assets/image/TastePage/Bush1.png";
import Bush2 from "@/assets/image/TastePage/Bush2.png";
import Bush3 from "@/assets/image/TastePage/Bush3.png";
import Bush4 from "@/assets/image/TastePage/Bush4.png";

import Cloud1 from "@/assets/image/TastePage/Cloud1.png";
import Cloud2 from "@/assets/image/TastePage/Cloud2.png";

import Glass1 from "@/assets/image/TastePage/Glass1.png";
import Glass2 from "@/assets/image/TastePage/Glass2.png";

import Ground from "@/assets/image/TastePage/Ground.png";

import Hill1 from "@/assets/image/TastePage/Hill1.png";
import Hill2 from "@/assets/image/TastePage/Hill2.png";
import Hill3 from "@/assets/image/TastePage/Hill3.png";
import Hill4 from "@/assets/image/TastePage/Hill4.png";

export default function Background() {
  return (
    <>
      <style.Bush>
        <Image className="Bush Test" src={Bush1} alt="Bush" />
        <Image className="Bush Test" src={Bush2} alt="Bush" />
        <Image className="Bush Test" src={Bush3} alt="Bush" />
        <Image className="Bush Test" src={Bush4} alt="Bush" />
      </style.Bush>
      {/* 

      <Image src={Cloud1} alt="Cloud" />
      <Image src={Cloud2} alt="Cloud1" />

      <Image src={Glass1} alt="Glass" />
      <Image src={Glass2} alt="Glass" />

      <Image src={Ground} alt="Ground" />

      <Image src={Hill1} alt="Hill" />
      <Image src={Hill2} alt="Hill" />
      <Image src={Hill3} alt="Hill" />
      <Image src={Hill4} alt="Hill" /> */}
    </>
  );
}
