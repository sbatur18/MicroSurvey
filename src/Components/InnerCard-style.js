import styled from 'styled-components';

export const StyledInnerCard = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #C35252;
    width: ${(props) => props.width};
    max-width: ${(props) => props.maxwidth};
    height: ${(props) => props.height};
    justify-self: ${(props) => props.justify};

    > h2 {
        margin-left: 24px;
        margin-right: 24px;
        margin-top: 16px;
        font-size: 24px;
        font-weight: 600;
        color: white;
        font-family: "Quicksand";
    }

    > p {   
        margin-left: 24px;
        font-size: 16px;
        font-weight: 400;
        font-family: "Quicksand";
    }
`