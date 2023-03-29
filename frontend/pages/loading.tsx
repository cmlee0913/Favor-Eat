import React from "react";
import { ContainerLoading } from "@/present/layout/pageStyle";
import LoadingImg from "@/assets/image/Loading.gif";

function Loading() {
  return (
    <ContainerLoading>
      <img
        src={LoadingImg.src}
        alt={"Loading"}
        width={200}
        height={"auto"}
      />
    </ContainerLoading>
  );
}

export default Loading;
