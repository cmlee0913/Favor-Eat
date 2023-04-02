import { ResponsivePie } from "@nivo/pie";
import { theme } from "@/constant/theme";
import useMediaQuery from "@/action/hooks/useMediaQuery";

import * as styles from "./PieChart.styles";
import { MainNutrient } from "@/types/Recipe/dummy";

const CenteredMetric = ({
  centerX,
  centerY,
  // calorie,
  // moisture,
  //   radius,
  //   innerRadius,
  //   arcGenerator,
}) => {
  const isTablet = useMediaQuery("(min-width: 769px)");
  const isPhone = useMediaQuery("(min-width: 426px)");

  // console.log(`${isTablet}`);
  // console.log(`${isPhone}`);

  let titleCoordinateY = centerY - 40;
  let subTitleCoordinateY = centerY + 40;
  let titleFont = 24;
  let subTitleFont = 20;

  `${
    isTablet && isPhone
      ? (titleCoordinateY = centerY - 40)
      : `${
          !isTablet && isPhone
            ? (titleCoordinateY = centerY - 20)
            : (titleCoordinateY = centerY - 10)
        }`
  }`;

  `${
    isTablet && isPhone
      ? (subTitleCoordinateY = centerY + 40)
      : `${
          !isTablet && isPhone
            ? (subTitleCoordinateY = centerY + 20)
            : (subTitleCoordinateY = centerY + 10)
        }`
  }`;

  `${
    isTablet && isPhone
      ? (titleFont = 24)
      : `${!isTablet && isPhone ? (titleFont = 15) : (titleFont = 5)}`
  }`;

  `${
    isTablet && isPhone
      ? (subTitleFont = 20)
      : `${!isTablet && isPhone ? (subTitleFont = 10) : (subTitleFont = 5)}`
  }`;

  return (
    <>
      <text
        x={centerX}
        y={`${titleCoordinateY}`}
        textAnchor="middle"
        style={{
          fontSize: `${titleFont}`,
          fontWeight: 600,
        }}
      >
        총 영양 비율
      </text>
      <text
        x={centerX}
        y={centerY}
        textAnchor="middle"
        style={{
          fontSize: `${subTitleFont}`,
          fontWeight: 600,
        }}
      >
        총 칼로리 : {500}kcal
      </text>
      <text
        x={centerX}
        y={`${subTitleCoordinateY}`}
        textAnchor="middle"
        style={{
          fontSize: `${subTitleFont}`,
          fontWeight: 600,
        }}
      >
        수분 : {500}g
      </text>
    </>
  );
};

const Piechart = ({
  calorie,
  moisture,
  protein,
  fat,
  carbohydrate,
}: MainNutrient) => {
  const handle = {
    padClick: (data: any) => {
      console.log(data);
    },

    legendClick: (data: any) => {
      console.log(data);
    },
  };

  const isTablet = useMediaQuery("(min-width: 769px)");
  const isPhone = useMediaQuery("(min-width: 426px)");

  let labelFontSize = 20;
  `${
    isTablet && isPhone
      ? (labelFontSize = 20)
      : `${!isTablet && isPhone ? (labelFontSize = 12) : (labelFontSize = 8)}`
  }`;

  let legendFontSize = 20;
  `${
    isTablet && isPhone
      ? (legendFontSize = 20)
      : `${!isTablet && isPhone ? (legendFontSize = 12) : (legendFontSize = 8)}`
  }`;

  let coordinateLegend = 100;
  `${
    isTablet && isPhone
      ? (coordinateLegend = 100)
      : `${
          !isTablet && isPhone
            ? (coordinateLegend = 50)
            : (coordinateLegend = 80)
        }`
  }`;

  let legendHeight = 30;
  `${
    isTablet && isPhone
      ? (legendHeight = 30)
      : `${!isTablet && isPhone ? (legendHeight = 20) : (legendHeight = 10)}`
  }`;

  let symbolSize = 25;
  `${
    isTablet && isPhone
      ? (symbolSize = 25)
      : `${!isTablet && isPhone ? (symbolSize = 10) : (symbolSize = 5)}`
  }`;

  return (
    // chart height이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
    <styles.Wrapper className="PieChart">
      <ResponsivePie
        // 더미 데이터 ( 반응형으로 변경 )
        data={[
          { id: "탄수화물", value: carbohydrate },
          { id: "단백질", value: protein },
          { id: "지방", value: fat },
        ]}
        /*
         * BASE OPTION
         */
        // Pie Chart의 여백
        margin={{ top: 20, right: 120, bottom: 20, left: 0 }}
        // 중앙의 빈 공간 지름
        innerRadius={0.75}
        // 각 항목 간 간격의 길이 조절
        padAngle={1.5}
        // 각 항목의 둥글기
        cornerRadius={30}
        /*
         * STYLE OPTION
         */
        // 각 항목의 색상
        colors={[
          `${theme.colors.main.skyblue}`,
          `${theme.colors.main.yellow}`,
          `${theme.colors.main.red}`,
        ]}
        // 각 항목 border의 두께 조절
        borderWidth={0}
        /*
         *  ARC LABELS OPTION
         */
        // 각 항목의 각도가 너무 작다면 skip한다.
        arcLabelsSkipAngle={10}
        /*
         *  ARC LINK LABELS OPTION
         */
        // ArcLinkLabels를 사용하지 않는다.
        enableArcLinkLabels={false}
        /*
         *  CUSTOMIZATION OPTION
         */
        // CenteredMetric 사용을 위한 layers
        layers={[
          "arcs",
          "arcLabels",
          "arcLinkLabels",
          "legends",
          CenteredMetric,
        ]}
        /*
         *  INTERACTIVITY OPTION
         */
        // 항목에 mouseover시 커지는 안쪽 반경
        activeInnerRadiusOffset={10}
        // 항목에 mouseover시 커지는 바깥쪽 반경
        activeOuterRadiusOffset={10}
        // tooltip custom
        tooltip={({ datum: { id, value, color } }) => (
          <div
            style={{
              borderRadius: 25,
              padding: 12,
              color,
              background: "#333333",
            }}
          >
            <strong>
              {id} 함량은 {value}g 입니다.
            </strong>
          </div>
        )}
        /*
         *  LEGEND OPTION
         */
        legends={[
          {
            anchor: "top-right", // 위치
            direction: "column", // item 그려지는 방향
            justify: false, // 글씨, 색상간 간격 justify 적용 여부
            translateX: coordinateLegend, // chart와 X 간격
            translateY: 0, // chart와 Y 간격
            itemWidth: 100, // item width
            itemHeight: legendHeight, // item height
            itemsSpacing: 0, // item간 간격
            symbolSize: symbolSize, // symbol (색상 표기) 크기
            itemDirection: "right-to-left", // item 내부에 그려지는 방향
            itemOpacity: 1, // item opacity
            symbolShape: "square", // symbol (색상 표기) 모양

            effects: [
              {
                // 추가 효과 설정 (hover하면 textColor를 olive로 변경)
                on: "hover",
                style: {
                  itemTextColor: "gray",
                },
              },
            ],
            onClick: handle.legendClick, // legend 클릭 이벤트
          },
        ]}
        theme={{
          /**
           * label style (pad에 표현되는 글씨)
           */
          labels: {
            text: {
              fontSize: `${labelFontSize}`,
              fill: "#000000",
            },
          },
          /**
           * legend style (default로 하단에 있는 색상별 key 표시)
           */
          legends: {
            text: {
              fontSize: `${legendFontSize}`,
              fill: "#000000",
            },
          },
        }}
        /**
         * pad 클릭 이벤트
         */
        onClick={handle.padClick}
      />
    </styles.Wrapper>
  );
};

export default Piechart;
