import styled from "styled-components";

export const IncomePageContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #8C11BE;

    h1{
        width: 90%;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 2rem;
        line-height: 31px;
        color: #FFFFFF;
        margin: 1.2rem;
    }
`

export const FieldArea = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Input = styled.input`
box-sizing: border-box;
width: 90%;
height: 45px;
padding: 10px;
margin: 20px 0px 0px 0px;
border: 1px solid #D5D5D5;
border-radius: 5px;
&::placeholder{
    font-family: 'Lexend Deca', sans-serif;
    font-size: 21px;
    line-height: 26px;
    font-weight: 400;
    color: #000000;
}
`

export const Button = styled.button`
width: 90%;
height: 45px;
background: #A328D6;
font-family: 'Raleway', sans-serif;
font-size: 21px;
line-height: 26px;
font-weight: 700;
border: none;
border-radius: 5px;
text-align: center;
color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
margin: 20px 0px 20px 0px;
cursor: pointer;
`