import { describe, expect, it } from 'vitest'
import sitemap from './sitemap'
import { projects } from '@/lib/projects'
import { site } from '@/lib/site'

describe('sitemap', () => {
  const urls = sitemap().map((entry) => entry.url)

  it('includes the home page', () => {
    expect(urls).toContain(site.url)
  })

  it('includes every project page', () => {
    for (const project of projects) {
      expect(urls).toContain(`${site.url}/projects/${project.slug}`)
    }
  })

  it('includes the privacy page', () => {
    expect(urls).toContain(`${site.url}/privacy`)
  })
})
