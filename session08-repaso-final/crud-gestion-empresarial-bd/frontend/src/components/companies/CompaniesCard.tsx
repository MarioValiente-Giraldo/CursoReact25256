import type { Companies } from "../../types"
// import { companiesAPI } from "../../utils/api" // <-- ESTO SOBRA AQUÍ. No lo usamos.

interface CompanyCardProps {
  company: Companies
  onDelete: (id:number)=>void
}

const CompaniesCard = ({ company, onDelete }: CompanyCardProps) => {
  return (
    // 1. Añadido 'flex flex-col justify-between h-full' para que el pie de página siempre quede abajo si el contenido varía
    <div className="bg-white rounded-3xl p-6 shadow-lg shadow-purple-100/50 border border-purple-50 hover:shadow-xl hover:shadow-purple-200/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
      
      <div> {/* Wrapper del contenido principal */}
        {/* Cabecera: Inicial y Nombre */}
        <div className="flex items-start gap-4 mb-5">
          {/* Avatar Circular Automático */}
          {/* Cambiado a rounded-2xl para un look más "app moderna" */}
          <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl font-extrabold border-2 border-purple-50 shadow-sm shrink-0">
            {company.name.charAt(0).toUpperCase()}
          </div>
          
          <div className="overflow-hidden">
            {/* Añadido truncate para nombres muy largos */}
            <h3 className="text-xl font-bold text-gray-800 leading-tight truncate" title={company.name}>
                {company.name}
            </h3>
            <p className="text-xs text-purple-500 font-semibold uppercase tracking-widest mt-1">
              {company.industry}
            </p>
          </div>
        </div>

        {/* Enlace al sitio web  */}
        <div className="mt-4 pt-4 border-t border-dashed border-purple-100">
          <a 
            href={company.website} 
            target="_blank" 
            rel="noopener noreferrer"
            // Añadido 'group' para efecto hover en el icono
            className="group flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 font-medium transition-colors"
          >
             {/* Icono de enlace pequeño */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-purple-300 group-hover:text-purple-500 transition-colors shrink-0">
              <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 000 5.656.75.75 0 001.06-1.06 2.5 2.5 0 010-3.536l3-3z" />
              <path d="M3.353 14.647a2.5 2.5 0 010-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 005.656 5.656l3-3a4 4 0 000-5.656.75.75 0 00-1.06 1.06 2.5 2.5 0 010 3.536l-3 3a2.5 2.5 0 01-3.536 0z" />
            </svg>
            {/* Doble replace para limpiar www. y http:// */}
            <span className="truncate">{company.website.replace(/^https?:\/\//, '').replace(/^www\./, '')}</span>
          </a>
        </div>
      </div>

      {/* Footer: Botón para eliminar empresa */}
      {/* 2. Separador superior y alineación a la derecha */}
      <div className="mt-6 pt-4 border-t border-purple-50 flex justify-end">
        <button 
          onClick={()=>onDelete(company.id)}
          // 3. Estilos del botón: Rojo pastel, borde suave, icono y efecto hover
          className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-red-500 bg-red-50 border border-red-100 rounded-xl hover:bg-red-100 hover:text-red-600 hover:border-red-200 transition-all duration-200 active:scale-95"
        >
          {/* Icono de basura SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
          </svg>
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default CompaniesCard