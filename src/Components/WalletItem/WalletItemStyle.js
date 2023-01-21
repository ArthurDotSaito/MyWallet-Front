import styled from "styled-components";

export const WalletMainContainer = styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Date = styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;
`
export const Description = styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
`

export const Value = styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${props =>props.type === 'addValue' ? '#03AC00' : '#C70000'};
`