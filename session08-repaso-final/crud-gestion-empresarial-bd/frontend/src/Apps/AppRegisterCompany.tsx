import { useEffect, useState } from "react"
import type{ Companies } from "../types"
import CompaniesForm from "../components/companies/CompaniesForm"
import { companiesAPI } from "../utils/api"
import CompaniesList from "../components/companies/CompaniesList"
import CompaniesSearch from "../components/companies/CompaniesSearch"

const AppRegisterCompany = () => {
  const [companies,setCompanies]=useState<Companies[]>([])
  const [filterText,setFilterText]=useState('')
  const [loading,setLoading] = useState(true)
  const [error,setError]=useState<string | null>(null)
  
  const handleDeleteButton=async(id:number|string)=>{
      try{
          await companiesAPI.deleteById(id)
          setCompanies((prev)=>prev.filter((company)=>company.id!==id))
      }catch(error){
        throw error
      }
  }

  const fetchCompanies = async()=>{
    try {
      setLoading(true)
      const data = await companiesAPI.getAll();
      setCompanies(data.companies)
      setError(null)
    } catch (error) {
      setError('Error al cargar las empresas')      
    } finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchCompanies()
  },[])

  const filteredList = companies.filter((company) => 
    company.name.toLowerCase().includes(filterText.toLowerCase()) ||
    company.industry.toLowerCase().includes(filterText.toLowerCase())
)
  return (
    <div>
      <CompaniesSearch onSearch={setFilterText} />
      <CompaniesList onDelete={handleDeleteButton} companies={filteredList} />
      <CompaniesForm onSuccess={fetchCompanies} />
      {loading && <p>Cargando empresas...</p>}
      {error && <p>{error}</p>}
    </div>
  )
}

export default AppRegisterCompany
