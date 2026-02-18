import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

export const HomePage = () => {
    const {user}=useAuthContext()
  return (
    <div className="page">
        <h1 className="page-title">
            Bienvenido a IncidTech {!!user && user.name}
        </h1>
        <p className="page-subtitle">Gestiona las incidencias de tu organización de forma sencilla.</p>
        <Link to='/incidents' className="btn btn-primary" style={{width:'fit-content'}}>
            Ver incidencias
        </Link>
    </div>
  )
}
