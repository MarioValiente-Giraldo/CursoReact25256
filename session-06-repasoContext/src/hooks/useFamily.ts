import { useContext } from "react"
import { FamilyContext } from "../context/FamilyContext"
import type { FamilyContextType } from "../types"

export function useFamily():FamilyContextType{
    const context = useContext(FamilyContext)
    if (context === null){
        throw new Error ('Error al usar el contexto ligado a la familia')
    }
    return context
}