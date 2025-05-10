import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './PersonaMenu.scss'

export default function PersonaMenu() {
    const { t } = useTranslation()
  useEffect(() => {
    const highlightElements = document.querySelectorAll('.highlight')
    const listEl = document.querySelector('#funny-list')

    const handleMouseOver = (e) => {
      if (!e.target.classList.contains('p-list-item')) return

      const listRect = listEl.getBoundingClientRect()
      const itemRect = e.target.getBoundingClientRect()

      requestAnimationFrame(() => {
        highlightElements.forEach(el => {
          el.classList.add('active')
          el.style.width = itemRect.width + 'px'
          el.style.height = itemRect.height + 'px'
          el.style.top = itemRect.top + 'px'
          el.style.left = (listRect.left + 12) + 'px'
        })
      })
    }

    const handleMouseLeave = () => {
      highlightElements.forEach(el => {
        el.classList.remove('active')
        el.removeAttribute('style')
      })
    }

    listEl.addEventListener('mouseover', handleMouseOver)
    listEl.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      listEl.removeEventListener('mouseover', handleMouseOver)
      listEl.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])


  return (
    <div className="p-demo">
      <ul id="funny-list" className="p-list font-display">
        <li className="p-list-item">{t('menu.home')}</li>
        <li className="p-list-item">{t('menu.projects')}</li>
        <li className="p-list-item">{t('menu.about')}</li>
        <li className="p-list-item">{t('menu.contact')}</li>
        <li className="p-list-item">{t('menu.timeline')}</li>
        <li className="p-list-item">{t('menu.uses')}</li>
      </ul>
      <div className="highlight highlight-back"></div>
      <div className="highlight highlight-front"></div>
    </div>
  )
}