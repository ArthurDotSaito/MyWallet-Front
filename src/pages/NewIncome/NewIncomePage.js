import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IncomePageContainer } from "./NewIncomePageStyle";
import { FieldArea, Input, Button } from "./NewIncomePageStyle";
import { ThreeDots } from "react-loader-spinner";
import { postWalletList } from "../../API/postWalletEntry";

const NewIncomePage = () =>{
    const navigate = useNavigate()
    const { user } = useContext(UserContext);
    const [incomeStatus, setIncomeStatus] = useState(false);
    const [income, setIncome] = useState({type:'income', value:'', text:''});

    function handleIncomeInput(e){
        setIncome({...income, [e.target.name]: e.target.value});
    }

    const sendPostRequest = (e) =>{
        e.preventDefault();
        setIncomeStatus(true);
        postWalletList(user.token, income)
            .then(() =>{
                setIncomeStatus(false)
                navigate("/home");
            })
            .catch((error) =>{
                alert(error.response);
                setIncomeStatus(false);
            })
    }

    return(
        <IncomePageContainer>
            <h1>Nova Entrada</h1>
            <FieldArea onSubmit={sendPostRequest}>
                <Input
                    type="number"
                    name="value"
                    value={income.value}
                    placeholder="Valor"
                    disabled={incomeStatus}
                    onChange={handleIncomeInput}
                    required>
                </Input>
                <Input
                    type="text"
                    name="text"
                    value={income.text}
                    placeholder="Descrição"
                    disabled={incomeStatus}
                    onChange={handleIncomeInput}
                    required>
                </Input>
                <Button
                type='submit'
                disabled={incomeStatus}>{(!incomeStatus) ? "Salvar Entrada" :
                <ThreeDots
                    width="13"
                    height="13"
                    radius="9"
                    color='FFFFFF'></ThreeDots>}
                </Button>
            </FieldArea>
        </IncomePageContainer>
    )
}

export default NewIncomePage