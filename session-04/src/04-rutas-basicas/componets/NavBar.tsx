import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='bg-white border-b border-slate-200 p-8 flex justify-center items-center gap-12 shadow-sm top-0 z-50 sticky'>
            {/* Enlaces en React Router dom */}
            <Link to='/'
            className='text-slate-400 hover:text-slate-900 font-bold uppercase text-2xl transition-all'> 
            🏠Inicio</Link>

            <NavLink to='/secret'
            className={({ isActive})=>(
                `p-8 py-3 rounded-xl font-bold transition-all text-sm shadow-md scale-90
                ${isActive?
                    "bg-indigo-600 text-white shadow-indigo-200"
                    :"bg-slate-100 text-slate-400 hover:text-slate-700 hover:bg-slate-700"
                }
                `
            )}>Secreto</NavLink>
        </nav>
    )
}

export default NavBar
