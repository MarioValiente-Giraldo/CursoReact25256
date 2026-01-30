import { createContext, useContext, useState, type ReactNode } from "react"
import type { AuthContextType, User } from "../types"


//1º Crear el contextexto con un hook personalizado
const AuthContext = createContext<AuthContextType | null>(null)
// 2º Estado inicial del contexto
const estadoInicial:User={
    username:'',
    role : 'unknown'
}
//3º Crear el Provider que envuelve nuestra App
export const AuthProvider = ({ children }: { children:ReactNode})=>{
    //Definimos User (hook del contexto)
    const [user,setUser] = useState<User  >(estadoInicial)
    //Definimos la lógica del contexto
    const login = (username:string,password:string):boolean=>{
        if (username && password){
            if(username === 'admin@admin.com' && password === '1234'){
                setUser({username, role:'admin'})
                return true
            }
            setUser({username,role:'user'})
            return true
        }
        return false
    }
   
    const logout = ()=>{
        setUser(estadoInicial)
    }

    //Al definir las propiedades de nuestra interfaz del contexto, la englobamos en una varibale/objeto para posteriormente retornar lo que queremos
    const value = {
        ...user,
        login,
        logout
    }

    //Retornamos el ⭕⭕COMPONENTE⭕⭕ del contexto
    return <AuthContext value={value}>{children}</AuthContext>
}

//4º Creamos un hook personalizado para poder utilizar nuestras propiedades en el resto de los componentes
export function useAuth(){
    const context = useContext(AuthContext)
    if(context === null){
        throw new Error('Error al usar el contexto de identificación de usuario')
    }
    return context
}