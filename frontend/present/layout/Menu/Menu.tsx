import React, { memo, useState, useEffect } from "react";
import * as style from "./Menu.style";

import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { RESET } from "jotai/utils";
import { logoutAsync } from "@/action/apis/auth";

import { getUserDataByToken, userTokenSave } from "@/store/userStore";
import { menu } from "@/action/apis/menu";
import useMediaQuery from "@/action/hooks/useMediaQuery";

import TomatoPC from "@/assets/image/Menu/TomatoPC.svg";
import BeefPC from "@/assets/image/Menu/BeefPC.svg";
import CheesePC from "@/assets/image/Menu/CheesePC.svg";
import LettucePC from "@/assets/image/Menu/LettucePC.svg";
import BurnPC from "@/assets/image/Menu/BurnPC.svg";

import TomatoMobile from "@/assets/image/Menu/TomatoMobile.svg";
import BeefMobile from "@/assets/image/Menu/BeefMobile.svg";
import CheeseMobile from "@/assets/image/Menu/CheeseMobile.svg";
import LettuceMobile from "@/assets/image/Menu/LettuceMobile.svg";
import BurnMobile from "@/assets/image/Menu/BurnMobile.svg";
import Profile from "@/present/component/Profile/Profile";

function MenuPC({ setIsOpen }: { setIsOpen: Function }) {
  const router = useRouter();
  const isTablet = useMediaQuery("(max-width: 1000px)");
  const [token, setUserToken] = useAtom(userTokenSave);
  const [name, setName] = useState("로그인 해주세요!");

  const Tomato = isTablet ? <TomatoMobile /> : <TomatoPC />;
  const Beef = isTablet ? <BeefMobile /> : <BeefPC />;
  const Cheese = isTablet ? <CheeseMobile /> : <CheesePC />;
  const Lettuce = isTablet ? <LettuceMobile /> : <LettucePC />;
  const Burn = isTablet ? <BurnMobile /> : <BurnPC />;

  const BurgerElem = [Tomato, Beef, Cheese, Lettuce, Burn];

  useEffect(() => {
    if (token.accessToken) {
      const { nickname } = getUserDataByToken(token.accessToken);
      setName(nickname);
    }
  }, [token]);

  const menuArr = menu(router, setIsOpen, BurgerElem);
  const menuInner = menuArr.map((elem, idx) => {
    return (
      <style.Menu idx={idx} key={idx} onClick={elem.handler} title={elem.alt}>
        <style.Name idx={idx}>{elem.name}</style.Name>
        {elem.image}
      </style.Menu>
    );
  });

  return (
    <style.Container>
      <Profile name={name} />
      {/* PC 버전 */}
      <style.Body className="PC">
        <style.InnerPC>{menuInner}</style.InnerPC>
      </style.Body>

      {/* 모바일 버전 */}
      <style.Body className="Mobile">
        <style.InnerMobile>{menuInner}</style.InnerMobile>
      </style.Body>
    </style.Container>
  );
}

export default memo(MenuPC);
