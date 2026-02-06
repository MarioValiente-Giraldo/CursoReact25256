import { useEffect, useState } from "react"
import type{ Companies } from "../types"
import CompaniesForm from "../components/companies/CompaniesForm"
import { companiesAPI } from "../utils/api"
import CompaniesList from "../components/companies/CompaniesList"

const AppRegisterCompany = () => {
  const [companies,setCompanies]=useState<Companies[]>([])
  const [loading,setLoading] = useState(true)
  const [error,setError]=useState<string | null>(null)
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
  return (
    <div>
      <CompaniesList companies={companies} />
      <CompaniesForm />
    </div>
  )
}

export default AppRegisterCompany
