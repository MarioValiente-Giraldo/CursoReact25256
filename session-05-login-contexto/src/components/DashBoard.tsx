import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { toast } from 'sonner'; // Solo importamos el disparador
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate()

  const handleLogout = () => {
    logout();
    navigate('/')
  };

  useEffect(() => {
    toast.success('Hola admin', {
      description: 'Bienvenido de nuevo al panel de control.',
    });
  }, []);

  return (
    <div className="min-h-screen bg-purple-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-10 rounded-3xl shadow-sm border border-purple-100 text-center">
        <h1 className="text-2xl font-bold text-purple-900 mb-6">Panel de Administración</h1>
    
        <button 
          onClick={handleLogout}
          className="bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-2 px-6 rounded-xl transition-colors duration-200 border border-red-200"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}

export default DashBoard