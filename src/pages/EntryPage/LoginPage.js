import React, { useContext } from "react";
import axios from 'axios';
import {ThreeDots } from 'react-loader-spinner'
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, MainContainer,FieldArea, SignUp } from './LoginPageStyled';
import { UserContext } from "../../context/UserContext";

const LoginPage = () => {
    const navigate = useNavigate();
    const [enableLogin, setEnableLogin] = React.useState(false)
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const {setUser} = useContext(UserContext); 
    
    function sendLoginRequest(event){
        event.preventDefault();
        setEnableLogin(true);
        const loginData = {email:email, password:password}
        const loginPromise = axios.post(`{process.env.API_URL}/signin`, loginData);
        loginPromise.then((response) => {
            setUser(response.data);
            setEnableLogin(false);
            localStorage.setItem('token', JSON.stringify(response.data))
            navigate("/home");
        })
        loginPromise.catch((response) =>{
            alert(response.response.data.message);
            setEnableLogin(false);
        })
    }

    return(
        <MainContainer>
            <h1>MyWallet</h1>
            <FieldArea onSubmit={sendLoginRequest}>
                <Input
                    type="email"
                    value={email}
                    placeholder="E-mail"
                    disabled={enableLogin}
                    onChange={(event) => setEmail(event.target.value)}
                    required>
                </Input>
                <Input
                    type="password"
                    value={password}
                    placeholder="Password"
                    disabled={enableLogin}
                    onChange={(event) => setPassword(event.target.value)}
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