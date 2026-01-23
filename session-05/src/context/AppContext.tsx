import { Children, createContext, useState, type ReactNode } from "react";
import type { User } from "../types/AppContextType";

export const AppContext = createContext<AppContextType | null>(null);

interface AppProviderProps{
    children: ReactNode
}
export const AppProvider = ({ children }: AppProviderProps )=>{
    const [state, setState]=useState<AppState>({
        user:{
            id:'1',
            nombre: 'Profe',
            email: 'profe@gmail.com',
            avatar: '',
            role:'admin'
        },
        theme: 'dark',
        language: 'es'
    })
    //Habrá que usar el useEffect para cargar el idioma y el tema al iniciar el componente
    const setUser = (user:User | null )=>{
        setState({...state,user})
        // setState((prev)=> ({...prev,user}))

    };
    const setLanguage = ()=>{}
    const setTheme = ()=>{}
    const value={
        setUser,
        setTheme,
        setLanguage
    }

    return <AppContext value={value}>{children}</AppContext>
}