import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider({children}){
    const userList = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(userList !== null ? userList:{});
    const navigate = useNavigate();

    useEffect(() =>{
        if(userList == null){
            navigate("/");
        }else{

        }
    }, []);

    return(
        <UserContext.Provider value = {{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}