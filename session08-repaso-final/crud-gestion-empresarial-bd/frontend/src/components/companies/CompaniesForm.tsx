import { useActionState } from "react";
import { companiesAPI } from "../../utils/api";
import { toast } from "sonner";

// Estado del formulario
type formState = {
  success: boolean;
  message: string
}

// Logo SVG Componente
const CompanyLogo = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-12 h-12 text-purple-500 mb-4 drop-shadow-md"
  >
    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28 0a.75.75 0 01.22-.53l2.25-2.25a.75.75 0 111.06 1.06L8.56 12l1.72 1.72a.75.75 0 11-1.06 1.06l-2.25-2.25a.75.75 0 01-.22-.53z" clipRule="evenodd" />
  </svg>
);

const CompaniesForm = () => {
  // Función Server Action
  const formAction = async (_: formState, formData: FormData): Promise<formState> => {
    // Convertimos a string para asegurarnos
    const name = formData.get('name')?.toString().trim() || "";
    const industry = formData.get('industry')?.toString().trim() || "";
    const website = formData.get('website')?.toString().trim() || "";

    // Validación Frontend
    if (!name || !industry || !website) {
      return {
        success: false,
        message: "Por favor, completa todos los campos."
      }
    }

    try {
      console.log("Enviando datos:", { name, industry, website });
      await companiesAPI.createCompany({ name, industry, website });
      toast('Compañia creada con existo')
      return {
        success: true,
        message: `¡Empresa ${name} registrada correctamente!`
      }
    } catch (error) {
      console.error("Error capturado en formulario:", error);
      return {
        success: false,
        message: error instanceof Error ? error.message : "Error desconocido al guardar"
      }
    }
  }

  // Hook useActionState
  const [state, submitAction, isPending] = useActionState<formState, FormData>(formAction, {
    success: false,
    message: ''
  })

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 p-6 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-purple-200/60 p-8 border border-white">
        
        <div className="flex flex-col items-center mb-6">
          <CompanyLogo />
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
            Registrar Empresa
          </h2>
          <p className="text-sm text-gray-400 mt-1">Ingresa los datos corporativos</p>
        </div>

        <form action={submitAction} className="space-y-5">
          
          {state.message && (
            <div className={`p-3 rounded-xl text-sm font-medium text-center animate-pulse
              ${state.success 
                ? 'bg-green-100 text-green-700 border border-green-200' 
                : 'bg-red-100 text-red-700 border border-red-200'
              }`}
            >
              {state.message}
            </div>
          )}

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-600 ml-1">Nombre de la Empresa</label>
            <input
              type="text"
              name="name"
              placeholder="Ej: Nebula Corp"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white transition-all duration-200"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-600 ml-1">Industria</label>
            <input
              type="text"
              name="industry"
              placeholder="Ej: SaaS, FinTech"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white transition-all duration-200"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-600 ml-1">Sitio Web</label>
            <input
              type="url"
              name="website"
              placeholder="https://example.com"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white transition-all duration-200"
              required
            />
          </div>

          <div className="pt-2 space-y-3">
            <button
              type="submit"
              disabled={isPending}
              className="w-full py-3.5 px-4 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-xl shadow-lg shadow-purple-300/50 hover:shadow-purple-400/60 transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isPending ? "Procesando..." : "Crear Empresa"}
            </button>

            <button
              type="button"
              className="w-full py-3 px-4 bg-white text-purple-500 font-semibold rounded-xl border border-purple-100 hover:bg-purple-50 transition-colors duration-200"
            >
              Editar datos
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default CompaniesForm;