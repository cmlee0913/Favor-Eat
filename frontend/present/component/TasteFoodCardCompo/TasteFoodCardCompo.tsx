import Image from "next/image";
import * as style from "./TasteFoodCardCompo.style";
import { TasteFoodCardCompoProps } from "@/types/TasteFoodCard/dummy";
import { useEffect, useState } from "react";

export default function TasteFoodCardCompo({
  recipeData,
}: TasteFoodCardCompoProps) {
  return (
    <>
      <style.Card className="card">
        <Image
          src={recipeData?.imageSrc}
          width={700}
          height={1000}
          loading="lazy"
          alt="음식 사진"
        />
      </style.Card>
    </>
  );
}
