import { createContext, useContext, useState, type ReactNode } from "react"
//1º Definar la interfaz de Usuario
interface User {
    username: string
    role: 'admin' | 'user'
}

//2º Definiar la interfaz del contexto
interface AuthContextType{
    user: User | null
    login: (email:string, password:string)=> boolean
    logout: ()=>void
}

//3º Creamos el almacén global para poder usar los contextos en todos nuestros componentes
const AuthContext = createContext<AuthContextType | null>(null)

//4º Crear el Provider que envuelve nuestra App
export const AuthProvider = ({ children }: { children:ReactNode})=>{
    //Definimos las propiedas de nuestra interfaz del contexto
    //Definimos User
    const [user,setUser] = useState<User |null >(null)
    //Definimos la función de login
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
    //Definimos la función de logout
    const logout = ()=>{
        setUser(null)
    }

    //Al definir las propiedades de nuestra interfaz del contexto, la englobamos en una varibale/objeto para posteriormente retornar lo que queremos
    const value = {
        user,
        login,
        logout
    }

    //Retornamos el ⭕⭕COMPONENTE⭕⭕ del contexto
    return <AuthContext value={value}>{children}</AuthContext>
}

//5º Creamos un hook personalizado para poder utilizar nuestras propiedades en el resto de los componentes
export function useAuth(){
    const context = useContext(AuthContext)
    if(context === null){
        throw new Error('Error al usar el contexto de identificación de usuario')
    }
    return context
}