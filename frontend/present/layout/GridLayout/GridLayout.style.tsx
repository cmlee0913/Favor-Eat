import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    width: calc(100% - 3rem);
    gap: 3rem;
    padding: 1rem 1.5rem;

    & * {
        min-width: 0px;
    }
`