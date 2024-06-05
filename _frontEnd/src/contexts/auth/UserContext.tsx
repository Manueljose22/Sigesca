import { createContext } from "react";
import { IUserCotext } from "./types";
import { userAuth } from "../../hooks/auth/userAuth";


interface providerProps{
    children: React.ReactNode;
}


export const userContext = createContext<IUserCotext>({} as IUserCotext); 

export const ProviderUserContext = ({children}: providerProps) =>{

    const {authenticated, login, logout} = userAuth()

    return(
        <userContext.Provider  value={{authenticated, login, logout}}>
            {children}
        </userContext.Provider>
    )
}