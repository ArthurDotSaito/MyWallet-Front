import React, { useContext } from "react";
import axios from 'axios';
import {ThreeDots } from 'react-loader-spinner'
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, MainContainer,FieldArea, SignUp } from './LoginPageStyled';
import { UserContext } from "../../context/UserContext";
import { loginRequest } from "../../API/loginRequest";

const LoginPage = () => {
    const navigate = useNavigate();
    const [enableLogin, setEnableLogin] = React.useState(false);
    const [loginForm, setLoginForm] = React.useState({ email: "", password: ""});
    const {setUser} = useContext(UserContext); 
    
    function loginHandleInput(e){
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value});
    }

    function sendLoginRequest(event){
        event.preventDefault();
        setEnableLogin(true);
        
        const loginPromise = loginRequest(loginForm);
        loginPromise.then((response) => {
            setUser(response.data);
            setEnableLogin(false);
            localStorage.setItem('token', JSON.stringify(response.data))
            navigate("/home");
        })
        loginPromise.catch((response) =>{
            alert(response.data.message);
            setEnableLogin(false);
        })
    }

    return(
        <MainContainer>
            <h1>MyWallet</h1>
            <FieldArea onSubmit={sendLoginRequest}>
                <Input
                    type="email"
                    name="email"
                    value={loginForm.email}
                    placeholder="E-mail"
                    disabled={enableLogin}
                    onChange={loginHandleInput}
                    required>
                </Input>
                <Input
                    type="password"
                    name="password"
                    value={loginForm.password}
                    placeholder="Password"
                    disabled={enableLogin}
                    onChange={loginHandleInput}
                    required>
                </Input>
                <Button
                type='submit'
                disabled={enableLogin}>{(!enableLogin) ? "Entrar" :
                <ThreeDots
                    width="13"
                    height="13"
                    radius="9"
                    color='FFFFFF'></ThreeDots>}
                </Button>
            </FieldArea>
            <Link to='/cadastro'>
                <SignUp>Primeira Vez? Cadastre-se!</SignUp>
            </Link>      
        </MainContainer>
    )
}

export default LoginPage;