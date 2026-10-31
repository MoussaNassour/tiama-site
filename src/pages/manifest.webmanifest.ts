import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { assetUrl } from '../i18n';

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: site.name,
      short_name: 'Tiama',
      description: 'Graphic designer & illustrator',
      start_url: assetUrl(''),
      scope: assetUrl(''),
      display: 'standalone',
      background_color: '#07140f',
      theme_color: '#07140f',
      icons: [
        { src: assetUrl('icon-192.png'), sizes: '192x192', type: 'image/png' },
        { src: assetUrl('icon-512.png'), sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
      ],
    }),
    { headers: { 'Content-Type': 'application/manifest+json' } },
  );
