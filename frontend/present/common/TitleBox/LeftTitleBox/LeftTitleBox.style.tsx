import styled from "styled-components";
import { theme } from "@/constant/theme";

export const LeftTitleBox = styled.div`
  background-color: ${theme.colors.background.violet};

  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  height: auto;
  padding: 10px;

  div {
    :nth-child(1) {
      margin-left: 20px;
      margin-bottom: 5px;
      font-size: 34px;
      font-family: "Pretendard-Bold";
    }
    :nth-child(2) {
      margin-left: 20px;
      font-size: 24px;
      font-family: "Pretendard-semiBold";
    }
  }
`;
