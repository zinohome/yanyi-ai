import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Yanyi Technology'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '90px',
          background:
            'radial-gradient(900px 600px at 12% -10%, rgba(37,99,235,0.5), transparent 60%), radial-gradient(800px 560px at 100% 30%, rgba(245,177,61,0.42), transparent 60%), #0f1b33',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginBottom: 40 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: 'linear-gradient(135deg, #1e5fd8, #3b82f6, #f5b13d)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              fontSize: 40,
              fontWeight: 800,
              color: '#fff',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 13,
                width: 8,
                height: 8,
                borderRadius: 99,
                background: '#fff',
              }}
            />
            <div style={{ marginTop: 8 }}>Y</div>
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: 1 }}>Yanyi 研翌科技</div>
        </div>
        <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.15, maxWidth: 960 }}>
          Turn expert knowledge into an organizational asset
        </div>
        <div style={{ fontSize: 30, marginTop: 36, color: 'rgba(255,255,255,0.7)', letterSpacing: 6 }}>
          Industrial Intelligence Platform · IndustriaX
        </div>
      </div>
    ),
    size,
  )
}
