import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

export default function useMouseMove() {
  const [mouseLocation, setMouseLocation] = useState({ x: null, y: null });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMouseLocation({ x: e.clientX + 20, y: e.clientY + 20 });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return mouseLocation;
}
