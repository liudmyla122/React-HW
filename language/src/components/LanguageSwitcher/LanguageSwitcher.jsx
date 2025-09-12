import React from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import { translations } from '../../data/translations'
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useLanguage()
  const t = translations[language]

  return (
    <div className="language-switcher">
      <h1 className="title">{t.title}</h1>
      <button onClick={switchLanguage} className="switch-button">
        {t.buttonText}
      </button>
    </div>
  )
}

export default LanguageSwitcher
