import React, { memo } from "react";
import Image from "next/image";
import * as style from "./HambugerInner.style";

import Profile from "@/present/component/Profile/Profile";

import Tomato from "@/assets/image/Hambuger/Tomato.png";
import Beef from "@/assets/image/Hambuger/Beef.png";
import Cheese from "@/assets/image/Hambuger/Cheese.png";
import Lettuce from "@/assets/image/Hambuger/Lettuce.png";
import Bread from "@/assets/image/Hambuger/Bread.png";

import Arrow1 from "@/assets/image/Hambuger/Arrow1.png";
import Arrow2 from "@/assets/image/Hambuger/Arrow2.png";
import Arrow3 from "@/assets/image/Hambuger/Arrow3.png";
import Arrow4 from "@/assets/image/Hambuger/Arrow4.png";
import Arrow5 from "@/assets/image/Hambuger/Arrow5.png";
import { useRouter } from "next/router";

function HambugerInner({setIsOpen}:{setIsOpen:Function}) {
  const router = useRouter();

  const moveHandler = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  const menu = [
    {
      name: "마이페이지",
      image: Tomato,
      alt: "Tomato",
      arrow: Arrow1,
      handler: () => {
        moveHandler('/myPage');
      },
    },
    {
      name: "정보페이지",
      image: Beef,
      alt: "Beef",
      arrow: Arrow2,
      handler: () => {
        moveHandler('/info');
      },
    },
    {
      name: "알람설정",
      image: Cheese,
      alt: "Cheese",
      arrow: Arrow3,
      handler: () => {
        moveHandler('/alarm');
      },
    },
    {
      name: "로그아웃",
      image: Lettuce,
      alt: "Lettuce",
      arrow: Arrow4,
      handler: null,
    },
    {
      name: "메인화면으로",
      image: Bread,
      alt: "Bread",
      arrow: Arrow5,
      handler: () => {
        moveHandler('/main');
      },
    },
  ];

  const menuInner = menu.map((elem, idx) => {
    return (
      <style.IngreContainer idx={idx} key={idx} onClick={elem.handler}>
        <Image src={elem.image} alt={elem.alt} />
        <Image src={elem.arrow} alt={elem.name} />
        <div>{elem.name}</div>
      </style.IngreContainer>
    );
  });
  return (
    <style.InnerContainer>
      {/* Profile */}
      <style.InnerHeader>
        <Profile />
      </style.InnerHeader>

      <style.InnerBody>{menuInner}</style.InnerBody>
    </style.InnerContainer>
  );
}

export default memo(HambugerInner);
