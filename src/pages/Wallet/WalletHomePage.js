import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { HomePageContainer, HomePageHeader,ButtonsFooterContainer } from "./WalletHomeStyled";
import { LogOutOutline } from 'react-ionicons'
import { WalletList } from "../../Components/WalletList/WalletList";
import { WalletButton } from "../../Components/WalletButton/WalletButton";

const WalletHomePage = () =>{
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    console.log(user)

    function logout(){
        localStorage.removeItem("token");
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
            <ButtonsFooterContainer>
                <WalletButton type='income'></WalletButton>
                <WalletButton type='outcome'></WalletButton>
            </ButtonsFooterContainer>
        </HomePageContainer>
    )
}

export default WalletHomePage;