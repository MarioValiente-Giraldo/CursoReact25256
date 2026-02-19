import { useState } from "react"
import type { User } from "../types"
import { authApi } from "../services/api"

export const useAuth = ()=>{
    // user:User | null;
    // token: string | null;
    // loading:boolean;
    // error:string| null;
    // login(email:string,password:string):Promise<void>
    // logout():void

    const [user, setUser] = useState<User | undefined>(() => {
        const saved = localStorage.getItem('user')
        return saved ? JSON.parse(saved) : undefined
    })
    const [token, setToken] = useState<string | undefined>(() => {
        return localStorage.getItem('token') ?? undefined
    })
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    async function login(email:string,password:string):Promise<void>{
        try {
            setLoading(true)
            const response = await authApi.login({email,password})
            if(!response.ok){
                setError('Error al iniciar sesión')
                return;
            }
            setUser(response.data?.user)
            setToken(response.data?.token)
            localStorage.setItem('token', response.data?.token ?? '')
            localStorage.setItem('user', JSON.stringify(response.data?.user))
        } catch (error) {
            setError('Error al iniciar sesión')
            throw error
        }finally{
            setLoading(false)
        }
    }

    function logout():void{
        setUser(undefined)
        setToken('')
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    return { user, token, loading, error, login, logout }
}