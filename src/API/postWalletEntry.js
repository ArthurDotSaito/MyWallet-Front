import axios from "axios";

export const postWalletList = async (token, entryData) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/wallet`, entryData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const userWallet = res.data;
      return userWallet
    }catch(error){
        console.log("Erro enviar walletPost on PostRegister");
        alert(error);
    }
}