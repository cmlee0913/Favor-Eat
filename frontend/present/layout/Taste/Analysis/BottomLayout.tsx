import { sendFirstRecipeTasteValue } from "@/action/apis/taste";
import Button from "@/present/common/Button/Button";
import { recipeRatingListAtom } from "@/store/tasteStore";
import { userTokenSave } from "@/store/userStore";
import { BottomLayoutProps } from "@/types/Taste/dummy";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import * as style from "./AnalysisLayout.style";

export default function BottomLayout({
  canGoMain,
  evaluatedCount,
}: BottomLayoutProps) {
  const [recipeRatingList] = useAtom(recipeRatingListAtom);
  const [token, setUserToken] = useAtom(userTokenSave);

  const router = useRouter();

  const onClickStop = async () => {
    const { isSuccess, result } = await sendFirstRecipeTasteValue(
      recipeRatingList,
      token.accessToken,
    );

    if (isSuccess) {
      const newAccessToken = result;
      setUserToken({
        accessToken: newAccessToken,
        refreshToken: token.refreshToken,
      });
      router.push("/main");
    }
  };
  return (
    <>
      {canGoMain ? (
        <>
          <Button context="맛 평가 종료하기" handler={onClickStop} />
        </>
      ) : (
        <style.BottomContainer>
          "Birth와 Death 사이에 Choose가 있다는 것을 기억하세요.
          <br />
          하지만 음식을 고르는 것은 때로 용감함을 필요로 합니다."
          <br />
          -ChatGPT-
        </style.BottomContainer>
      )}
    </>
  );
}
