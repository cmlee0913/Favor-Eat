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
      </style.Container>
    </>
  );
}
