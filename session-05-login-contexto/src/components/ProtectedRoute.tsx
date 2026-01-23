import type { ReactNode } from "react"
import { useAuth } from "../context/AuthContext"
import { Navigate } from "react-router-dom"

interface ProtectedRouteProps {
    children: ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { user } = useAuth()
    if (!user) {
        return <Navigate to="/" />
    }
    if (user.role !== 'admin') {
        return <Navigate to="/home" />
    }
    return <>{children}</>
}