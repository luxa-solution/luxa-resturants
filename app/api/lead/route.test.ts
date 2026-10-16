import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { POST } from './route'

const validLead = {
  restaurant: 'Savour Lagos',
  name: 'Ada',
  whatsapp: '+2348012345678',
  instagram: '@savour',
  city: 'Lagos',
  hasWebsite: 'None',
  message: 'We need a menu site',
}

function makeRequest(body: unknown) {
  return new Request('http://localhost/api/lead', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
}

describe('POST /api/lead', () => {
  beforeEach(() => {
    process.env.LEAD_WEBHOOK_URL = 'https://example.com/exec'
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('ok', { status: 200 })))
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    delete process.env.LEAD_WEBHOOK_URL
  })

  it('forwards a valid lead to the webhook and returns ok', async () => {
    const res = await POST(makeRequest(validLead))
    expect(res.status).toBe(200)

    const fetchMock = fetch as unknown as ReturnType<typeof vi.fn>
    expect(fetchMock).toHaveBeenCalledTimes(1)
    const [url, init] = fetchMock.mock.calls[0]
    expect(url).toBe('https://example.com/exec')

    const sent = JSON.parse((init as RequestInit).body as string)
    expect(sent.restaurant).toBe('Savour Lagos')
    expect(sent.name).toBe('Ada')
    expect(sent.whatsapp).toBe('+2348012345678')
    expect(sent.city).toBe('Lagos')
    expect(sent.source).toBe('luxa-restaurants-funnel')
  })

  it('rejects a lead missing a required field without forwarding', async () => {
    const res = await POST(makeRequest({ ...validLead, restaurant: '   ' }))
    expect(res.status).toBe(400)
    expect(fetch).not.toHaveBeenCalled()
  })

  it('silently ignores honeypot submissions', async () => {
    const res = await POST(makeRequest({ ...validLead, company: 'spam-bot' }))
    expect(res.status).toBe(200)
    expect(fetch).not.toHaveBeenCalled()
  })

  it('returns 502 when the webhook fails', async () => {
    ;(fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce(
      new Response('bad', { status: 500 }),
    )
    const res = await POST(makeRequest(validLead))
    expect(res.status).toBe(502)
  })

  it('returns 500 when the webhook is not configured', async () => {
    delete process.env.LEAD_WEBHOOK_URL
    const res = await POST(makeRequest(validLead))
    expect(res.status).toBe(500)
    expect(fetch).not.toHaveBeenCalled()
  })
})
