import useModal from "@/action/hooks/useModal";
import { modalContentAtom, modalIsShowAtom } from "@/store/modalStore";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import * as style from "./ModalCompo.style";

export default function ModalCompo() {
  const { closeModal } = useModal();
  const [mounted, setMounted] = useState(false);
  const [isShow] = useAtom(modalIsShowAtom);
  const context = useAtomValue(modalContentAtom);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted && isShow
    ? createPortal(
        <style.Background
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}
        >
          <style.Container onClick={(e) => e.stopPropagation()}>
            {context}
          </style.Container>
        </style.Background>,
        document.getElementById("modal"),
      )
    : null;
}
