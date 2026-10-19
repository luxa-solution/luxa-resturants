import { ImageResponse } from 'next/og'

export const alt = 'Luxa — Websites for growing restaurants'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const cities = ['Abuja', 'Lagos', 'Ilorin']

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #100b08 0%, #1b100c 55%, #2a140c 100%)',
        color: '#fff6e9',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 82% 12%, rgba(99, 50, 25, 0.9) 0%, rgba(99, 50, 25, 0) 44%), radial-gradient(circle at 6% 92%, rgba(255, 122, 26, 0.18) 0%, rgba(255, 122, 26, 0) 38%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: '50px 64px 46px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16 }}>
            <div style={{ display: 'flex', fontSize: 40, fontWeight: 700, letterSpacing: -2.4 }}>
              luxa<span style={{ color: '#ff9b3f' }}>.</span>
            </div>
            <div style={{ display: 'flex', fontSize: 15, color: '#bca896', paddingBottom: 5 }}>
              Websites for restaurants already growing
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              border: '1px solid rgba(255, 155, 63, 0.32)',
              borderRadius: 999,
              padding: '9px 16px',
              fontSize: 13,
              color: '#ffd6ae',
              background: 'rgba(255, 155, 63, 0.09)',
            }}
          >
            <span style={{ color: '#ffb347' }}>●</span>
            Built for restaurants
          </div>
        </div>

        <div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: 36, paddingTop: 18 }}>
          <div style={{ display: 'flex', flexDirection: 'column', width: 640 }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: 52,
                fontWeight: 700,
                lineHeight: 1.04,
                letterSpacing: -2.2,
              }}
            >
              <span>Your Instagram brings</span>
              <span>the hunger.</span>
              <span style={{ color: '#ff9b3f', fontFamily: 'serif', fontStyle: 'italic', fontWeight: 400 }}>
                Your website
              </span>
              <span>brings the orders.</span>
            </div>

            <div
              style={{
                display: 'flex',
                marginTop: 18,
                maxWidth: 540,
                fontSize: 19,
                lineHeight: 1.5,
                color: '#cbb9aa',
              }}
            >
              We design and launch beautiful, fast websites for growing restaurants — with menus, WhatsApp
              ordering and Google visibility built in.
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 22 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  borderRadius: 999,
                  padding: '12px 22px',
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#1a0e08',
                  background: 'linear-gradient(90deg, #ffb347 0%, #ff7a1a 100%)',
                }}
              >
                Get My Free Website Audit
                <span style={{ fontSize: 18 }}>→</span>
              </div>
              {cities.map((city) => (
                <div
                  key={city}
                  style={{
                    display: 'flex',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    borderRadius: 999,
                    padding: '8px 14px',
                    fontSize: 13,
                    color: '#dfcbbb',
                  }}
                >
                  {city}
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
            <div
              style={{
                display: 'flex',
                position: 'relative',
                width: 330,
                borderRadius: 38,
                padding: 10,
                border: '1px solid rgba(255, 255, 255, 0.24)',
                background: 'rgba(0, 0, 0, 0.28)',
                transform: 'rotate(3deg)',
                boxShadow: '0 30px 70px rgba(0, 0, 0, 0.45)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  borderRadius: 30,
                  overflow: 'hidden',
                  background: '#f8eee1',
                  color: '#2c1910',
                }}
              >
                <div style={{ display: 'flex', height: 26, background: '#e9d6c1', padding: '0 18px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', padding: 18 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 21, fontWeight: 700, letterSpacing: -0.5 }}>SAVOUR</span>
                    <span style={{ fontSize: 10, letterSpacing: 2.5, color: '#90684d' }}>MENU</span>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      marginTop: 26,
                      borderRadius: 22,
                      padding: 16,
                      background: 'linear-gradient(135deg, #e16b2f 0%, #5d2418 100%)',
                      color: '#ffffff',
                    }}
                  >
                    <span style={{ fontSize: 10, letterSpacing: 2.2, color: '#ffddc6' }}>TONIGHT AT SAVOUR</span>
                    <span style={{ marginTop: 8, fontSize: 29, fontWeight: 700, lineHeight: 1 }}>Good food.</span>
                    <span style={{ fontFamily: 'serif', fontStyle: 'italic', fontSize: 26, lineHeight: 1.15 }}>
                      Good mood.
                    </span>
                    <div
                      style={{
                        display: 'flex',
                        alignSelf: 'flex-start',
                        marginTop: 12,
                        borderRadius: 999,
                        padding: '8px 12px',
                        background: '#ffffff',
                        color: '#592116',
                        fontSize: 11,
                        fontWeight: 700,
                      }}
                    >
                      Order on WhatsApp
                    </div>
                  </div>

                  <span
                    style={{
                      marginTop: 16,
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: 2,
                      color: '#90684d',
                    }}
                  >
                    CUSTOMER FAVOURITES
                  </span>

                  <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                    {[
                      ['Jollof & suya', '#e89a50'],
                      ['Creamy pasta', '#b76b3e'],
                      ['Grilled prawns', '#d78f77'],
                      ['Savour cake', '#c78e55'],
                    ].map(([label, color]) => (
                      <div
                        key={label}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          flex: 1,
                          borderRadius: 14,
                          padding: 7,
                          background: '#ffffff',
                        }}
                      >
                        <div style={{ display: 'flex', height: 34, borderRadius: 9, background: color }} />
                        <span style={{ marginTop: 6, fontSize: 8, fontWeight: 700 }}>{label}</span>
                        <span style={{ marginTop: 2, fontSize: 7, color: '#9c7b66' }}>From 8,500</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  position: 'absolute',
                  top: 150,
                  left: -70,
                  borderRadius: 14,
                  padding: '9px 13px',
                  fontSize: 12,
                  color: '#a7f3d0',
                  background: 'rgba(33, 21, 15, 0.92)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                + Online orders
              </div>
              <div
                style={{
                  display: 'flex',
                  position: 'absolute',
                  top: 180,
                  right: -22,
                  borderRadius: 14,
                  padding: '9px 13px',
                  fontSize: 12,
                  color: '#ffd6ae',
                  background: 'rgba(33, 21, 15, 0.92)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                Found on Google
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
          <div style={{ display: 'flex', fontSize: 14, color: '#9d8a7b' }}>Mostly mobile. Always memorable.</div>
          <div style={{ display: 'flex', fontSize: 14, color: '#9d8a7b' }}>luxasolutions.com</div>
        </div>
      </div>
    </div>,
    { ...size },
  )
}
