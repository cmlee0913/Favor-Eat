import Image from "next/image";
import { FlavorStaticData } from "@/types/MyPage/dummy";

import * as style from "./MyPage.style";

export default function MyPageFlavorData(item: FlavorStaticData) {
  return (
    <style.FlavorDataContainer>
      <style.FlavorDataImageContainer>
        <div>{item.title}</div>
        <Image
          style={{ width: "50px", height: "auto" }}
          src={item.img}
          alt="item.type"
        />
      </style.FlavorDataImageContainer>
      <style.FlavorDataValueContainer>
        <div>
          평균 {item.subtitle}는 {item.value} 입니다.
        </div>
      </style.FlavorDataValueContainer>
    </style.FlavorDataContainer>
  );
}
