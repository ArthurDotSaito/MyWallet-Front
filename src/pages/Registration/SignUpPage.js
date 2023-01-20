import axios from "axios";
import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { MainContainer,FieldArea,Input,Button } from "./SignUpPageStyle";

const SignUpPage = () =>{
    const navigate = useNavigate();
    const [registryForm, setRegistryForm] = React.useState({ name: "", email: "", password:"", confirmPassword:""});
    const [enableButton, setEnableButton] = React.useState(false);
    
    function handleFormInput(e){
        setRegistryForm({...registryForm, [e.target.name]: e.target.value})
    }

    function sendRegistryRequest(event){
        event.preventDefault();
        setEnableButton(true);
        const registryPromise = axios.post(`{process.env.API_URL}/signup`, registryForm);
        registryPromise.then((response) => {
            setEnableButton(false);
            navigate("/home");
        })
        registryPromise.catch((response) =>{
            alert(response.response.data.message);
            setEnableButton(false);
        })
    }

    return(
        <MainContainer>
            <h1>My Wallet</h1>
            <FieldArea onSubmit={sendRegistryRequest}>
                <Input
                    type="name"
                    value={registryForm.name}
                    placeholder="Nome"
                    disabled={enableButton}
                    onChange={handleFormInput}
                    required>
                </Input>
                <Input
                    type="email"
                    value={registryForm.email}
                    placeholder="E-mail"
                    disabled={enableButton}
                    onChange={handleFormInput}
                    required>
                </Input>
                <Input
                    type="password"
                    value={registryForm.password}
                    placeholder="Senha"
                    disabled={enableButton}
                    onChange={handleFormInput}
                    required>
                </Input>
                <Input
                    type="password"
                    value={registryForm.password}
                    placeholder="Confirme sua senha"
                    disabled={enableButton}
                    onChange={handleFormInput}
                    required>
                </Input>
                <Button
                type="submit"
                >{(!enableButton) ? "Cadastrar" :
                <ThreeDots
                    width="13"
                    height="13"
                    radius="9"
                    color='FFFFFF'></ThreeDots>}</Button>
            </FieldArea>
            <Link to="/">
                <p>Já tem uma conta? Entre Agora!</p>
            </Link>
        </MainContainer>
    )
}

export default SignUpPage;