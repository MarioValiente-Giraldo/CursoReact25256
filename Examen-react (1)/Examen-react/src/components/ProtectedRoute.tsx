import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

interface ProtectedRouteProps {

  children: ReactNode;
}
export const ProtectedRoute = ({children,}: ProtectedRouteProps) => {
  const {user}=useAuthContext()
    if(!user){
    return <Navigate to="/login" replace />
  }
  return <>{children}</>
};