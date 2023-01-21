import axios from "axios";
import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { MainContainer,FieldArea,Input,Button } from "./SignUpPageStyle";

const SignUpPage = () =>{
    const navigate = useNavigate();
    const [registryForm, setRegistryForm] = React.useState({ name: "", email: "", password:"", confirmPassword:""});
    const [enableButton, setEnableButton] = React.useState(false);
    
    function RegisterHandleInput(e){
        setRegistryForm({ ...registryForm, [e.target.name]: e.target.value});
    }

    function sendRegistryRequest(event){
        event.preventDefault();
        setEnableButton(true);
        const passwordMatch = registryForm.password === registryForm.confirmPassword;
        if(!passwordMatch){
            alert("Senha e confirmação devem ser iguais.")
            setEnableButton(false);
        }else{
            const registryPromise = axios.post(`http://localhost:5000/signup`, registryForm);
            registryPromise.then((response) => {
                setEnableButton(false);
                navigate("/");
            })
            registryPromise.catch((response) =>{
                alert(response.response.data.message);
                setEnableButton(false);
            })
        }
    }

    return(
        <MainContainer>
            <h1>My Wallet</h1>
            <FieldArea onSubmit={sendRegistryRequest}>
                <Input
                    type="text"
                    name="name"
                    value={registryForm.name}
                    placeholder="Nome"
                    disabled={enableButton}
                    onChange={RegisterHandleInput}
                    required>
                </Input>
                <Input
                    type="email"
                    name="email"
                    value={registryForm.email}
                    placeholder="E-mail"
                    disabled={enableButton}
                    onChange={RegisterHandleInput}
                    required>
                </Input>
                <Input
                    type="password"
                    name="password"
                    value={registryForm.password}
                    placeholder="Senha"
                    disabled={enableButton}
                    onChange={RegisterHandleInput}
                    required>
                </Input>
                <Input
                    type="password"
                    name="confirmPassword"
                    value={registryForm.confirmPassword}
                    placeholder="Confirme sua senha"
                    disabled={enableButton}
                    onChange={RegisterHandleInput}
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