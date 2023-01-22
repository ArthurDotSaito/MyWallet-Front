import styled from "styled-components";

export const WalletMainContainer = styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.8rem;
`

export const Date = styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 19px;
    color: #C6C6C6;
`
export const Description = styled.p`
    width: 100% ;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 19px;
    text-align: left;
    color: #000000;
    margin-left: 1rem;
`

export const Value = styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 19px;
    color: ${props =>props.type === 'income' ? '#03AC00' : '#C70000'};
`