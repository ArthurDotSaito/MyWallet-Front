import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { getWalletList } from "../../API/getWalletList";
import { UserContext } from "../../context/UserContext"
import { WalletContainer, WalletTransactions } from "./WalletListStyle";
import { WalletItem } from '../WalletItem/WalletItem'
import {WalletBalance} from '../WalletBalance/WalletBalance'

export const WalletList = () =>{
    const navigate = useNavigate()
    const { user } = useContext(UserContext);
    const [userData, setUserData] = React.useState(undefined)
    const [isLoading, setIsLoading] = React.useState(false)

    useEffect(() => {
        setIsLoading(true);
        getWalletList(user.token)
            .then((response) => {
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

     return(
        <WalletContainer walletIsEmpty={userData.wallet.length > 0}>
            {isLoading && <p>Loading...</p>}
            {userData.wallet.length === 0 && !isLoading ? 
            <p>Não há registros de entrada ou saída</p> :
            <>
                <WalletTransactions>
                    {userData.wallet.map((element,index) => 
                        <WalletItem 
                            registerData={element}
                            key={index}>
                        </WalletItem>)}
                </WalletTransactions>
                <WalletBalance registerData={userData.wallet}></WalletBalance>
            </>} 
        </WalletContainer>
    )  
    
}

