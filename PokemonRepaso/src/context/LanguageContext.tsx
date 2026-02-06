import { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Language } from "../utils/translations"
import type { LanguageContextType } from "../types";


//1º Crear el contextexto con un hook personalizado
const LanguageContext = createContext<LanguageContextType | null> (null)

//2º Crear el Provider que envuelve nuestra App
export const LanguageProvider = ({children} : {children:ReactNode}) => {
  //Definimos el hook del contexto del idioma
  const [language, setLanguage] = useState<Language>('es')
  //Definimos la lógica de nuestro contexto
  const toggleLanguage = () =>{
    setLanguage((prev)=>(prev === 'es'?'en':'es'));
  }
  const texts = translations[language];
  const value = {
      language,
      toggleLanguage,
      texts
  }

  return (
      <LanguageContext value={value}>{children}</LanguageContext>
  )
}

export const useLanguage=()=>{
  const context = useContext(LanguageContext);
  if(!context){
    throw new Error("Error al cargar el estado global del lenguaje");
  }
  return context
} 

export default LanguageContext
