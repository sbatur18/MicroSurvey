import styled from 'styled-components';

export const StyledButtonHolder = styled.div`
    display: flex;
    flex-direction: column;
    
    > button {
        margin-bottom: 12px;
        width: 30%;
        height: 35px;
        max-width: 90px;
        border-radius: 8px;
        border-style: solid;
        background-color: white;
        border-color: rgba(195, 82, 82, 0.888);
        align-self: center;
        font-weight: 700;
        color: rgba(195, 82, 82, 0.888);
    }

    .button-holder button:hover {
        cursor:pointer;
        background-color: rgba(195, 82, 82, 0.888);
        color: white;
    }
` 