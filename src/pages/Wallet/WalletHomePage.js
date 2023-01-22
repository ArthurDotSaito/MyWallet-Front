import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
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
                    size={100}
                    color={"#FFFFFF"}
                    onClick={logout}
                    style={{cursor:'pointer'}}>
                </LogOutOutline>
            </HomePageHeader>
            <WalletList></WalletList>
            <ButtonsFooterContainer>
                <Link to='/nova-entrada'>
                    <WalletButton type='income' onClick={() => navigate("/nova-entrada")}></WalletButton>
                </Link>
                <Link to='/nova-saida'>
                    <WalletButton type='outcome'></WalletButton>
                </Link>
            </ButtonsFooterContainer>
        </HomePageContainer>
    )
}

export default WalletHomePage;