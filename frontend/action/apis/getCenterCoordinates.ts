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

export function getCenterCoordinates(current) {
  current.map((elem, idx) => {
    // 중앙값 계산
    const { offsetWidth, offsetHeight } = elem;
    const offsetX = offsetWidth / 2;
    const offsetY = offsetHeight / 2;

    // 화살표
    const arrowStyle = elem.childNodes[1];
    arrowStyle.width = `${ingArr[idx] * offsetY * 0.01}`;
    arrowStyle.style.left = `${offsetX + arrPos[idx][0] * offsetX * 0.01}px`;
    arrowStyle.style.top = `${offsetY + arrPos[idx][1] * offsetY * 0.01}px`;

    // 폰트
    const fontStyle = elem.childNodes[2].style;
    fontStyle.left = `${offsetX + fontPos[idx][0] * offsetX * 0.01}px`;
    fontStyle.top = `${offsetY + fontPos[idx][1] * offsetY * 0.01}px`;
  });
}
