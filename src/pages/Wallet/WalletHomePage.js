import React from "react";
import axios from 'axios';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { HomePageContainer, HomePageHeader } from "./WalletHomeStyled";
import { LogOutOutline } from 'react-ionicons'
import { WalletList } from "../../Components/WalletList/WalletList";

const WalletHomePage = () =>{
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    function logout(){
        localStorage.removeItem("user");
        setUser(null)
        navigate("/");
    }

    return(
        <HomePageContainer>
            <HomePageHeader>
                <h1> Olá, {user.name}</h1>
                <LogOutOutline
                    color={"#FFFFFF"}
                    heigth="40px"
                    width="40px"
                    onClick={logout}
                    style={{cursor:'pointer'}}>
                </LogOutOutline>
            </HomePageHeader>
            <WalletList></WalletList>
        </HomePageContainer>
    )
}

export default WalletHomePage;