import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

export const ProtectedRoute = () => {
    const { user } = useAuthContext()
    if(!user){
    return <Navigate to="/login" replace />
    }
    return <Outlet />
}

export default ProtectedRoute
