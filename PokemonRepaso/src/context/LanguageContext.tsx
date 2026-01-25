import { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Language } from "../utils/translations"

interface LanguageContextType {
  language: Language;
  toggleLanguage: ()=> void;
  texts: typeof translations.es
}
const LanguageContext = createContext<LanguageContextType | null> (null)
export const LanguageProvider = ({children} : {children:ReactNode}) => {
  const [language, setLanguage] = useState<Language>('es')
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
    <div>
      <LanguageContext value={value}>{children}</LanguageContext>
    </div>
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
