import Image from "next/image";
import * as style from "./TasteFoodCardCompo.style";

import Food1 from "@/assets/image/FoodPhoto/Food1.jpg";

export default function TasteFoodCardCompo() {
  return (
    <>
      <style.Card>
        <Image src={Food1} width={500} height={1000} alt="음식 사진" />
      </style.Card>
    </>
  );
}
