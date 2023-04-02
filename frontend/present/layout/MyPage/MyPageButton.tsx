import { ButtonProps } from "@/types/Common/dummy";
import React from "react";
import * as style from "./MyPage.style";

export default function MyPageButton({ context, handler }: ButtonProps) {
  return (
    <style.ButtonContainer onClick={handler}>{context}</style.ButtonContainer>
  );
}
