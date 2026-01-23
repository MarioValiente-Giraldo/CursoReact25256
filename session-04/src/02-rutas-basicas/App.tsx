import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './componets/Header'
import Home from './pages/Home'
import Contact from './componets/Contact'
import About from './componets/About'
import NotFound from './componets/NotFound'
import NavBar from './componets/NavBar'

const App = () => {
    return (
        <div className='min-h-screen bg-gray-50'>
            <NavBar />
            <main className='max-w-4xl mx-auto mt-10 bg-blue-200 shadow-md border border-slate-200 min-h-[500px]'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contacto' element={<Contact />}/>
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<NotFound />}/>
                </Routes>
            </main>
        </div>
    )
}

export default App
