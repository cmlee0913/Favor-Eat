import * as style from "./Taste.style";

import Image from "next/image";

import Oily from "@/assets/image/Character/LayDownOily.png";
import Salty from "@/assets/image/Character/Salty.png";
import Spicy from "@/assets/image/Character/Spicy.png";
import Sweet from "@/assets/image/Character/Sweet.png";

export default function Character() {
  return (
    <div>
      <style.Character>
        <Image className="Character Responsive" src={Spicy} alt="Spicy" />
        <Image className="Character Responsive" src={Sweet} alt="Sweet" />
        <Image className="Character Responsive" src={Salty} alt="Salty" />
        <Image className="Character Responsive" src={Oily} alt="Oily" />
      </style.Character>
    </div>
  );
}
