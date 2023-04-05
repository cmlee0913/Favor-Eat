import React, { memo, useEffect, useState } from "react";
import { useRouter } from "next/router";

import Arrow from "@/assets/icon/arrow.svg";

import HambugerBar from "@/present/component/HambugerBar/HambugerBar";
import * as style from "./Header.style";
import Menu from "../Menu/Menu";

function Header({ isDiary }: { isDiary: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isMain = router.pathname === "/main" ? true : false;

  const backHandler = () => {
    router.back();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  const isTransparent = isDiary || isOpen || isMain ? true : false;

  return (
    <style.Container>
      {/* MenuHeader */}
      <style.HeaderContainer isOpen={isTransparent}>
        {isMain ? (
          <div></div>
        ) : (
          <Arrow className="Arrow" alt="go back" onClick={backHandler} />
        )}

        <HambugerBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </style.HeaderContainer>
      {/* MenuInner */}
      {isOpen && <Menu setIsOpen={setIsOpen} />}
    </style.Container>
  );
}

export default memo(Header);
