import React from "react";
import * as style from "./GridLayout.style";

export default function GridReverseLayout({ children }: { children: any }) {
  return <style.Container className="GridLayout Reverse">{children}</style.Container>;
}
