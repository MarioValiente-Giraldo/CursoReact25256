import React, { useState, type FormEvent } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const { login } = useAuth()
    const { theme } = useTheme()
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        login(email, password)
        navigate('/dashboard') 
    };

    const isDark = theme === 'dark'

    return (
        <div className={`min-h-screen flex items-center justify-center p-4 transition-colors ${
            isDark ? 'bg-gray-900' : 'bg-gray-100'
        }`}>
            {/* Contenedor Principal estilo Pokédex */}
            <div className={`rounded-3xl shadow-2xl p-2 w-full max-w-md border-4 ${
                isDark ? 'bg-red-700 border-gray-700' : 'bg-red-600 border-gray-900'
            }`}>
                
                {/* Pantalla interior */}
                <div className={`rounded-2xl p-8 border-4 ${
                    isDark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-800'
                }`}>
                    
                    {/* Decoración superior: Luces de la Pokédex */}
                    <div className="flex gap-2 mb-6 -mt-2">
                        <div className="w-10 h-10 bg-blue-400 rounded-full border-4 border-white shadow-inner animate-pulse"></div>
                        <div className="w-3 h-3 bg-red-500 rounded-full border border-gray-900"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full border border-gray-900"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full border border-gray-900"></div>
                    </div>

                    <div className="text-center mb-8">
                        <h1 className={`text-3xl font-black mb-2 tracking-tighter uppercase italic ${
                            isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                            Acceso Entrenador
                        </h1>
                        <div className="h-1 w-20 bg-red-500 mx-auto rounded-full"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className={`block text-xs font-black uppercase mb-2 ml-1 tracking-widest ${
                                isDark ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                                ID de Usuario (Email):
                            </label>
                            <input 
                                type='email' 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="ash.ketchum@pueblopaleta.com"
                                className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition-all font-mono text-sm ${
                                    isDark 
                                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                                        : 'bg-gray-50 border-gray-200 text-gray-900'
                                }`}
                            />
                        </div>

                        <div>
                            <label className={`block text-xs font-black uppercase mb-2 ml-1 tracking-widest ${
                                isDark ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                                Código de Acceso:
                            </label>
                            <input 
                                type='password' 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 transition-all font-mono text-sm ${
                                    isDark 
                                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                                        : 'bg-gray-50 border-gray-200 text-gray-900'
                                }`}
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-400 text-white font-black py-4 rounded-xl border-b-4 border-blue-700 shadow-lg transition-all active:border-b-0 active:translate-y-1 uppercase tracking-widest"
                        >
                            ¡Conectar!
                        </button>
                    </form>

                    {/* Decoración inferior estilo botones Pokédex */}
                    <div className="mt-8 flex justify-between items-end">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            isDark ? 'bg-gray-700' : 'bg-gray-800'
                        }`}>
                             <div className={`w-8 h-1 rounded-full ${
                                isDark ? 'bg-gray-500' : 'bg-gray-600'
                             }`}></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className={`w-16 h-2 rounded-full ${
                                isDark ? 'bg-red-300' : 'bg-red-200'
                            }`}></div>
                            <div className={`w-16 h-2 rounded-full ${
                                isDark ? 'bg-red-300' : 'bg-red-200'
                            }`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;