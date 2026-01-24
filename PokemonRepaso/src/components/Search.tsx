import React from 'react'
import { useTheme } from '../context/ThemeContext'

interface SearchProps {
  placeholder: string;
  onSearchChange(value:string): void
}

const Search = ({ placeholder, onSearchChange }: SearchProps) => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="w-full max-w-2xl mx-auto py-8 px-4">
      <form className="relative flex items-center">
        <span className={`absolute left-6 text-xl pointer-events-none z-10 ${
          isDark ? 'opacity-60' : 'opacity-70'
        }`}>
          🔎
        </span>
        <input 
          type='text' 
          placeholder={placeholder} 
          className={`w-full pl-12 px-5 py-3 backdrop-blur-sm border-2 rounded-2xl 
                     transition-all duration-300 shadow-md
                     focus:outline-none focus:ring-4
                     ${isDark 
                       ? 'bg-gray-800/60 border-red-400 text-gray-100 placeholder-gray-400 focus:bg-gray-800 focus:border-red-500 focus:ring-red-900 hover:border-red-300 hover:shadow-xl' 
                       : 'bg-white/60 border-red-200 text-gray-700 placeholder-gray-500 focus:bg-white focus:border-red-500 focus:ring-red-100 hover:border-red-300 hover:shadow-lg'
                     }`}
          onChange={(e)=>onSearchChange(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Search