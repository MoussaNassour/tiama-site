import type { APIRoute } from 'astro';
import { abs } from '../i18n';
import { site } from '../config/site';
import { getDict } from '../i18n';

// Plain-text summary for AI assistants and answer engines (llms.txt convention).
export const GET: APIRoute = () => {
  const en = getDict('en');
  const body = `# ${site.name}

> ${en.home.seo.description}

${site.name} is a freelance graphic designer and illustrator based in South Lebanon, working online with clients in Lebanon, the GCC, Europe and the United States. Languages: Arabic and English.

## Services
${en.services.map((s) => `- ${s.t}: ${s.d}`).join('\n')}

## Pages
- [Home](${abs('en', '/')})
- [Portfolio](${abs('en', '/work/')})
- [Services](${abs('en', '/services/')})
- [About](${abs('en', '/about/')})
- [Contact](${abs('en', '/contact/')})
- [Mielle d’Or case study](${abs('en', '/work/mielle-dor/')})
- [Fig and Olive case study](${abs('en', '/work/fig-and-olive/')})
- [King of the Game case study](${abs('en', '/work/king-of-the-game/')})
- Arabic: ${abs('ar', '/')} · French: ${abs('fr', '/')}

## Contact
- Email: ${site.email}
- WhatsApp / phone: ${site.phone}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
