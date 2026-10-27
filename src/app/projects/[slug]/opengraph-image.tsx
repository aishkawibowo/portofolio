import { ImageResponse } from 'next/og';
import { getProject } from '@/data/projects';

export default async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const project = getProject(params.slug);

  if (!project) {
    return new Response('Not found', { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
          background: '#0A0714',
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F5F3FF',
        }}
      >
        <div
          style={{
            fontSize: 60,
            background: 'linear-gradient(135deg, #8B5CF6, #E879F9)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            marginBottom: 40,
          }}
        >
          {project.title}
        </div>
        <div style={{ fontSize: 36, color: '#A78BFA' }}>
          Aishka Syakirah Wibowo — Portofolio
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
