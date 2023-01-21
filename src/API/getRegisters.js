import axios from "axios";

export const getTransactions = async (token) => {
    console.log(token)
    try {
      const res = await axios.get(`http://localhost:5000/wallet`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const userWallet = res.data;
      console.log(userWallet)
      return userWallet
    }catch(error){
        console.log("Erro ao receber WalletList on GetRegister");
        alert(error);
    }
}