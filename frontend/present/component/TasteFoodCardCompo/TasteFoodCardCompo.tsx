import Image from "next/image";
import * as style from "./TasteFoodCardCompo.style";
import { TasteFoodCardCompoProps } from "@/types/TasteFoodCard/dummy";
import defaultImage from "@/assets/image/default-image.png";

export default function TasteFoodCardCompo({
  recipeData,
}: TasteFoodCardCompoProps) {
  return (
    <>
      <style.Card className="card">
        <div className="recipeName">{recipeData?.recipeName}</div>
        <Image
          src={recipeData ? recipeData.imageSrc : defaultImage}
          width={1000}
          height={1000}
          loading="lazy"
          alt="음식 사진"
        />
      </style.Card>
    </>
  );
}
