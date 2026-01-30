import { createContext, useContext, useState, type ReactNode } from "react"
import type { Theme, ThemeContextType } from "../types"


//1º Crear el contextexto con un hook personalizado
const ThemeContext = createContext<ThemeContextType | null>(null)
//2º Estado inicial del contexto
const estadoInicialTema: Theme = 'light'

//3º Crear el Provider que envuelve nuestra App
export const ThemeProvider = ({ children }:{children:ReactNode})=>{
    //Hooks de nuestro contexto
    const [theme, setTheme] = useState<Theme>(estadoInicialTema)
    //Definimos la lógica del cambio de tema
    const toggleTheme = () => {
        setTheme((prev)=>(prev==='light'?'dark':'light'))
    }

    const value = {
        theme,
        toggleTheme
    }

    return <ThemeContext value={value}>{children}</ThemeContext>
}

//4º Definiar el hook personalizado para poder usar nuestro contexto
export function useTheme(){
    const context = useContext(ThemeContext)
    if(!context) throw new Error('Error al cargar el contexto ligado al tema')
    return context

}