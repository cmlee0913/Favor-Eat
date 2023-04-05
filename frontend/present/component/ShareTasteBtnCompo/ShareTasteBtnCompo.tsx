import { useRouter } from "next/router";
import * as style from "./ShareTasteBtnCompo.style";

export default function ShareTasteBtnCompo() {
  const router = useRouter();

  const onClick = () => {
    router.push("/share/choose");
  };
  return (
    <style.Container>
      <style.GuideText>
        나는
        <br />
        으른 입맛일까?
      </style.GuideText>
      <style.ButtonWrapper onClick={onClick}>
        <div className="PC">내 입맛 알아보기</div>
        <div className="Mobile">
          내 입맛
          <br />
          알아보기
        </div>
      </style.ButtonWrapper>
    </style.Container>
  );
}
