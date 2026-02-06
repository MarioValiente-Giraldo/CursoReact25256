import type { Language, translations } from "../utils/translations";

//Interfaz para el contexto de roles de Usuarios
export interface User {
    username:string
    role : 'admin' | 'user' | 'unknown'
}

export interface UserActions {
    login: (email:string,password:string)=>boolean;
    logout: ()=>void
}
export type AuthContextType = User & UserActions


//Contexto del modo de luz de nuestra página
export type Theme <> = 'light' | 'dark'
   
export interface ThemeContextType {
    theme:Theme
    toggleTheme : ()=>void
}

//Interfaz para el contexto del idioma
export interface LanguageContextType {
  language: Language;
  toggleLanguage: ()=> void;
  texts: typeof translations.es
}