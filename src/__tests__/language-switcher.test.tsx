import { describe, it, beforeEach, expect } from 'vitest'
import { screen, fireEvent } from '@testing-library/react'
import { renderWithI18n } from './test-utils'
import i18n from '@/lib/i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher'

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    i18n.changeLanguage('en')
    try { localStorage.removeItem('i18nextLng') } catch (_e) { void _e }
  })

  it('toggles language EN <-> RU', () => {
    renderWithI18n(<LanguageSwitcher />)
    const btnEN = screen.getByRole('button', { name: 'EN' })
    const btnRU = screen.getByRole('button', { name: 'RU' })
    expect(i18n.language).toMatch(/^en/)
    fireEvent.click(btnRU)
    expect(i18n.language).toMatch(/^ru/)
    fireEvent.click(btnEN)
    expect(i18n.language).toMatch(/^en/)
  })
})
