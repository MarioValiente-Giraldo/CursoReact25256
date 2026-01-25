import { type ReactNode } from 'react'
import { AuthProvider } from './AuthContext'
import { ThemeProvider } from './ThemeContext'
import { LanguageProvider } from './LanguageContext'

const AppProvider = ({ children } : {children : ReactNode}) => {
  return (
    <div>
      <AuthProvider>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </AuthProvider>
    </div>
  )
}

export default AppProvider
