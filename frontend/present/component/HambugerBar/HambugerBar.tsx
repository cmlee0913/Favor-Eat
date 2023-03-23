import React, { memo, useState } from "react";
import * as style from "./HambugerBar.style";

import HambugerBottom from "@/assets/icon/Hambuger/HambugerBottom.svg";
import HambugerCenter from "@/assets/icon/Hambuger/HambugerCenter.svg";
import HambugerTop from "@/assets/icon/Hambuger/HambugerTop.svg";
import { HambugerInnerProps } from "@/types/Hambuger/dummy";

function Hambuger({ isOpen, setIsOpen }:HambugerInnerProps) {
  const hamburgerBarHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <style.Container onClick={hamburgerBarHandler} isOpen={isOpen}>
      <HambugerTop />
      <HambugerCenter />
      <HambugerBottom />
    </style.Container>
  );
}

export default memo(Hambuger);
