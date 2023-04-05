import React from "react";
import * as style from "./RecipeImg.style";
import Image from "next/image";

import { RecipeImgProps } from "@/types/Recipe/dummy";

export default function RecipeImg({ mainImg }: RecipeImgProps) {

  return (
    <style.Container>
      <Image id="mainImg" src={mainImg} width={1000} height={1000} alt="mainImage" />
    </style.Container>
  );
}
