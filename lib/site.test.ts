import { describe, expect, it } from 'vitest'
import { site, waLink } from './site'

describe('waLink', () => {
  it('targets the Luxa WhatsApp number', () => {
    expect(waLink()).toContain('https://wa.me/2347047494586')
  })

  it('includes the restaurant name in the prefilled message', () => {
    expect(decodeURIComponent(waLink('Savour Lagos'))).toContain('Savour Lagos')
  })

  it('falls back to a generic message when no restaurant is given', () => {
    expect(decodeURIComponent(waLink())).toContain('my restaurant')
  })
})

describe('site contact details', () => {
  it('exposes the configured contact details', () => {
    expect(site.whatsapp).toBe('2347047494586')
    expect(site.email).toBe('luxadigitalsolutions@gmail.com')
    expect(site.instagram).toBe('https://www.instagram.com/luxa.build/')
  })
})
