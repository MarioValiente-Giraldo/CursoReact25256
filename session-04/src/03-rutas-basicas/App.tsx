import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './componets/Header'
import Home from './pages/Home'
import Saludo from './componets/Saludo'
import NotFound from './componets/NotFound'
 const About = lazy(()=>import ('./componets/About'))

const App = () => {
    return (
        <div className='min-h-screen bg-gray-50'>
            <Header />
            <main className='max-w-4xl mx-auto mt-10 bg-white shadow-md border border-slate-200'>
                <Suspense fallback={<h2>Carhadno App</h2>}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/saludo/:nombre' element={<Saludo />}/>
                        <Route path='/about' element={<About />} />
                        <Route path='*' element={<NotFound />}/>
                    </Routes>
                </Suspense>
            </main>
        </div>
    )
}

export default App
