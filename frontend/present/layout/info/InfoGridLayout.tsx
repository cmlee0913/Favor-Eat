import React from "react";
import * as style from "./InfoGridLayout.style";

export default function InfoGridLayout({ children }: { children: any }) {
  return <style.Container className="GridLayout">{children}</style.Container>;
}
