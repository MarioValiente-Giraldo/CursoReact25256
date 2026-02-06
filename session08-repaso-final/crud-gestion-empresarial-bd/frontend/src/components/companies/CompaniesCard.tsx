import type { Companies } from "../../types"

interface CompanyCardProps {
  company: Companies
}

const CompaniesCard = ({ company }: CompanyCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-lg shadow-purple-100/50 border border-purple-50 hover:shadow-purple-200 hover:-translate-y-1 transition-all duration-300">
      
      {/* Cabecera: Inicial y Nombre */}
      <div className="flex items-center gap-4 mb-3">
        {/* Avatar Circular Automático */}
        <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xl font-bold border border-purple-200">
          {company.name.charAt(0).toUpperCase()}
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-gray-800">{company.name}</h3>
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
            {company.industry}
          </p>
        </div>
      </div>

      {/* Enlace al sitio web  */}
      <div className="mt-3 pt-3 border-t border-purple-50">
        <a 
          href={company.website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-purple-500 hover:text-purple-700 font-medium truncate block"
        >
          🔗 {company.website.replace(/^https?:\/\//, '')}
        </a>
      </div>

    </div>
  )
}

export default CompaniesCard