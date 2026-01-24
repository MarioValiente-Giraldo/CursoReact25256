import React, { type ReactNode } from 'react'
import { AuthProvider } from './AuthContext'
import { ThemeProvider } from './ThemeContext'

const AppProvider = ({ children } : {children : ReactNode}) => {
  return (
    <div>
      <AuthProvider>
        <ThemeProvider>
            {children}
        </ThemeProvider>
      </AuthProvider>
    </div>
  )
}

export default AppProvider
