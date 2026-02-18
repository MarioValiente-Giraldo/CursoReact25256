import { useEffect, useState } from "react";
import { authAPI } from "../services/api";
import type { LoginDTO, User } from "../types";
import type { AuthContextType } from "../context/AuthContext";

const useAuth = ():AuthContextType => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(() =>
        localStorage.getItem("token"),
    );
    const [loading, setLoading] = useState(true);
    const login = async (data: LoginDTO): Promise<boolean> => {
        try {
            setLoading(true)
            const response = await authAPI.login(data);
            if(!response.ok || !response.data){
                throw new Error('Error')
            }
            setUser(response.data?.user);
            setToken(response.data?.token);
            localStorage.setItem("token", response.data?.token);
            return true;
        } catch{
            return false;
        }finally{
            setLoading(false)
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
    };

    const checkAuth = async () => {
        if (!token) {
            setLoading(false);
            return;
        }
        try {
            const response = await authAPI.getMe();
            setUser(response.user);
        } catch {
            logout();
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const value = {
        user,
        token,
        loading,
        isAuthenticated: !!user,
        login,
        logout,
        checkAuth,
    };

    return value;
};

export default useAuth;