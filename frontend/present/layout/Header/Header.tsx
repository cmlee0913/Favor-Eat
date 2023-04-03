import React, { memo, useEffect, useState } from "react";
import { useRouter } from "next/router";

import Arrow from "@/assets/icon/arrow.svg";

import HambugerBar from "@/present/component/HambugerBar/HambugerBar";
import HambugerInner from "../HambugerInner/HambugerInner";
import * as style from "./Header.style";
import useMediaQuery from "@/action/hooks/useMediaQuery";
import Menu from "../Menu/Menu";

function Header() {
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

  return (
    <style.Container>
      {/* MenuHeader */}
      <style.HeaderContainer isOpen={isOpen || isMain}>
        {isMain ? (
          <div></div>
        ) : (
          <Arrow className="Arrow" alt="go back" onClick={backHandler} />
        )}

        <HambugerBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </style.HeaderContainer>
      {/* MenuInner */}
      {isOpen && <Menu setIsOpen={setIsOpen}/>}

      {/* {isOpen && <HambugerInner setIsOpen={setIsOpen} />} */}
    </style.Container>
  );
}

export default memo(Header);
