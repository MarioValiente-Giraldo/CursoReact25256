import type { Companies } from "../../types"
import CompaniesCard from "./CompaniesCard"

interface CompaniesListProps{
    companies:Companies[]
}
const CompaniesList = ({companies}:CompaniesListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {companies.map((company) => (<CompaniesCard key={company.id}company={company} />))}
    </div>
  )
}

export default CompaniesList
