import useImageRatioSize from "@/action/hooks/useImageRatioSize";
import useWindowDimensions from "@/action/hooks/useWindowSize";
import * as style from "./FlipImageCardCompo.style";

export default function FilpImageCardCompo({
  imgSrc,
  foodName,
  flavor,
  contents,
}) {
  const windowSize = useWindowDimensions();
  const { width, height } = useImageRatioSize(
    imgSrc,
    windowSize.width * 0.22,
    windowSize.height * 0.48,
  );

  return (
    <style.Container>
      <style.CardWrapper width={width} height={height}>
        <style.Card className="card">
          <style.Front className="front">
            <img src={imgSrc} />
          </style.Front>
          <style.Back className="back">
            <style.FoodFlexBox>
              <style.FlexItem>
                <style.FoodName>{foodName}</style.FoodName>
                <span>{flavor.type}</span>
                <span>{flavor.value}</span>
              </style.FlexItem>
              {contents.map((item) => (
                <style.FlexItem key={item.key}>
                  <style.ContentName>{item.key}</style.ContentName>
                  <span>{item.value}</span>
                </style.FlexItem>
              ))}
            </style.FoodFlexBox>
          </style.Back>
        </style.Card>
      </style.CardWrapper>
    </style.Container>
  );
}
