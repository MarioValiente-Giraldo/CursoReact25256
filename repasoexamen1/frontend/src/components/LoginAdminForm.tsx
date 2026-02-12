import { useActionState, useEffect } from "react" // 1. Añadimos useEffect
import { toast, Toaster } from "sonner" // 2. Añadimos sonner
import type { User } from "../types";
import { UsersApi } from "../utils/api";

interface FormState {
    message: string;
    success: boolean;
}

const LoginAdminForm = () => {
    const formAction = async (_: FormState, formData: FormData): Promise<FormState> => {
        const email = formData.get('email') as string
        const password = formData.get('password') as string
        if(!email || !password){
            return {
                message: 'Todos los campos son obligatorios',
                success: false
            }
        }
        const userCredentials: User = {
            email,
            password,
            name:''
        }
        const result = await UsersApi.loginUser(userCredentials)
        if(result.success){
            return {
                message: `Has iniciado sesión, bienvenido ${userCredentials.name}`,
                success: true
            }
        }else{
            return {
                message: `Error al intentar iniciar la sesión de ${userCredentials.name}`,
                success: false
            }
        }
    }

    const [state, submitAction, isPending] = useActionState(formAction, {
        message: '',
        success: false
    })

    // 3. Efecto para disparar el toast cuando cambie el mensaje
    useEffect(() => {
        if (state.message) {
            if (state.success) {
                toast.success(state.message);
            } else {
                toast.error(state.message);
            }
        }
    }, [state]);

    return (
        <div className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-xl">
            {/* 4. Toaster para renderizar los avisos */}
            <Toaster position="top-right" richColors />
            
            <form action={submitAction} className="space-y-4">
                
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-600">Email</label>
                    <input 
                        type="email" 
                        name="email"
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border-gray-300" 
                        placeholder="tu@email.com"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-600">Contraseña</label>
                    <input 
                        type="password" 
                        name="password"
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border-gray-300" 
                        placeholder="••••••••"
                    />
                </div>

                <button 
                    type="submit" 
                    disabled={isPending}
                    className="w-full py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                    {isPending ? 'Entrando...' : 'Entrar'}
                </button>
                
            </form>
        </div>
    );
}

export default LoginAdminForm