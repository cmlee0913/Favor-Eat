import {
  FlavorInfo,
  FlavorProps,
} from "@/types/FlavorProgress/FlavorSummaryTypes";
import Image from "next/image";
import * as style from "./FlavorProgressCompo.style";
import FlavorProgressCompo from "./FlavorProgressCompo";

export default function FlavorProgressListCompo({
  flavors,
  image,
}: FlavorProps) {
  return (
    <>
      <style.ImgForMobile>
        <Image src={image} alt="" />
      </style.ImgForMobile>
      {flavors.map((item: FlavorInfo) => (
        <div key={item.type}>
          <FlavorProgressCompo value={item.value} type={item.type} />
        </div>
      ))}
    </>
  );
}
