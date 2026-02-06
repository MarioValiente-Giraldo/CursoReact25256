import { useActionState } from "react";

//Estado del formulario
type formState = {
    success:boolean;
    message:string
}

const simularApi = {
    crear: async ({ name, industry,website }: { name: string, industry: string,website:string }) => {
        await new Promise(resp => setTimeout(resp, 2000));
        console.log('Creando...', { name, industry, website })
    }
}

//Función
const CompaniesForm = () => {
    const formAction = async (_: formState, formData: FormData): Promise<formState> => {
    const name = String(formData.get('name')).trim()
    const industry = String(formData.get('industry')).trim()
    const website = String(formData.get('website')).trim()

    if (!name || !industry || !website) {
        return {
            success: false,
            message: "Faltan campos por rellenar"
        }
    }

    await simularApi.crear({ name, industry, website })


    //Fetching
    try {
        
    } catch (error) {
        console.log(error)
    }

    return {
        success: true,
        message: `Empresa ${name} creada`
    }
}
    const [state,submitAction,isPending] = useActionState<formState,FormData>(formAction,{
    success:false,
    message:''
    })
    return (
        <div>
            <form action={submitAction}>
                <h2>Formulario de Empresas</h2> 
                <div>
                    <label>Nombre de la Empresa</label>
                    <input
                    type="text"
                    name="name"
                    placeholder="Company Name"
                    required/>
                </div>

               <div>
                    <label>Industria</label>
                    <input
                    type="text"
                    name="industry"
                    placeholder="Company Name"
                    required/>
                </div>

                <div>
                    <label>WebSite</label>
                    <input
                    type="url"
                    name="website"
                    placeholder="Company Name"
                    required/>
                </div>
                <div>
                    <button
                    type="submit"
                    disabled={isPending}
                    >
                    Insertar
                    </button>
                </div>
                <div>
                    <button
                    type="button"
                    >
                    Editar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CompaniesForm
