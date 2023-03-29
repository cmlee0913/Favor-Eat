import React from "react";
import Image from "next/image";
import { Container404 } from "@/present/layout/pageStyle";
import Img404 from "@/assets/image/Img404.png";
import { useRouter } from "next/router";

function Custom404() {
  const router = useRouter();
  const moveMain = () => {
    router.push("/");
  };

  return (
    <Container404>
      <Image src={Img404} alt={"404 Notfound 찾을 수 없는 페이지입니다."} />

      <div onClick={moveMain}>메인으로 돌아가기</div>
    </Container404>
  );
}

export default Custom404;
