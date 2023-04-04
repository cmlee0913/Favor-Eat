import { theme } from "@/constant/theme";
import { hoverTypeAtom, isHoverAtom } from "@/store/hoverStore";
import {
  HoverInfoCompoProps,
  HoverInfoObject,
  LevelContent,
} from "@/types/HoverInfoCompo/dummy";
import { useAtomValue } from "jotai";
import * as style from "./HoverInfoCompo.style";

export const hoverInfo: HoverInfoObject = {
  spicy: [
    {
      level: 1,
      foodName: "삼양라면",
      color: theme.colors.characterLevel.spicy.level_1,
    },
    {
      level: 2,
      foodName: "진라면",
      color: theme.colors.characterLevel.spicy.level_2,
    },
    {
      level: 3,
      foodName: "신라면",
      color: theme.colors.characterLevel.spicy.level_3,
    },
    {
      level: 4,
      foodName: "불닭 볶음면",
      color: theme.colors.characterLevel.spicy.level_4,
    },
    {
      level: 5,
      foodName: "열라면",
      color: theme.colors.characterLevel.spicy.level_5,
    },
  ],
  salty: [
    {
      level: 1,
      foodName: "토마토",
      color: theme.colors.characterLevel.salty.level_1,
    },
    {
      level: 2,
      foodName: "샌드위치",
      color: theme.colors.characterLevel.salty.level_2,
    },
    {
      level: 3,
      foodName: "비빔밥",
      color: theme.colors.characterLevel.salty.level_3,
    },
    {
      level: 4,
      foodName: "된장찌개",
      color: theme.colors.characterLevel.salty.level_4,
    },
    {
      level: 5,
      foodName: "짬뽕",
      color: theme.colors.characterLevel.salty.level_5,
    },
  ],
  sweet: [
    {
      level: 1,
      foodName: "녹차",
      color: theme.colors.characterLevel.sweet.level_1,
    },
    {
      level: 2,
      foodName: "딸기",
      color: theme.colors.characterLevel.sweet.level_2,
    },
    {
      level: 3,
      foodName: "푸딩",
      color: theme.colors.characterLevel.sweet.level_3,
    },
    {
      level: 4,
      foodName: "파인애플",
      color: theme.colors.characterLevel.sweet.level_4,
    },
    {
      level: 5,
      foodName: "벌꿀",
      color: theme.colors.characterLevel.sweet.level_5,
    },
  ],
  oily: [
    {
      level: 1,
      foodName: "닭가슴살",
      color: theme.colors.characterLevel.oily.level_1,
    },
    {
      level: 2,
      foodName: "생선",
      color: theme.colors.characterLevel.oily.level_2,
    },
    {
      level: 3,
      foodName: "아보카도",
      color: theme.colors.characterLevel.oily.level_3,
    },
    {
      level: 4,
      foodName: "치킨",
      color: theme.colors.characterLevel.oily.level_4,
    },
    {
      level: 5,
      foodName: "삼겹살",
      color: theme.colors.characterLevel.oily.level_5,
    },
  ],
};

export default function HoverInfoCompo({ isColumn }: HoverInfoCompoProps) {
  const hoverType = useAtomValue(hoverTypeAtom);

  return (
    <>
      <style.Container isColumn={isColumn}>
        {hoverInfo[hoverType].map((level: LevelContent) => (
          <div>
            <style.LevelCircle color={level.color}>
              <span>{level.level}</span>
            </style.LevelCircle>
            <style.LevelFood>{level.foodName}</style.LevelFood>
          </div>
        ))}
      </style.Container>
    </>
  );
}
