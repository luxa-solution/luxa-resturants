import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import LuxaHome from './luxa-home'

async function fillAndSubmit() {
  const user = userEvent.setup()
  render(<LuxaHome />)

  await user.type(screen.getByPlaceholderText('Restaurant name'), 'Savour Lagos')
  await user.type(screen.getByPlaceholderText('Your name'), 'Ada')
  await user.type(screen.getByPlaceholderText('WhatsApp number (+234)'), '+2348012345678')
  await user.click(screen.getByRole('button', { name: /get my free website audit/i }))
}

describe('audit form', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 })),
    )
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('posts the lead and shows a success message', async () => {
    await fillAndSubmit()

    expect(await screen.findByText('Audit request received.')).toBeInTheDocument()

    const fetchMock = fetch as unknown as ReturnType<typeof vi.fn>
    expect(fetchMock).toHaveBeenCalledTimes(1)
    const [url, init] = fetchMock.mock.calls[0]
    expect(url).toBe('/api/lead')
    const sent = JSON.parse((init as RequestInit).body as string)
    expect(sent.restaurant).toBe('Savour Lagos')
    expect(sent.name).toBe('Ada')
    expect(sent.whatsapp).toBe('+2348012345678')
  })

  it('shows an error message when the request fails', async () => {
    ;(fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce(
      new Response(JSON.stringify({ ok: false }), { status: 502 }),
    )

    await fillAndSubmit()

    expect(await screen.findByRole('alert')).toHaveTextContent(/couldn.t send|try again|went wrong/i)
    expect(screen.queryByText('Audit request received.')).not.toBeInTheDocument()
  })

  it('exposes an accessible label for every field', () => {
    render(<LuxaHome />)

    expect(screen.getByLabelText('Restaurant name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your name')).toBeInTheDocument()
    expect(screen.getByLabelText('WhatsApp number')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram handle')).toBeInTheDocument()
    expect(screen.getByLabelText('City')).toBeInTheDocument()
    expect(screen.getByLabelText('Do you have a website?')).toBeInTheDocument()
    expect(screen.getByLabelText('Anything you want us to know? (optional)')).toBeInTheDocument()
  })
})
