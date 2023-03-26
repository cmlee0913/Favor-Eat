import Image from "next/image";
import * as style from "./TasteFoodCardCompo.style";

import Food1 from "@/assets/image/FoodPhoto/Food1.jpg";

export default function TasteFoodCardCompo() {
  return (
    <>
      <style.Card className="card">
        <Image src={Food1} width={500} height={700} alt="음식 사진" />
      </style.Card>
    </>
  );
}
