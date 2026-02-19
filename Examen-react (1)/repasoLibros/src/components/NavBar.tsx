import { Link, Outlet } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useBookContext } from "../hooks/useBookContext"

const NavBar = () => {
  const { user, logout } = useAuthContext()
  const {contadorCarrito}=useBookContext()

  return (
    <>
        <nav className="bg-amber-100 text-amber-900 px-6 py-3 flex items-center justify-between shadow-sm rounded-b-2xl">
        <span className="text-lg font-bold tracking-wide">📚 Biblioteca</span>

        <div className="flex items-center gap-4">
            <div>
                Carrito: {contadorCarrito}
            </div>
            <Link
            to="/"
            className="text-sm font-medium hover:text-amber-600 transition-colors"
            >
            Libros
            </Link>
               <Link
                to="/crear"
                className="text-sm font-medium hover:text-amber-600 transition-colors"
                >
                Crear un libro
            </Link>

            {user ? (
                <div className="flex items-center gap-3">
                <span className="text-xs text-amber-700">{user.email}</span>
                <button
                onClick={logout}
                className="text-sm font-medium bg-amber-300 hover:bg-amber-400 text-amber-900 px-3 py-1.5 rounded-lg transition-colors"
                >
                Logout
                </button>
            </div>
            ) : (
                <Link
                to="/login"
                className="text-sm font-medium bg-amber-300 hover:bg-amber-400 text-amber-900 px-3 py-1.5 rounded-lg transition-colors"
                >
                Login
            </Link>
            )}
        </div>
        </nav>
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default NavBar
