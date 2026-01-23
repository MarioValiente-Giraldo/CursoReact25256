import React, { useState, type FormEvent } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const esAdmin = login(email, password)
        esAdmin ? navigate('/dashboard') : navigate('/home')
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-purple-50 p-4">
            <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md border border-purple-100">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-purple-900 mb-2 tracking-tight">Bienvenido</h1>
                    <p className="text-purple-400 font-medium">Inicia sesión para continuar</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-purple-700 mb-2 ml-1">Usuario:</label>
                        <input 
                            type='email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="correo@ejemplo.com"
                            className="w-full px-4 py-3 rounded-xl border border-purple-100 bg-purple-50/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-purple-700 mb-2 ml-1">Contraseña:</label>
                        <input 
                            type='password' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-xl border border-purple-100 bg-purple-50/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all outline-none"
                        />
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-purple-200 transition-all active:scale-[0.98]"
                    >
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm