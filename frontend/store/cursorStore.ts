import { atom } from "jotai";
import { StaticImageData } from "next/image";
import defaultImage from "@/assets/image/default-image.png";

export const cursorIsShowAtom = atom<boolean>(false);
export const cursorImageAtom = atom<StaticImageData>(defaultImage);
