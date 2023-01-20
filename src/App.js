import React from 'react';
import  { BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/EntryPage/LoginPage'
import UserProvider from './context/UserContext';

function App(){
    return(
        <BrowserRouter>
            <UserProvider>
                <Routes>
                    <Route path = "/" element = {<LoginPage />}/>
                </Routes>
            </UserProvider>
        </BrowserRouter>
    )
} 

export default App;