const arrPos = [
  [15, -130],
  [-190, 40],
  [20, -150],
  [-220, 50],
  [-50, -160],
];

const fontPos = [
  [-35, -160],
  [-178, 105],
  [-63, -183],
  [-210, 144],
  [-140, -187],
];

const ingArr = [249.85, 265.65, 210.22, 328, 187];

export function getCenterCoordinates(current, isTablet, isMobile) {
  current.map((elem, idx) => {
    console.log(elem);

    if (elem !== null) {
      // 중앙값 계산
      const { offsetWidth, offsetHeight } = elem;
      const offsetX = offsetWidth / 2;
      const offsetY = offsetHeight / 2;

      // 컴포넌트
      const imageStyle = elem.childNodes[0];
      const arrowStyle = elem.childNodes[1];
      const fontStyle = elem.childNodes[2].style;

      // 화면 별 이미지/화살표 크기
      if (isMobile) {
        //모바일
        //컴포넌트 너비
        elem.style.width = `auto`;
        elem.style.height = "5vh";

        imageStyle.style.width = '105%'

        //화살표
        arrowStyle.width = `${ingArr[idx] * offsetY * 0.012}`;
        arrowStyle.style.width = `${ingArr[idx] * offsetY * 0.012}px`;
        arrowStyle.style.left = `${
          offsetX + arrPos[idx][0] * offsetX * 0.01
        }px`;
        arrowStyle.style.top = `${offsetY + arrPos[idx][1] * offsetY * 0.01}px`;

        // 폰트
        fontStyle.left = `${offsetX + fontPos[idx][0] * offsetX * 0.01}px`;
        fontStyle.top = `${offsetY + fontPos[idx][1] * offsetY * 0.01}px`;
      } else if (isTablet) {
        //타블렛
        //컴포넌트 너비
        elem.style.width = `auto`;
        elem.style.height = "10vh";
        
        imageStyle.style.width = '110%'

        //화살표
        arrowStyle.width = `${ingArr[idx] * offsetY * 0.013}`;
        arrowStyle.style.width = `${ingArr[idx] * offsetY * 0.013}px`;
        arrowStyle.style.left = `${
          offsetX + arrPos[idx][0] * offsetX * 0.01
        }px`;
        arrowStyle.style.top = `${offsetY + arrPos[idx][1] * offsetY * 0.01}px`;

        // 폰트
        fontStyle.left = `${offsetX + fontPos[idx][0] * offsetX * 0.01}px`;
        fontStyle.top = `${offsetY + fontPos[idx][1] * offsetY * 0.01}px`;
      } else {
        //PC
        //컴포넌트 너비
        elem.style.width = `15vw`;
        elem.style.height = "auto";

        imageStyle.style.width = '100%'

        //화살표
        arrowStyle.width = `${ingArr[idx] * offsetY * 0.01}`;
        arrowStyle.style.idth = `${ingArr[idx] * offsetY * 0.01}px`;
        arrowStyle.style.left = `${
          offsetX + arrPos[idx][0] * offsetX * 0.01
        }px`;
        arrowStyle.style.top = `${offsetY + arrPos[idx][1] * offsetY * 0.01}px`;

        // 폰트
        fontStyle.left = `${offsetX + fontPos[idx][0] * offsetX * 0.01}px`;
        fontStyle.top = `${offsetY + fontPos[idx][1] * offsetY * 0.01}px`;
      }
    }
  });
}
