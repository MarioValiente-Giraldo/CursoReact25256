import { useActionState } from "react"
import { toast } from "sonner";

type formState = {
    success: boolean;
    message: string;
}

const simularApi = {
    crear: async ({ name, surname }: { name: string, surname: string }) => {
        await new Promise(resp => setTimeout(resp, 2000));
        console.log('Creando...', { name, surname })
    }
}

const AppBasicoReact19 = () => {
    
    async function formAction(_: formState, formData: FormData): Promise<formState> {
        const name = String(formData.get('name')).trim()
        const surname = String(formData.get('surname')).trim()
        
        if (!name || !surname) {
            return { success: false, message: "Todos los campos son obligatorios" }
        }

        const fullname = `${name} ${surname}`
        await simularApi.crear({ name, surname })
        
        toast.success(`${fullname} creado con éxito`)
        
        return {
            success: true,
            message: `Usuario ${fullname} creado con éxito`
        }
    }

    const [state, submitAction, isPending] = useActionState<formState, FormData>(formAction, {
        success: false,
        message: ''
    })

    return (
        <div className="mt-10 flex flex-col justify-center items-center">
            <form action={submitAction} className="flex flex-col gap-2">
                <label>Formulario Básico Nombre y Apellidos React 19</label>
                <input name='name' placeholder="Nombre..." className="border p-1" />
                <input name='surname' placeholder="Apellidos..." className="border p-1" />
                
                <button 
                    type="submit"
                    disabled={isPending}
                    className={isPending ? 'bg-gray-400' : 'bg-blue-500 text-white'}
                >
                    {isPending ? 'Enviando...' : 'Enviar'}
                </button>
            </form>

            {state.message && (
                <div className={`mt-4 p-2 ${state.success ? 'bg-green-300' : 'bg-red-300'}`}>
                    {state.message}
                </div>
            )}
        </div>
    )
}

export default AppBasicoReact19