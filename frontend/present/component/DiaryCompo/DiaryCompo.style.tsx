import styled from "styled-components";
import { theme } from "@/constant/theme";

export const DiaryHeader = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e2e2e2;
`;

export const ControlMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DiaryItemContainer = styled.div`
  padding: 15px 0 15px;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
`;

export const Button = styled.div`
  background-color: ${theme.colors.main.purple.dark_4};
  color: ${theme.colors.mono.light_1};

  padding: 0.5rem 1rem;
  border-radius: 2rem;

  font-family: "Pretendard-Bold";
  font-size: 1.2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
