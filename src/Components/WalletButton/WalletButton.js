import { WalletButtonStyle } from "./WalletButtonStyle"
import { AddCircleOutline, RemoveCircleOutline } from "react-ionicons"

export const WalletButton = ({type}) =>{
    return(
        <WalletButtonStyle>
            {type === 'income' && 
            <>
                <AddCircleOutline
                color={'#FFFFFF'}
                width="30px"
                height="30px">

                </AddCircleOutline>
                <p>Nova Entrada</p>
            </>}
            {type === 'outcome' && 
            <>
                <RemoveCircleOutline
                color={'#FFFFFF'}
                width="30px"
                height="30px">

                </RemoveCircleOutline>
                <p>Nova Saida</p>
            </>}
        </WalletButtonStyle>
    )
} 