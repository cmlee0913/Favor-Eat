import { ButtonProps } from "@/types/Common/dummy";
import React from "react";
import * as style from "./Button.style";

export default function Button({ context, handler }: ButtonProps) {
  return <style.Container onClick={handler}>{context}</style.Container>;
}
