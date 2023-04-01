import { modalIsShowAtom } from "@/store/modalStore";
import { useSetAtom } from "jotai";

export default function useModal() {
  const setIsShow = useSetAtom(modalIsShowAtom);

  const openModal = () => {
    setIsShow(true);
  };
  const closeModal = () => {
    setIsShow(false);
  };

  return { openModal, closeModal };
}
