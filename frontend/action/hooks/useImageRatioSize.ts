import { useState, useEffect } from "react";

export default function useImageRatioSize(
  src: string,
  maxWidth: number,
  maxHeight: number,
) {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      let { width, height } = img;
      const value = Math.min(maxWidth / width, maxHeight / height);

      setSize({ width: width, height: height });
      setRatio(value);
    };
    img.src = src;
    return;
  }, [src, maxWidth]);

  return {
    width: size.width * ratio,
    height: size.height * ratio,
  };
}
