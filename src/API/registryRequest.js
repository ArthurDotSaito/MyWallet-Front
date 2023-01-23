import axios from "axios";

export const registryRequest = async (registryData) => {
    try {
      const res = axios.post(`${process.env.REACT_APP_API_URL}/signup`, registryData)
      const resAnswer = res;
      console.log("Recebido!", resAnswer)
      return resAnswer
    }catch(error){
        console.log("Erro ao receber WalletList on GetRegister");
        alert(error);
    }
}