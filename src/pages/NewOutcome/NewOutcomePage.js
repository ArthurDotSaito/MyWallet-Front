import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FieldArea, IncomePageContainer,Input,Button } from "./NewOutcomePageStyle";
import { ThreeDots } from "react-loader-spinner";
import { postWalletList } from "../../API/postWalletEntry";

const NewOutcomePage = () =>{
    const navigate = useNavigate()
    const { user } = useContext(UserContext);
    const [outcomeStatus, setOutcomeStatus] = useState(false);
    const [outcome, setOutcome] = useState({type:'outcome', value:'', text:''});

    function handleOutcomeInput(e){
        setOutcome({...outcome, [e.target.name]: e.target.value});
    }

    const sendPostRequest = (e) =>{
        e.preventDefault();
        setOutcomeStatus(true);
        postWalletList(user.token, outcome)
            .then(() =>{
                setOutcomeStatus(false)
                navigate("/home");
            })
            .catch((error) =>{
                alert(error.response);
                setOutcomeStatus(false);
            })
    }

    return(
        <IncomePageContainer>
            <h1>Nova Saida</h1>
            <FieldArea onSubmit={sendPostRequest}>
                <Input
                    type="number"
                    name="value"
                    value={outcome.value}
                    placeholder="Valor"
                    disabled={outcomeStatus}
                    onChange={handleOutcomeInput}
                    required>
                </Input>
                <Input
                    type="text"
                    name="text"
                    value={outcome.text}
                    placeholder="Descrição"
                    disabled={outcomeStatus}
                    onChange={handleOutcomeInput}
                    required>
                </Input>
                <Button
                type='submit'
                disabled={outcomeStatus}>{(!outcomeStatus) ? "Salvar Saida" :
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

export default NewOutcomePage