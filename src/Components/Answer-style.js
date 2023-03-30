import Answer from './Answer';
import styled from 'styled-components';

export const StyledAnswer = styled(Answer)`
    display: flex;
    flex-direction: column;
    min-height: 200px;
    height: 100%;

    > * {
        align-self: center;
    }

    > textarea {
        width: 80%;
        border-radius: 6px;
        background-color: rgb(247, 233, 206);
        border: 0;
    }

    > select {
        width: 80%;
        border-radius: 6px;
        background-color: rgb(247, 233, 206);
        border: 0;
        height: 45px;
    }  

    
`