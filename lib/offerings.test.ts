import { describe, expect, it } from 'vitest'
import { packages } from './offerings'

describe('packages', () => {
  it('exposes the three Luxa tiers in order', () => {
    expect(packages.map((pkg) => pkg.name)).toEqual([
      'Starter Menu Site',
      'Growth',
      'Signature Brand Experience',
    ])
  })

  it('shows the confirmed price ranges', () => {
    expect(packages[0].price).toBe('₦150,000 – ₦500,000')
    expect(packages[1].price).toBe('₦500,000 – ₦1,500,000')
    expect(packages[2].price).toBe('₦1,500,000+')
  })

  it('marks the Growth tier as the popular choice', () => {
    expect(packages.find((pkg) => pkg.popular)?.name).toBe('Growth')
  })
})
