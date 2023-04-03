import { ResultLayoutProps } from "@/types/Share/Result/dummy";
import Image from "next/image";
import KakaoLogo from "@/assets/icon/kakao-logo.svg";
import * as style from "./ResultLayout.style";

export default function ResultLayout({
  resultContents,
  likedCount,
  maxCount,
}: ResultLayoutProps) {
  const { resultIcon, title, text } = resultContents;

  return (
    <style.Container>
      <style.ContentBox>
        <span>테스트 결과</span>
        <div>
          <Image src={resultIcon} alt="테스트 결과" />
        </div>
        <span>{title}</span>
        <div>
          {maxCount}개 중 {likedCount ? likedCount : 0}
          {text}
        </div>
      </style.ContentBox>
      <style.ButtonBox>
        <div>
          <KakaoLogo />
          친구에게 공유하기
        </div>
        <div>로그인 하러가기</div>
      </style.ButtonBox>
    </style.Container>
  );
}
