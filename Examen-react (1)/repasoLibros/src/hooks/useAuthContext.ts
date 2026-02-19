import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const useAuthContext = () =>{
    const context = useContext(AuthContext)
    if(!context) throw new Error('Error al usar el contexto de Auth')
    return context
}