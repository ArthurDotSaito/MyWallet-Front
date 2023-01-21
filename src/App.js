import React from 'react';
import  { BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/EntryPage/LoginPage'
import UserProvider from './context/UserContext';
import GlobalStyle from './styles/GlobalStyles';
import SignUpPage from './pages/Registration/SignUpPage';
import WalletHomePage from './pages/Wallet/WalletHomePage';

function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <UserProvider>
                <Routes>
                    <Route path = "/" element = {<LoginPage />}/>
                    <Route path = "/cadastro" element = {<SignUpPage />}/>
                    <Route path = "/home" element = {<WalletHomePage />}/>
                </Routes>
            </UserProvider>
        </BrowserRouter>
    )
} 

export default App;