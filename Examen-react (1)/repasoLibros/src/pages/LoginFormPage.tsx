import { useActionState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
type FormState ={
    success:boolean,
    message:string
}
const LoginFormPage = () => {
    const { login, error } = useAuthContext()
    const navigate = useNavigate()
    const formAction = async(_:FormState, formData:FormData)=>{

        const email = formData.get('email') as string
        const password = formData.get('password') as string
        
        await login(email,password)  
        if(error){
            return { success: false, message: error }
        }
        
        return {success:true,message:'Login correcto'}
    }
    const [state,submitAction,isPending]=useActionState(formAction,{success:false,message:''})

    useEffect(() => {
        if (state.success) navigate('/')
    }, [state.success])

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-amber-900 mb-6 text-center">Iniciar sesión</h1>

        <form action={submitAction} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-amber-800">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="ejemplo@correo.com"
              className="border border-amber-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-amber-800">Contraseña</label>
            <input
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="border border-amber-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
          </div>

          {state.message && (
            <p className={`text-sm ${state.success ? "text-green-600" : "text-red-500"}`}>
              {state.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="mt-2 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm transition-colors duration-150 disabled:opacity-50"
          >
            {isPending ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginFormPage
