import { NavLink } from 'react-router-dom'
import '../index.css';
import { useAuthContext } from '../hooks/useAuthContext';


export const NavBar = () => {
  const {user,logout} = useAuthContext();
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        🏠 Incidencias
      </NavLink>
      <div className="navbar-links">
        <NavLink to="/" className="nav-link">Inicio</NavLink>
        <NavLink to="/incidents" className="nav-link">Incidencias</NavLink>
        <NavLink to="/createIncident" className="nav-link">Crear incidencia</NavLink>
        {user ? (
          <>
            <span className="navbar-user">{user.name}</span>
            <button className="btn-logout" onClick={() => logout()}>Cerrar sesión</button>
          </>
        ) : (
          <NavLink to="/login" className="nav-link">Iniciar sesión</NavLink>
        )}
      </div>
    </nav>
  )
}
