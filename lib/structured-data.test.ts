import { describe, expect, it } from 'vitest'
import { buildStructuredData } from './structured-data'
import { faqs } from './faqs'

type Node = Record<string, unknown> & { '@type': string }

describe('buildStructuredData', () => {
  const data = buildStructuredData() as Node[]

  it('includes a LocalBusiness and a FAQPage node', () => {
    const types = data.map((node) => node['@type'])
    expect(types).toContain('LocalBusiness')
    expect(types).toContain('FAQPage')
  })

  it('lists every FAQ question in the FAQPage', () => {
    const faq = data.find((node) => node['@type'] === 'FAQPage') as Node & {
      mainEntity: { name: string; acceptedAnswer: { text: string } }[]
    }
    expect(faq.mainEntity).toHaveLength(faqs.length)
    expect(faq.mainEntity[0].name).toBe(faqs[0].question)
    expect(faq.mainEntity[0].acceptedAnswer.text).toBe(faqs[0].answer)
  })

  it('serves the three focus cities', () => {
    const biz = data.find((node) => node['@type'] === 'LocalBusiness') as Node & {
      areaServed: string[]
    }
    expect(biz.areaServed).toEqual(['Abuja', 'Lagos', 'Ilorin'])
  })
})
