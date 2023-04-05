import React from "react";
import Image from "next/image";
import ShutDownService from "@/assets/image/ShutDownService.png";
import * as style from "./MyPage.style";

export default function Ingredient() {
  return (
    <style.ShutDownImageWrapper>
      <Image src={ShutDownService} alt="ShutDownService" />
    </style.ShutDownImageWrapper>
  );
}
