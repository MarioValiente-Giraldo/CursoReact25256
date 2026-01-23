import React from 'react'

interface SearchProps {
  placeholder: string;
  onSearchChange(value:string): void
}

const Search = ({ placeholder, onSearchChange }: SearchProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto py-8 px-4">
      <form className="relative flex items-center">
        <span className="absolute left-6 text-xl opacity-70 pointer-events-none z-10">
          🔎
        </span>
        <input 
          type='text' 
          placeholder={placeholder} 
          className='w-full pl-12 px-5 py-3 bg-white/60 backdrop-blur-sm border-2 border-red-200 rounded-2xl 
                     text-gray-700 placeholder-gray-500 transition-all duration-300 shadow-md
                     focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-100 focus:outline-none
                     hover:border-red-300 hover:shadow-lg' 
          onChange={(e)=>onSearchChange(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Search