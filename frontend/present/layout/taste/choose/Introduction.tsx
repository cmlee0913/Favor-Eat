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
            <div>바깥은 위험합니다.</div>
            <div>모험을 함께 떠날</div>
            <div>친구를 선택하세요.</div>
          </p>
        </style.Introduction>
      </>
    )
  );
}
