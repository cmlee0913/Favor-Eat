import * as style from "./Taste.style";

import Image from "next/image";

import Bush1 from "@/assets/image/TastePage/Bush1.png";
import Bush2 from "@/assets/image/TastePage/Bush2.png";
import Bush3 from "@/assets/image/TastePage/Bush3.png";
import Bush4 from "@/assets/image/TastePage/Bush4.png";

import Cloud1 from "@/assets/image/TastePage/Cloud1.png";
import Cloud2 from "@/assets/image/TastePage/Cloud2.png";
import Cloud3 from "@/assets/image/TastePage/Cloud3.png";
import Cloud4 from "@/assets/image/TastePage/Cloud4.png";
import Cloud5 from "@/assets/image/TastePage/Cloud5.png";

import Glass1 from "@/assets/image/TastePage/Glass1.png";
import Glass2 from "@/assets/image/TastePage/Glass2.png";

import Ground from "@/assets/image/TastePage/Ground.png";

import Hill1 from "@/assets/image/TastePage/Hill1.png";
import Hill2 from "@/assets/image/TastePage/Hill2.png";
import Hill3 from "@/assets/image/TastePage/Hill3.png";
import Hill4 from "@/assets/image/TastePage/Hill4.png";

import Sky from "@/assets/image/TastePage/Sky.png";
export default function Background({ movePage, selectedChracter }) {
  const onClickButton = () => {
    movePage(selectedChracter);
  };

  return (
    <>
      <div>
        <style.Sky>
          <Image className="Sky" src={Sky} alt="Sky" />
        </style.Sky>

        <style.Ground>
          <Image className="Ground" src={Ground} alt="Ground" />
        </style.Ground>

        <style.Bush>
          <Image className="Bush Responsive" src={Bush1} alt="Bush" />
          <Image className="Bush Responsive" src={Bush2} alt="Bush" />
          <Image className="Bush Responsive" src={Bush3} alt="Bush" />
          <Image className="Bush Responsive" src={Bush4} alt="Bush" />
        </style.Bush>

        <style.Cloud>
          <Image className="Cloud Responsive" src={Cloud1} alt="Cloud" />
          <Image className="Cloud Responsive" src={Cloud2} alt="Cloud" />
          <Image className="Cloud Responsive" src={Cloud3} alt="Cloud" />
          <Image className="Cloud Responsive" src={Cloud4} alt="Cloud" />
          <Image className="Cloud Responsive" src={Cloud5} alt="Cloud" />
        </style.Cloud>

        <style.Hill>
          <Image className="Hill Responsive" src={Hill1} alt="Hill" />
          <Image className="Hill Responsive" src={Hill2} alt="Hill" />
          <Image className="Hill Responsive" src={Hill3} alt="Hill" />
          <Image className="Hill Responsive" src={Hill4} alt="Hill" />
        </style.Hill>

        <style.Glass>
          <Image className="Glass Responsive" src={Glass1} alt="Glass" />
          <Image className="Glass Responsive" src={Glass2} alt="Glass" />
          <Image className="Glass Responsive" src={Glass1} alt="Glass" />
        </style.Glass>
      </div>
      <style.ChooseButton onClick={onClickButton}>
        모험 떠나기
      </style.ChooseButton>
    </>
  );
}
