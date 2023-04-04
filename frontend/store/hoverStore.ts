import { FlavorType } from "@/types/RecipeFlavor/dummy";
import { atom } from "jotai";

export const hoverTypeAtom = atom<FlavorType>("spicy");
export const isHoverAtom = atom<boolean>(false);
