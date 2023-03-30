import styled from 'styled-components';

export const StyledButton = styled.button`
    margin-top: 12px;
    margin-bottom: 12px;
    width: ${(props) => props.width};;
    height: 30px;
    background-color: rgba(195, 82, 82, 0.888);
    border: 3;
    border-radius: 8px;
    align-self: center;
    color: white;
    border-color: white;
    border-style: solid;
    font-weight:700;
    margin-right: ${(props) => props.right};
    opacity: ${(props) => props.error};

    :hover {
        cursor:pointer;
        background-color: white;
        color: rgba(195, 82, 82, 0.888);
    }
    
`