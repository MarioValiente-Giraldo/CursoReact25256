import { createContext, use, useContext, useState, type ReactNode } from "react"

//1º Definimos los tipos de temas 
type Theme <> = 'light' | 'dark'
//2º Definimos la interfaz de los temas 
interface ThemeContextType {
    theme:Theme
    toggleTheme : ()=>void
}
//3º Creamos el alamcénb global de los temas
const ThemeContext = createContext<ThemeContextType | null>(null)

//4º Crear el Provider que envuelve nuestra App
export const ThemeProvider = ({ children }:{children:ReactNode})=>{
    //Definimos las propiedas de nuestra interfaz del contexto
    const [theme, setTheme] = useState<Theme>('light')
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

//5º Definiar el hook personalizado para poder usar nuestro contexto

export function useTheme(){
    const context = useContext(ThemeContext)
    if(!context) throw new Error('Error al cargar el contexto ligado al tema')
    return context

}