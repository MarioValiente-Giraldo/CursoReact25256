import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const { logout } = useAuth()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 p-6">
      <div className="bg-white p-12 rounded-3xl shadow-sm border border-purple-100 text-center max-w-sm">
        <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
          👋
        </div>
        <h2 className="text-2xl font-bold text-purple-900 mb-2">Acceso Estándar</h2>
        <p className="text-purple-500 mb-8">
          Esto es el home. Tu cuenta no tiene permisos de administrador.
        </p>
        
        <button 
          onClick={() => {
            logout()
            navigate('/')
          }}
          className="flex items-center justify-center gap-2 w-full text-purple-600 font-semibold py-3 px-6 rounded-xl border-2 border-purple-200 hover:bg-purple-50 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al Login
        </button>
      </div>
    </div>
  )
}

export default Home