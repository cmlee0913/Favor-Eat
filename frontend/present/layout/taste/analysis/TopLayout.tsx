import { TopLayoutProps } from "@/types/Taste/dummy";
import * as style from "./AnalysisLayout.style";

export default function TopLayout({ count, max }: TopLayoutProps) {
  return (
    <style.TopContainer>
      <style.Title>
        정확한 추천을 위해
        <br />
        음식을 평가해주세요
      </style.Title>
      <style.Count>
        {count} / {max}
      </style.Count>
    </style.TopContainer>
  );
}
