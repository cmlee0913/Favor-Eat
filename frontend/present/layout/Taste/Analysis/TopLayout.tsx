import { RecipeRatingListAtom } from "@/store/tasteStore";
import { TopLayoutProps } from "@/types/Taste/dummy";
import { useAtom } from "jotai";
import * as style from "./AnalysisLayout.style";

export default function TopLayout({ max }: TopLayoutProps) {
  const [recipeRatingList] = useAtom(RecipeRatingListAtom);

  return (
    <style.TopContainer>
      <style.Title>
        정확한 추천을 위해
        <br />
        음식을 평가해주세요
      </style.Title>
      <style.Count>
        {recipeRatingList.length} / {max}
      </style.Count>
    </style.TopContainer>
  );
}
