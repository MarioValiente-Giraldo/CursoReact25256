import { useActionState } from "react";
import { useNavigate } from "react-router-dom"; // Importamos el hook
import type { FormState, TodoData } from "../../types";

// Simular guardar en una BD 
const guardarDB = async (todo: TodoData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('Guardando en la base de datos de LocalStorage');
  localStorage.setItem('todo', JSON.stringify(todo));
}

const guardarAction = async (_: FormState, formData: FormData): Promise<FormState> => {
  const nombreTodo = formData.get('nombreTodo') as string;
  const fechaTodo = formData.get('fechaTodo') as string;

  if (!nombreTodo || !fechaTodo) {
    return { error: 'Todos los campos son obligatorios', success: null };
  }

  try {
    await guardarDB({ nombre: nombreTodo, fecha: fechaTodo });
    return { error: null, success: '👍 Todo guardado correctamente' };
  } catch (error) {
    return { error: ` ❌ Error al guardar: ${error}`, success: null };
  }
}

const FormTodoList = () => {
  const navigate = useNavigate(); 
  const [state, formAction, isPending] = useActionState(guardarAction, {
    error: null,
    success: null
  });

  const handleButtonLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    navigate('/form-login'); 
  };
   const handleButtonRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    navigate('/form-register'); 
  };

  return (
    <div className="p-6 max-w-sm mx-auto border rounded-lg shadow-sm bg-white">
      <h1 className="text-xl font-bold mb-4 text-gray-800">Todo List</h1>
      
      <form action={formAction} className="flex flex-col gap-3">
        <input 
          type="text"
          name="nombreTodo"
          placeholder="¿Qué hay que hacer?"
          disabled={isPending}
          className="border-2 p-2 rounded-md focus:outline-blue-500 disabled:bg-gray-100"
        />

        <input 
          type="date"
          name="fechaTodo"
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

        
        <hr className="my-2" />

        <button 
          type="button" 
          onClick={handleButtonLogin}
          className="text-blue-600 text-sm hover:underline"
        >
          Ir al Login
        </button>

         <button 
          type="button" 
          onClick={handleButtonRegister}
          className="text-blue-600 text-sm hover:underline"
        >
          Ir al Register
        </button>
      </form>
    </div>
  );
};

export default FormTodoList;