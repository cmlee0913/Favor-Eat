import styled from "styled-components";
import { theme } from "@/constant/theme";

export const RightTitleBox = styled.div`
  background-color: ${theme.colors.main.purple.dark_1};

  color: white;

  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  height: auto;

  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 10px;

  div {
    :nth-child(1) {
      margin-left: 20px;
      font-size: 34px;
      font-family: "Pretendard-Bold";
    }
    :nth-child(2) {
      margin-left: 20px;
      font-size: 18px;
      /* RightTitleBox "보험"입니다. */
      /* 두번째 적을 글이 필요하면 이걸 사용하시오 */
    }
  }
`;
