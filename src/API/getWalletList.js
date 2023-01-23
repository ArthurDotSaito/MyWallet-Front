import axios from "axios";

export const getWalletList = async (token) => {
    console.log("Entrei na função getWalletList")
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/wallet`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const userWallet = res.data;
      console.log("Recebido!", userWallet)
      console.log(userWallet);
      return userWallet
    }catch(error){
        console.log("Erro ao receber WalletList on GetRegister");
        alert(error);
    }
}