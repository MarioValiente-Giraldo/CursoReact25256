import type { ReactNode } from "react"
import { useAuth } from "../context/AuthContext"
import { Navigate } from "react-router-dom";

interface ProtectedRouteAdminProps {
    children:ReactNode
}

export const ProtectedRouteAdmin =( {children}: ProtectedRouteAdminProps) =>{
    const { user } = useAuth();
    if(!user){
        return <Navigate to='*'/>
    }
    if(user.role!=='admin'){
        return <Navigate to='/'/>
    }
    return <>{children}</>
}