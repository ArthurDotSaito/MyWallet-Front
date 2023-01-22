import React from 'react';
import  { BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/EntryPage/LoginPage'
import UserProvider from './context/UserContext';
import GlobalStyle from './styles/GlobalStyles';
import SignUpPage from './pages/Registration/SignUpPage';
import WalletHomePage from './pages/Wallet/WalletHomePage';
import NewIncomePage from './pages/NewIncome/NewIncomePage';
import NewOutcomePage from './pages/NewOutcome/NewOutcomePage';

function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <UserProvider>
                <Routes>
                    <Route path = "/" element = {<LoginPage />}/>
                    <Route path = "/cadastro" element = {<SignUpPage />}/>
                    <Route path = "/home" element = {<WalletHomePage />}/>
                    <Route path = "/nova-entrada" element = {<NewIncomePage />}/>
                    <Route path = "/nova-saida" element = {<NewOutcomePage />}/>
                    <Route path="*" element={"Erro, caminho errado"} />
                </Routes>
            </UserProvider>
        </BrowserRouter>
    )
} 

export default App;