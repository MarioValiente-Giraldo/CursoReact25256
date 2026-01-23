import React from 'react'

const Header = () => {
  return (
        <header
        className='bg-slate-900 text-white shadow-2xl'>
            <div 
            className='max-w-6xl mx-auto flex justify-between items-center'>
                <h1
                className='text-sm font-black uppercase'>Sesion 02 Use Effect</h1>
                <span className='bg-amber-500 text-slate-800 py-2 rounded-full font-black uppercase'>Mario Valiente </span>
            </div>
        </header>
    
  )
}

export default Header
