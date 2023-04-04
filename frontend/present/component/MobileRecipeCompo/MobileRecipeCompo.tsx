import { theme } from "@/constant/theme";
import { MobileRecipeCompoProps } from "@/types/MobileRecipeCompo/dummy";
import Image from "next/image";
import { useRouter } from "next/router";
import * as style from "./MobileRecipeCompo.style";

export function MobileRecipeCompo({
  imgSrc,
  foodName,
  flavorType,
  flavorValue,
  recipeId,
}: MobileRecipeCompoProps) {
  const router = useRouter();

  const onClickRecipe = (recipeId: number) => {
    router.push(`/recipe/${recipeId}`);
  };

  return (
    <>
      <style.Container onClick={() => onClickRecipe(recipeId)}>
        <style.ImageWrapper>
          <Image src={imgSrc} alt="음식 사진" width={1000} height={1000} />
        </style.ImageWrapper>
        <div>
          <style.BottomContent>
            <div className="flex">
              <div className="foodName">{foodName}</div>
              <Image
                className="flavorCharacter"
                src={theme.characterImg[flavorType]}
                alt="맛 캐릭터"
              />
              <div className="flavorValue">{flavorValue}점</div>
            </div>
            <style.NextButton />
          </style.BottomContent>
        </div>
      </style.Container>
    </>
  );
}
