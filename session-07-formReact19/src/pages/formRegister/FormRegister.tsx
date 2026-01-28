import { useActionState } from "react"
import type { FormState, UserRegister } from "../../types"

const registerTime = async (user:UserRegister) => {
    await new Promise((resolve)=>setTimeout(resolve,1000))
    console.log('Registrando el usuario en localStorage')
    localStorage.setItem('userRegister',JSON.stringify(user))
}
// Definir la lógica del register
const registerAction = async (_:FormState, formData:FormData):Promise<FormState> =>{
    const usernameRegister = formData.get('usernameRegister') as string
    const emailRegister = formData.get('emailRegister') as string
    const passwordRegister = formData.get('passwordRegister') as string

    if(!usernameRegister||!passwordRegister||!emailRegister){
        return {
            error:'Todos los campos tienen que estar rellenos',
            success:null
        }
    }
    try{
        await registerTime({username:usernameRegister,email:emailRegister,password:passwordRegister})
        return {error:null,success:'Se ha registrado correctamente el usuario'}
    }catch(err){
        return { error: ` ❌ Error al guardar: ${err}`, success: null };
    }
}

const FormRegister = () => {
    const [state,formAction, isPending]=useActionState(registerAction,{error:null,success:null})
  return (
    <div>
      <div className="p-6 max-w-sm mx-auto border rounded-lg shadow-sm bg-white">
      <h1 className="text-xl font-bold mb-4 text-gray-800">Todo List</h1>
      
      <form action={formAction} className="flex flex-col gap-3">
        <input 
          type="text"
          name="usernameRegister"
          placeholder="Usuario"
          className="border-2 p-2 rounded-md focus:outline-blue-500 disabled:bg-gray-100"
          disabled={isPending}
        />

        <input 
          type="text"
          name="emailRegister"
          placeholder="usuario@dominio.com"
          className="border-2 p-2 rounded-md focus:outline-blue-500 disabled:bg-gray-100 text-gray-600"
          disabled={isPending}
        />
        <input 
          type="password"
          name="passwordRegister"
          placeholder="Contraseña"
          className="border-2 p-2 rounded-md focus:outline-blue-500 disabled:bg-gray-100 text-gray-600"
          disabled={isPending}
        />
        
        <button 
          type="submit" 
          className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 mt-2 font-semibold"
        >
          {isPending ? 'Guardando...' : 'Guardar todo'}
        </button>

        {state.error && <p className="text-red-500 text-sm">{state.error}</p>}
        {state.success && <p className="text-green-600 text-sm font-medium">{state.success}</p>}
        </form>
        </div>
    </div>
  )
}

export default FormRegister
