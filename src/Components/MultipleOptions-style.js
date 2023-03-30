import styled from "styled-components";

export const StyledMultipleAnswer = styled.div`
    width: 80%;
    display: block;
    margin-bottom: 16px;
    height: fit-content;
    

    * {
    margin-bottom: 10px;
    border-radius: 6px;
    background-color: rgb(247, 233, 206);
    display: flex;
    flex-direction: row;
    }

    p {
    margin-left: 16px;
    color: black;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
    }

    input {
        margin-left: 20px;
        transform: scale(2);
        justify-self: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`