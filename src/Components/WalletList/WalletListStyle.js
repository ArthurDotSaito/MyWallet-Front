import styled from "styled-components";

export const WalletContainer = styled.section`
    width: 90%;
    min-height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:${props =>props.walletIsEmpty ? "space between": "center"};
    background: #FFFFFF;
    padding: 2rem 1rem 1rem;
    margin: 1rem 1rem;
    border-radius: 0.5rem;
    text-align: center;
    & > p {
    width: 10rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    line-height: 24px;
    color:#868686;
  }
`

export const WalletTransactions = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;

`