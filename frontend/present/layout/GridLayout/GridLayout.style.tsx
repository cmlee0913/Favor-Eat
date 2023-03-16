import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    width: 100%;
    gap: 3rem;

    & * {
        min-width: 0px;
    }
`