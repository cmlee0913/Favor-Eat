import * as style from "./FlavorCharacterCompo.style";

import Image from "next/image";
import { FlavorCharacterProps } from "@/types/RecipeFlavor/dummy";

export default function FlavorCharacterCompo({
  type,
  title,
  value,
  img,
  hoverActive,
  hoverInactive,
}: FlavorCharacterProps) {
  const onHandleMouseOver = () => {
    hoverActive(type);
  };

  const onHandleMouseOut = () => {
    hoverInactive();
  };

  return (
    <style.Container>
      <style.HoverIconWrapper
        onMouseOver={onHandleMouseOver}
        onMouseOut={onHandleMouseOut}
      >
        <style.HoverIconText>?</style.HoverIconText>
      </style.HoverIconWrapper>
      <style.CharacterWrapper>
        <style.Title>{title}</style.Title>
        <style.Character>
          <Image src={img} width={20} height={20} alt="맛 캐릭터" />
        </style.Character>
        <div>
          <style.FlavorLevel>{value}단계</style.FlavorLevel>
        </div>
      </style.CharacterWrapper>
    </style.Container>
  );
}
