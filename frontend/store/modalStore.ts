import { atom } from "jotai";
import { ReactNode } from "react";

export const modalIsShowAtom = atom(false);
export const modalContentAtom = atom<ReactNode>(null);
