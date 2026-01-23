import { createContext, useContext, useState, type ReactNode } from "react"
interface User {
    email: string;
    role: 'admin' | 'user'
    
}
interface AuthContextType {
    user: User | null;
    login: (email:string,password:string) =>boolean;
    logout: ()=>void;
}

//Creamos el almacén global que podremos usar en cualquier componente
const AuthContext = createContext <AuthContextType | null>(null)

//Crear el provider que envuelve App
export const AuthProvider = ({ children}: {children :ReactNode})=> {
    const [user,setUser] = useState<User|null>(null)
    const login = (email:string,password:string):boolean=>{
        if(email && password){
            if(email === 'admin@admin.com' && password === '1234'){
                setUser({email, role:'admin'})
                return true
            }
            setUser({email,role:'user'})
        }
        return false
    }
    
    const logout = ()=>{
        setUser(null)
    }
    const value = {
            user,
            login,
            logout
    }
    return <AuthContext value={value}>{children}</AuthContext>
}

export function useAuth(){
    const context = useContext(AuthContext)
    if(context === null){
        throw new Error ('Error al usar el contexto global')
    }
    return context
}