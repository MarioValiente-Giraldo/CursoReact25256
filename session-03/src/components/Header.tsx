import React from 'react'

const Header = () => {
  return (
    <header className='text-center'>
          <h1>
            <p className='text-4xl font-extrabold text-slate-900 mb-4'
            >Menú Platos 
            <span className='text-orange-600'> Premiun</span></p>
          </h1>
          <p>Explora nuestra carta de platos internacionales. Usando:
            <code className='text-orange-400'> React 19</code>
          </p>
      </header>
  )
}

export default Header
