import React from "react";
import * as style from "./LeftTitleBox.style";

export default function LeftTitleBox(props) {
  return (
    <style.LeftTitleBox>
      <div>{props.title}</div>
      <div>{props.subtitle}</div>
    </style.LeftTitleBox>
  );
}
