import { NavLink, Route, Routes } from "react-router-dom"
import SecretArea from "./pages/SecretArea"
import PublicHome from "./componets/PublicHome"
import { useState } from "react"
import { ProtectedRoute } from "./componets/ProtectedRoute"
import Header from "./componets/Header"

const App = () => {
    const [isAllowed,setIsAllowed] = useState(false)
    return (
        <div className='min-h-screen bg-slate-50'>
            <Header />
            <nav className="max-w-5xl mx-auto flex items-center justify-between bg-slate-800 rounded-2xl">
                <div className="felx gap-8 ml-6">
                    <NavLink to='/'
                    className={({isActive})=>`
                     text-xs font-bold p-8 py-3 rounded-xl transition-all ${isActive ? 'text-white':' hover:text-pink-600'}`}>Public</NavLink>
                    <NavLink to='/secret'
                        className={({isActive})=>`
                        text-xs font-bold p-8 py-3 rounded-xl transition-all ${isActive ? 'text-white':' hover:text-pink-600'}`}>Secret</NavLink>                
                </div>
                <button 
                onClick={()=>setIsAllowed(!isAllowed)}
                className={`px-10 py-3 rounded-xl font-black text-xs uppercase transition-all active:scale-95
                    ${isAllowed?
                    'bg-slate-900 text-slate-400 border-slate-700'
                    :'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'}`
                    }>
                    {isAllowed?'Sing Out':'Sing in'}
                </button>
            </nav>
            <main className="max-w-4xl mx-auto">
                <Routes>
                    <Route path="/" element={<PublicHome />} />
                    <Route path="/secret" element ={
                        <ProtectedRoute isAllowed={ isAllowed } >
                            <SecretArea/>
                        </ProtectedRoute>
                    }/>                
                </Routes>
            </main>
        </div>
    )
}

export default App
