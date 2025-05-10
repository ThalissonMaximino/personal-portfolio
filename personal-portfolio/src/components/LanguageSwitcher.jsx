import { useTranslation } from 'react-i18next'
import brFlag from '../assets/br.png'
import usFlag from '../assets/us.png'
import './LanguageSwitcher.scss'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="language-switcher">
      <button onClick={() => i18n.changeLanguage('pt')} title="Português">
        <img src={brFlag} alt="Português" />
      </button>
      <button onClick={() => i18n.changeLanguage('en')} title="English">
        <img src={usFlag} alt="English" />
      </button>
    </div>
  )
}