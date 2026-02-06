import type { ReactNode } from "react"
import { useAuth } from "../context/AuthContext"
import { Navigate } from "react-router-dom";

interface ProtectedRouteAdminProps {
    children:ReactNode
}

export const ProtectedRouteAdmin =( {children}: ProtectedRouteAdminProps) =>{
    const { role } = useAuth()
    if(!role){
        return <Navigate to='*'/>
    }
    if(role!=='admin'){
        return <Navigate to='/'/>
    }
    return <>{children}</>
}