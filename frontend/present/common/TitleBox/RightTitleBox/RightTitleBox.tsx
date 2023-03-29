import React from "react";
import * as style from "./RightTitleBox.style";

export default function RightTitleBox(props) {
  return (
    <style.RightTitleBox>
      <div>{props.title}</div>
    </style.RightTitleBox>
  );
}
