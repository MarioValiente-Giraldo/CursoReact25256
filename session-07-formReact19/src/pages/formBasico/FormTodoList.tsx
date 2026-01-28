import { useActionState } from "react";
import type { FormState, TodoData } from "../../types";

// Simular guardar en una BD 
const guardarDB = async (todo:TodoData)=>{
  await new Promise ((resolve)=>setTimeout(resolve,1000));
  console.log('Guardando en la base de datos de LocalStorage')
  localStorage.setItem('todo',JSON.stringify(todo))
}

// Función que ejecuta React al envíar el formulario
//El objeto que contiene los datos del formulario lo tiene FormData que es de REACT
const guardarAction = async( _ :FormState, formData:FormData ):Promise<FormState>=>{
    //Extraer todos los datos de un formulario
    const nombreTodo = formData.get('nombreTodo') as string
    const fechaTodo = formData.get('fechaTodo') as string
    if (!nombreTodo || !fechaTodo){
      return {
        error: 'Todos los campos son obligatorios',
        success: null 
      }
    }
    try{
      await guardarDB({
        nombre:nombreTodo,
        fecha:fechaTodo
      })

      return {
        error:null,
        success: '👍Todo guardado correctamente'
      }
    }catch(error){
       return {
        error: ` ❌ Error al guardar el todo: ${error}`,
        success: null
      }
    }    
    
}


const FormTodoList = () => {
  const {state, formAction, isPending} = useActionState(guardarAction,{
    error:null,
    success:null
  })

  return (
    <div>
      <h1>Formulario Básico - Todo List</h1>
      <form action={formAction}>
        <input 
        type="text"
        id="nombreTodo"
        name="nombreTodo"
        disabled={isPending}/>
        <button  type='submit' disabled={isPending}>
          {isPending? 'Guardando...':'Guardar todo'}
        </button>
        {state.error && <p style={{color:'red'}}>{state.error}</p>}
        {state.success && <p style={{color:'green'}}>{state.success}</p>}
      </form>
    </div>
  )
}

export default FormTodoList

