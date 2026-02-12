import { useActionState } from "react";
import { CompaniesApi } from "../utils/api";
import type { Company } from "../types";

type FormState = {
    success:boolean;
    message:string;
}

const RegisterCompanyForm = () => {
    const formAction = async(_:FormState,formData:FormData):Promise<FormState>=>{
        const name = formData.get('name') as string;
        const industry =  formData.get('industry') as string;
        const website = formData.get('website') as string;

        if(!name || !industry || !website ){
            return { success:false, message: 'Todos los campos son obligatorios'}
        }
        const company:Company={
            name,
            industry,
            website
        }
        const result = await CompaniesApi.registerComany(company)

        if(result.success){
            return { success: true, message: "Empresa creada correctamente" };
        }else{
            return { success: false, message: "Error al crear la empresa" };
        }
    }

    const [state,submitAction,isPending]=useActionState(formAction,{
        success:false,
        message: ''
    })


    return (
        <div>
           <form action={submitAction} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
            
            {/* Input Nombre de Empresa */}
            <div className="flex flex-col gap-1.5">
                <label htmlFor="nameCompany" className="text-sm font-medium text-gray-700">
                Nombre de la Empresa
                </label>
                <input
                type="text"
                name="name"
                placeholder="Ej. Acme Corp"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                />
            </div>

            {/* Input Industria */}
            <div className="flex flex-col gap-1.5">
                <label htmlFor="industry" className="text-sm font-medium text-gray-700">
                Industria
                </label>
                <input
                type="text"
                name="industry"
                placeholder="Ej. Tecnología"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                />
            </div>

            {/* Input Sitio Web */}
            <div className="flex flex-col gap-1.5">
                <label htmlFor="website" className="text-sm font-medium text-gray-700">
                Sitio Web
                </label>
                <input
                type="text"
                name="website"
                placeholder="https://ejemplo.com"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                />
            </div>

            <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                disabled={isPending}
            >
                Registrar Empresa
            </button>

            </form>
        </div>
    )
}

export default RegisterCompanyForm
