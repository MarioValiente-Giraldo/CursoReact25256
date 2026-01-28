import { useActionState } from "react"
import type { FormState, User } from "../../types"

// Simular la busqueda del user 
const loginTime =async(user:User)=>{
    await new Promise((resolve)=>setTimeout(resolve,1000))
    console.log('Guardando el usuario en el localStorage')
    localStorage.setItem('usuarios',JSON.stringify(user))
}

// Definir la lógica del login
const loginAction = async (_: FormState, formData:FormData):Promise<FormState>=>{
    const usernameLogin = formData.get('usernameLogin') as string
    const passwordLogin = formData.get('passwordLogin') as string

    if(!usernameLogin || !passwordLogin){
        return {error:'Todos los campos son obligatorios',success:null}
    }

    try{
        await loginTime({username:usernameLogin,password:passwordLogin })
        return { error:null, success: '👍 Todo guardado correctamente 👍'}
    }catch(error){
        return { error: ` ❌ Error al guardar: ${error}`, success: null }
    }


}

const FormLogin = () => {
    const [state, formAction, isPending]=useActionState(loginAction,{
        error:null,
        success:null
    })
  return (
    <div>
    <div className="p-6 max-w-sm mx-auto border rounded-lg shadow-sm bg-white">
      <h1 className="text-xl font-bold mb-4 text-gray-800">Todo List</h1>
      
      <form action={formAction} className="flex flex-col gap-3">
        <input 
          type="text"
          name="usernameLogin"
          placeholder="Escriba su usuario"
          disabled={isPending}
          className="border-2 p-2 rounded-md focus:outline-blue-500 disabled:bg-gray-100"
        />

        <input 
          type="password"
          name="passwordLogin"
            placeholder="Escriba su contraseña"
          disabled={isPending}
          className="border-2 p-2 rounded-md focus:outline-blue-500 disabled:bg-gray-100 text-gray-600"
        />
        
        <button 
          type="submit" 
          disabled={isPending}
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

export default FormLogin
