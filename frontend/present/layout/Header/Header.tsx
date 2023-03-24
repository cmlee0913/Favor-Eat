import React, { memo, useState } from "react";
import { useRouter } from "next/router";

import Arrow from "@/assets/icon/arrow.svg";

import HambugerBar from "@/present/component/HambugerBar/HambugerBar";
import HambugerInner from "../HambugerInner/HambugerInner";
import * as style from "./Header.style";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isMain = router.pathname === "/main" ? true : false;

  const backHandler = () => {
    router.back();
  };

  return (
    <style.Container>
      <style.HeaderContainer isOpen={isOpen || isMain}>
        {isMain ? (
          <div></div>
        ) : (
          <Arrow className="Arrow" alt="go back" onClick={backHandler} />
        )}

        <HambugerBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </style.HeaderContainer>

      {isOpen && <HambugerInner setIsOpen={setIsOpen}/>}
    </style.Container>
  );
}

export default memo(Header);
