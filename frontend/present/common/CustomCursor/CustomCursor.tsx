import useMouseMove from "@/action/hooks/useMouseMove";
import { cursorImageAtom, cursorIsShowAtom } from "@/store/cursorStore";
import { useAtom } from "jotai";
import Image from "next/image";
import * as style from "./CustomCursor.style";

export default function CustomCursor() {
  const { x, y } = useMouseMove();
  const [isShow] = useAtom(cursorIsShowAtom);
  const [cursorImage] = useAtom(cursorImageAtom);

  return (
    <>
      {isShow ? (
        <style.Cursorwrapper x={x} y={y}>
          <Image src={cursorImage} alt="image custom cursor" />
        </style.Cursorwrapper>
      ) : null}
    </>
  );
}
