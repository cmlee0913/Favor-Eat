import { theme } from "@/action/theme";
import styled from "styled-components";

export const IngredientCompo = styled.div`
  background-color: #ffdce1;
  width: calc(100% - 4rem);
  border-radius: 1rem;
  padding: 2rem !important;
  margin: 2rem 0 !important;
`;

export const RecipeProcessCompo = styled.div``;

export const RecipeTabBody = styled.div`
  & h2 {
    display: none;
  }

  ${theme.devices.tablet} {
    display: block;
  }
`;

export const RecipeTabHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 1rem;
`;

export const Container = styled.div`
  & * {
    padding: 0;
    margin: 0;
  }
`;
