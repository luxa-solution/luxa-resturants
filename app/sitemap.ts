import type { MetadataRoute } from 'next'
import { projects } from '@/lib/projects'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: site.url, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${site.url}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
