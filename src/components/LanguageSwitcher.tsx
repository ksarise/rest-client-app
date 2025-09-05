'use client'

import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => i18n.changeLanguage('en')}
        aria-pressed={i18n.language.startsWith('en')}
        className="px-3 py-1 rounded border"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => i18n.changeLanguage('ru')}
        aria-pressed={i18n.language.startsWith('ru')}
        className="px-3 py-1 rounded border"
      >
        RU
      </button>
    </div>
  )
}
