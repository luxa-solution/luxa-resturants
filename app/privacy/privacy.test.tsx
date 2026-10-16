import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import PrivacyPage from './page'

describe('/privacy', () => {
  it('renders a privacy policy heading', () => {
    render(<PrivacyPage />)
    expect(screen.getByRole('heading', { level: 1, name: /privacy policy/i })).toBeInTheDocument()
  })

  it('lists the Luxa contact email', () => {
    render(<PrivacyPage />)
    expect(screen.getByText(/luxadigitalsolutions@gmail\.com/)).toBeInTheDocument()
  })
})
