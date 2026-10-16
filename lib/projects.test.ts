import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { projects } from './projects'

const prefixBySlug: Record<string, string> = {
  'rawdatul-atfaal': 'rk',
  'markazul-bayaan': 'jz',
  'bryt-kids': 'br',
  'ao-consulting': 'ao',
}

describe('projects images', () => {
  it('lists five screenshots per project', () => {
    for (const project of projects) {
      expect(project.images).toHaveLength(5)
    }
  })

  it('points each project at its own slug folder', () => {
    for (const project of projects) {
      const prefix = prefixBySlug[project.slug]
      project.images.forEach((src, index) => {
        expect(src).toBe(`/projects/${project.slug}/${prefix}${index + 1}.png`)
      })
    }
  })

  it('references image files that exist on disk', () => {
    for (const project of projects) {
      for (const src of project.images) {
        expect(existsSync(join(process.cwd(), 'public', src))).toBe(true)
      }
    }
  })
})
