import React, { useEffect, useState } from 'react'

const UseEffectBasica = () => {
    const [isTabActive,setIsTabActive] = useState(true);

    useEffect(()=>{
        // const active = document.visibilityState === "visible"
        // setIsTabActive(active)
        // document.title = active? "React 19" : "¡VUELVE 😿!"
    },[])

    
  return (
    <div className={`p-8 rounded-3xl transition-all duration-300 border-2
        ${isTabActive? "bg-white-300 border-e-sky-500" :"bg-slate-5 border-slate-600 opacity-0"}`
    }>
        <h2 className='text-2xl font-bold text-slate-800 mb-4'>El estado de la pantalla es {isTabActive?'🟢':'🔴'}</h2>
        
    </div>
  )
}

export default UseEffectBasica
