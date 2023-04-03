import React, { memo } from "react";
import Image from "next/image";
import * as style from "./Profile.style";

import ProfileIcon from "@/assets/icon/Profile.png";

function Profile({name}:{name:string}) {
  return (
    <style.Container>
      <style.IconContainer>
        <Image src={ProfileIcon} alt={"Profile Icon"} />
      </style.IconContainer>
      <style.TitleContainer>
        {name}님
      </style.TitleContainer>
    </style.Container>
  );
}

export default memo(Profile);
