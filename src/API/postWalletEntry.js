import axios from "axios";

export const postWalletList = async (token, entryData) => {
    console.log("Entrei na função postWalletList")
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/wallet`, entryData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const userWallet = res.data;
      console.log("Recebido!", userWallet)
      console.log(userWallet);
      return userWallet
    }catch(error){
        console.log("Erro enviar walletPost on PostRegister");
        alert(error);
    }
}