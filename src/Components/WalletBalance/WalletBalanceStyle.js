import styled from "styled-components";

export const BalanceWalletContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  
  h1{
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 19px;
    color:#000000;
  }
`

export const Value = styled.p`
    width: 100% ;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 19px;
    text-align: right;
    color : ${props => props.isPositive ? '#03AC00' : '#C70000'};
    margin-left: 1rem;
  
`