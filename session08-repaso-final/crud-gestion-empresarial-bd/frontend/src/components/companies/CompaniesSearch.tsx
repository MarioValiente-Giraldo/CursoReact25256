import { useEffect, useState } from "react";

interface CompaniesSeaarchProps{
    onSearch:(value:string)=>void;
}
const CompaniesSearch = ({ onSearch}:CompaniesSeaarchProps) => {
    const[text,setText]=useState('')
    useEffect(()=>{
        const timer = setTimeout(()=>{
            onSearch(text)
        },500)
        return ()=>clearTimeout(timer)
    },[text,onSearch])

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <form className="relative group">
        
        {/* Icono de Lupa (Posicionado absolutamente a la izquierda) */}
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-gray-400 group-focus-within:text-purple-500 transition-colors duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Input Estilizado */}
        <input 
          type="text" 
          placeholder="Buscar empresa..." 
          onChange={(e)=> setText(e.target.value)}
          value={text}
          className="block w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-2xl 
                     text-gray-700 placeholder-gray-400 shadow-sm
                     focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 
                     transition-all duration-300 ease-in-out"
        />
        
      </form>
    </div>
  )
}

export default CompaniesSearch