import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'Step - 跬步';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          backgroundImage: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 200,
              height: 200,
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 140,
              color: 'white',
              fontWeight: 'bold',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
            }}
          >
            S
          </div>
        </div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            color: 'white',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
            marginBottom: 20,
          }}
        >
          Step
        </div>
        <div
          style={{
            fontSize: 40,
            color: 'rgba(255, 255, 255, 0.9)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
          }}
        >
          不积跬步，无以至千里
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

