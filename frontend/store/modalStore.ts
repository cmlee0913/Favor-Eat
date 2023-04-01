import { atom } from "jotai";

export const modalIsShowAtom = atom(false);
export const modalContentAtom = atom<JSX.Element>(<></>);
