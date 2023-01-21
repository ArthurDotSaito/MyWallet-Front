import React, { useContext, useEffect } from "react"
import { getTransactions } from "../../API/getRegisters";
import { UserContext } from "../../context/UserContext"
import { WalletContainer } from "./WalletListStyle";

export const WalletList = () =>{
    const { user } = useContext(UserContext);
    const [userData, setUserData] = React.useState({})
    console.log(user);

    useEffect(() =>{
        const userWalletResponse =  getTransactions(user.token)
        userWalletResponse.then((response) =>{
            setUserData(response)
        })
    })

    return(
        <WalletContainer walletIsEmpty={userData.wallet.length > 0}>
            {userData.wallet.length === 0 ? 
            <p>Não há registros de entrada ou saída</p> :
            <></>} 
            
        </WalletContainer>
    )
}

