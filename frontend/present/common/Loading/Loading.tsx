import React from "react";
import * as style from "./Loading.style";
import LoadingImg from "@/assets/image/Loading.gif";
import Image from "next/image";

function Loading() {
  return (
    <style.ContainerLoading>
      <Image src={LoadingImg.src} alt={"Loading"} width={0} height={0} />
    </style.ContainerLoading>
  );
}

export default Loading;
