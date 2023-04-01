import useModal from "@/action/hooks/useModal";
import { modalIsShowAtom } from "@/store/modalStore";
import { useAtom, useAtomValue } from "jotai";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import * as style from "./ModalCompo.style";

interface ModalCompoProps {
  context?: ReactNode;
}

export default function ModalCompo({ context }: ModalCompoProps) {
  const { closeModal } = useModal();
  const [mounted, setMounted] = useState(false);
  const [isShow, setIsShow] = useAtom(modalIsShowAtom);

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
