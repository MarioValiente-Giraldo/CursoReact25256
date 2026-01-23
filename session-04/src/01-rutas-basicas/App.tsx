import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './componets/Header'
import Home from './pages/Home'
import Contact from './componets/Contact'
import About from './componets/About'
import NotFound from './componets/NotFound'

const App = () => {
    return (
        <div className='min-h-screen bg-gray-50'>
            <Header />
            <main className='max-w-4xl mx-auto mt-10 bg-white shadow-md border border-slate-200'>
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
