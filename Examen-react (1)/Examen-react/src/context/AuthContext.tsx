import { createContext, type ReactNode } from "react";
import type { LoginDTO, User } from "../types";
import useAuth from "../hooks/useAuth";

export interface AuthContextType {
  user: User | null; // Datos del usuario (null = no logueado)
  token: string | null; // Token JWT (null = no logueado)
  loading: boolean; // true mientras verificamos sesion al arrancar
  isAuthenticated: boolean; // true si hay usuario logueado
  login: (data: LoginDTO) => Promise<boolean>;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}:{children:ReactNode})=>{
    const use = useAuth();

    return <AuthContext value={use}>{children}</AuthContext>
}

