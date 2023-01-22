import { useEffect, useState } from "react"
import { BalanceWalletContainer, Value } from "./WalletBalanceStyle";

export const WalletBalance = ({registerData}) =>{
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let sum = 0
        const totalValue = registerData.map((element) =>{
            const {value, type} = element;
            if(type === 'income') return sum+=value;
            return sum-=value
        },0)
        setTotal(sum)
    },[])

    return(
        <BalanceWalletContainer>
            <h1>SALDO</h1>
            <Value isPositive={total >= 0 }>
                {Number(total).toLocaleString('pt-br', {minimumFractionDigits:2})}
            </Value>
        </BalanceWalletContainer>
    )
}