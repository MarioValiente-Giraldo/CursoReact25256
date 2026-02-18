import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useEffect } from "react"
import { useIncidentContext } from "../hooks/useIncidentContext"

export const HomePage = () => {
    const {user}=useAuthContext()
    const {fetchIncidents}=useIncidentContext()
    useEffect(()=>{
        fetchIncidents()
    },[fetchIncidents])
  return (
    <div>
        <h1>
            Bienvenido a IncidTech {!!user && user.name}
        </h1>

        <Link to='/incidents'>
        Pulse aquí para ver las incidencias
        </Link>
    </div>
  )
}
