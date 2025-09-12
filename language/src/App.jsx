import React from 'react'
import { LanguageProvider } from './context/LanguageContext'
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher'
import './styles/App.css'

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  )
}

export default App
