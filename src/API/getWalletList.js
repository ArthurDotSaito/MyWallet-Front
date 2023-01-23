import axios from "axios";

export const getWalletList = async (token) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/wallet`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const userWallet = res.data;
      return userWallet
    }catch(error){
        console.log("Erro ao receber WalletList on GetRegister");
        alert(error);
    }
}