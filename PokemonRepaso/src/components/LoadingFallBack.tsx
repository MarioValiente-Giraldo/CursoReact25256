import React from 'react'
import loadingGif from '../assets/loadingGif.gif' // ← Importas el GIF

interface LoadingFallBackProps {
  message: string;
}

const LoadingFallBack = ({ message }: LoadingFallBackProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <img 
        src={loadingGif} 
        alt="Loading Pokemon"
        className="w-40 h-40 mb-6 drop-shadow-lg"
      />
      <p className="text-xl font-semibold text-gray-700 animate-pulse">
        {message}
      </p>
    </div>
  )
}

export default LoadingFallBack