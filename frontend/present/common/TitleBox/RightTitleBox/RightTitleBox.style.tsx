import styled from "styled-components";
import { theme } from "@/constant/theme";

export const RightTitleBox = styled.div`
  background-color: ${theme.colors.main.purple.dark_1};

  color: white;
  font-weight: bold;

  border: 1px solid ${theme.colors.mono.dark_3};

  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  height: auto;

  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 10px;

  div {
    :nth-child(1) {
      margin-left: 20px;
      font-size: 30px;
    }
    :nth-child(2) {
      margin-left: 20px;
      font-size: 18px;
    }
  }
`;
