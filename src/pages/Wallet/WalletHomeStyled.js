import styled from "styled-components";

export const HomePageContainer = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    background: #8C11BE;
`

export const HomePageHeader = styled.header`
    width: 90%;
    height: 10%;
    color: #FFFFFF;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        text-transform: capitalize;
    }
`

export const ButtonsFooterContainer = styled.footer`
    width: 90%;
    height: 15%;
    display: flex;
    a{
        width: 90%;
        display: flex;
        justify-content: space-around;
    }
`