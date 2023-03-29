import React from "react";
import Image from "next/image";
import ShutDownService from "@/assets/image/ShutDownService.png";

export default function Ingredient() {
  return (
    <Image
      style={{ width: "80%", height: "auto" }}
      src={ShutDownService}
      alt="ShutDownService"
    />
  );
}
