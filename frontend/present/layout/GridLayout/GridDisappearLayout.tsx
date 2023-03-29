import React from "react";
import * as style from "./GridLayout.style";

export default function GridDisappearLayout({ children }: { children: any }) {
  return (
    <style.Container className="GridLayout Disappear">
      {children}
    </style.Container>
  );
}
