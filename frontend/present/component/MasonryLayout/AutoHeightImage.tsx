import React from "react";
import Image, { ImageProps } from "next/legacy/image";

import { AutoHeightImageWrapper } from "./AutoHeightImage.styles";

const AutoHeightImage = ({ ...props }: ImageProps): React.ReactElement => (
  <AutoHeightImageWrapper>
    <Image priority layout="fill" className="autoImage" {...props} />
  </AutoHeightImageWrapper>
);

export default AutoHeightImage;
