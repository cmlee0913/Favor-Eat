import React from "react";
import Image, { ImageProps } from "next/legacy/image";

import { AutoHeightImageWrapper } from "./AutoHeightImage.styles";

const AutoHeightImage = ({
  ...props
}: ImageProps): React.ReactElement | null => {
  if (!props.src) {
    return null;
  }
  return (
    <AutoHeightImageWrapper>
      <Image
        style={{ borderRadius: "20px", display: "flex" }}
        priority
        layout="fill"
        className="autoImage"
        {...props}
      />
    </AutoHeightImageWrapper>
  );
};

export default AutoHeightImage;
