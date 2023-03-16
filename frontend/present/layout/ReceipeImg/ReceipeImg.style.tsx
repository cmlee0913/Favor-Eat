import styled from "styled-components";

export const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.8rem;
  height: 25vh;
  margin-top: 0.4rem;

  & img {
    height: inherit;
  }
`;

export const Container = styled.div`
  & img {
    width: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }

  & #mainImg {
    height: 60vh;
  }
`;
