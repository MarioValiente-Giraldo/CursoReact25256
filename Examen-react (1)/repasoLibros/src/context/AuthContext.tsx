import { createContext, type ReactNode } from "react";
import type { User } from "../types";
import { useAuth } from "../hooks/useAuth";

interface AuthContextType {
    user:User | undefined;
    token: string | undefined;
    loading:boolean;
    error:string| null;
    login(email:string,password:string):Promise<void>
    logout():void    
}


export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({children}:{children:ReactNode}) =>{
    const use = useAuth()
    return <AuthContext value={use}>{children}</AuthContext>
}


