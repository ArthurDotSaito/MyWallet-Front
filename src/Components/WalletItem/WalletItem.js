import {Date,Description, WalletMainContainer, Value} from './WalletItemStyle'

export const WalletItem = ({registerData}) =>{
    const { date, description, value, type } = registerData;

    return(
        <WalletMainContainer>
            <Date>{date}</Date>
            <Description>{description}</Description>
            <Value type = {type}>
                {Number(value).toLocaleString('pt-br', {minimumFractionDigits: 2})}
            </Value>
        </WalletMainContainer>
    )
}