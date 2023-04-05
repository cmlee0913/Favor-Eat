import { UserTokenType } from "@/types/store/userStoreTypes";
import { NextRouter } from "next/router";
import { logoutAsync } from "./auth";

export const moveHandler = (router, path, setIsOpen) => {
  router.push(path);
  setIsOpen(false);
};

export const menu = (
  router: NextRouter,
  setIsOpen: Function,
  images: Array<JSX.Element>
) => {
  return [
    {
      name: "마이페이지",
      image: images[0],
      alt: "Tomato",
      handler: () => {
        moveHandler(router, "/myPage", setIsOpen);
      },
    },
    {
      name: "정보페이지",
      image: images[1],
      alt: "Beef",
      handler: () => {
        moveHandler(router, "/info", setIsOpen);
      },
    },
    {
      name: "식단일기",
      image: images[2],
      alt: "Cheese",
      handler: () => {
        moveHandler(router, "/diary", setIsOpen);
      },
    },
    {
      name: "로그아웃",
      image: images[3],
      alt: "Lettuce",
      handler: () => {
        const userToken: any = JSON.parse(localStorage.getItem("userToken"));
        logoutAsync(userToken.accessToken);
        localStorage.clear();
        moveHandler(router, "/guide", setIsOpen);
      },
    },
    {
      name: "메인화면으로",
      image: images[4],
      alt: "Bread",
      handler: () => {
        moveHandler(router, "/main", setIsOpen);
      },
    },
  ];
};
