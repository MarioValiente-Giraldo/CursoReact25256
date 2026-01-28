import { createContext, useState, type ReactNode } from "react";
import type { FamilyContextType, FamilyState } from "../types";
// 1º Crear el contextexto con un hook personalizado
const FamilyContext = createContext<FamilyContextType | null>(null)
// 2º Estado inicial del contexto
const estadoInicial:FamilyState={
    mensaje: 'Hola',
    contador: 0 
}
// 3º Crear el provider (aquello qeu envuelve a los componentes que van a consumir el contexto)
export const FamilyProvider = ({ children }:{ children: ReactNode})=>{
    //Hooks
    const [estado,setEstado]=useState<FamilyState>(estadoInicial)
    //Funciones para cambiar los elementos del contexto,etc...
    const setMensaje = (mensaje:string) =>{
        setEstado((prev)=>({...prev, mensaje}))    
    }
    const incrementarContador = ()=>{
        setEstado((prev)=>({...prev, contador: prev.contador+1}))
    }
    const decrementarContador = ()=>{
        setEstado((prev)=>({...prev,contador:prev.contador-1}))
    }
    const value: FamilyContextType= {
        ...estado,
        setMensaje,
        incrementarContador,
        decrementarContador
    }
    
    return <FamilyContext value={value}>{children}</FamilyContext>
}

export {FamilyContext}

