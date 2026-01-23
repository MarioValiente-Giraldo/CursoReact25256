import React from 'react'

interface LoadinCallBackProps {
  // Mensaje personalizado que se muestra durante la carga (opcional)
  message?:string
}

/**
 * Componente que muestra un indicador de carga con un spinner animado
 * y un mensaje personalizable.
 * @param message - Mensaje a mostrar bajo el spinner (por defecto: 'Cargando contenido...')
 */
const LoadingFallBack = ({ message = 'Cargando contenido...' } : LoadinCallBackProps) => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <div className='text-center'>
        {/* Spinner circular animado */}
        <div className='animate-spin rounded-full h-16 w-16 border-2 border-e-blue-700 mx-auto mb-4'>
        </div>
        {/* Mensaje de carga */}
        <p>{message}</p>
      </div>
    </div>
  )
}

export default LoadingFallBack