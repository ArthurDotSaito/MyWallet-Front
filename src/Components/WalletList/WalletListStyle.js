import styled from "styled-components";

export const WalletContainer = styled.main`
    width: 90%;
    min-height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:${props =>props.walletIsEmpty ? "space aroung": "center"};
    background: #FFFFFF;
    padding: 2rem 1rem 1rem;
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