
'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type DataType = {
    firstName: string
}

interface ContextProps {
    token: string,
    setToken: Dispatch<SetStateAction<string>>,
    expiresAt: string,
    setExpiresAt: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext<ContextProps>({
    token: '',
    setToken: (): string => '',
    expiresAt: '',
    setExpiresAt: (): string => '' 
})

export const GlobalContextProvider = ({ children } : any) => {
    const [token, setToken] = useState('');
    const [expiresAt, setExpiresAt] = useState('');
    
    return (
        <GlobalContext.Provider value={{ token, setToken, expiresAt, setExpiresAt }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);