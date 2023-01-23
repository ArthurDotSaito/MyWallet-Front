import axios from "axios";

export const loginRequest = async (loginData) => {
    try {
      const res = axios.post(`${process.env.REACT_APP_API_URL}/signin`, loginData)
      const loginAnswer = res;
      console.log("Recebido!", loginAnswer)
      return loginAnswer
    }catch(error){
        console.log("Erro ao receber WalletList on GetRegister");
        alert(error);
    }
}