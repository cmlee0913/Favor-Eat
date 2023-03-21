import { useState, useEffect } from "react";
import * as style from "./Taste.style";

export default function Introduction() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <>
        <style.Introduction>
          <p className="Introduction">
            <p>바깥은 위험합니다.</p>
            <p>모험을 함께 떠날</p>
            <p>친구를 선택하세요.</p>
          </p>
          <p className="Introduction">second</p>
          <p className="Introduction">third</p>
          <p className="Introduction">fourth</p>
        </style.Introduction>
      </>
    )
  );
}
