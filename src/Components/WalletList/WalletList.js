import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { getWalletList } from "../../API/getWalletList";
import { UserContext } from "../../context/UserContext"
import { WalletContainer } from "./WalletListStyle";

export const WalletList = () =>{
    const navigate = useNavigate()
    const { user } = useContext(UserContext);
    const [userData, setUserData] = React.useState(undefined)
    const [isLoading, setIsLoading] = React.useState(false)
    console.log(user);
    console.log(user.token);

    useEffect(() => {
        setIsLoading(true);
        getWalletList(user.token)
            .then((response) => {
              console.log(response);
              setUserData(response);
              setIsLoading(false);
            })
            .catch((error) => {
              alert(error.response.data);
              logout();
            });
    }, []);

    function logout(){
        localStorage.removeItem("token");
        setUserData(null)
        navigate("/");
    }

    if(userData === undefined) return null

    console.log(userData)

     return(
        <WalletContainer walletIsEmpty={userData.wallet.length > 0}>
            {isLoading && <p>Loading...</p>}
            {userData.wallet.length === 0 && !isLoading ? 
            <p>Não há registros de entrada ou saída</p> :
            <></>} 
        </WalletContainer>
    )  
    
}

