import { NextRouter } from "next/router";

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
      name: "알람설정",
      image: images[2],
      alt: "Cheese",
      handler: () => {
        moveHandler(router, "/alarm", setIsOpen);
      },
    },
    {
      name: "로그아웃",
      image: images[3],
      alt: "Lettuce",
      //   handler: () => logoutFunction,
      handler: () => {
        console.log("로그아웃!");
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
