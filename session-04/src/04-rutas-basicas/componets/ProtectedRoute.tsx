import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps{
    isAllowed: boolean;
    children: ReactNode
}
export const ProtectedRoute = ({ isAllowed, children }: ProtectedRouteProps )=>{
    if(!isAllowed){
        //replace = remplaza las rutas anteriores por la que estamos pasadn oen el historial de rutas
        return <Navigate to='/' replace />
    }
    
    return <>{children}</>
}