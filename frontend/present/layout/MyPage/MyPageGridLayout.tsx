import React from "react";
import * as style from "./MyPageGridLayout.style";

export default function MyPageGridLayout({ children }: { children: any }) {
  return <style.Container>{children}</style.Container>;
}
