import HambugerBar from "@/present/component/HambugerBar/HambugerBar";
import React, { memo, useState } from "react";
import HambugerInner from "../HambugerInner/HambugerInner";
import * as style from "./Header.style";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <style.Container>
      <style.HeaderContainer>
        <div></div>
        <HambugerBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </style.HeaderContainer>

      {isOpen && <HambugerInner />}
    </style.Container>
  );
}

export default memo(Header);
