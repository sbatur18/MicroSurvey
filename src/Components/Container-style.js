import styled from 'styled-components';

export const StyledContainer = styled.div`
    height: fit-content;
    display: grid;
    grid-template-columns: 0.1fr 0.9fr;
    border: 0;
    margin: 16px 16px;
    column-gap: 10px;

    > p {
        font-weight: 700;
    }
`