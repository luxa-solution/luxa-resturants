import { describe, expect, it } from 'vitest'
import robots from './robots'
import { site } from '@/lib/site'

describe('robots', () => {
  it('allows all crawlers and points at the sitemap', () => {
    const result = robots()
    expect(result.rules).toMatchObject({ userAgent: '*', allow: '/' })
    expect(result.sitemap).toBe(`${site.url}/sitemap.xml`)
  })
})
