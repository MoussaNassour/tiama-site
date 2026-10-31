import { site } from '../config/site';
import { abs, getDict, type Lang } from '../i18n';

const sameAs = Object.values(site.socials).filter(Boolean);
const home = () => abs('en', '/');
export const personId = () => `${home()}#tiama`;

const countries = ['Lebanon', 'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'France', 'United Kingdom', 'Germany', 'United States'];

/** Site-wide entities, emitted on every page (same @ids so Google merges them). */
export function baseSchemas(lang: Lang, image: string) {
  const en = getDict('en');
  return [
    {
      '@type': 'WebSite',
      '@id': `${home()}#website`,
      url: home(),
      name: site.name,
      inLanguage: ['en', 'ar', 'fr'],
      publisher: { '@id': personId() },
    },
    {
      '@type': 'Person',
      '@id': personId(),
      name: site.name,
      alternateName: 'تيما نصور',
      jobTitle: 'Graphic Designer & Illustrator',
      url: home(),
      image,
      email: site.email,
      address: { '@type': 'PostalAddress', addressRegion: 'South Lebanon', addressCountry: 'LB' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Antonine University' },
      knowsLanguage: ['ar', 'en'],
      knowsAbout: ['Graphic design', 'Brand identity', 'Logo design', 'Packaging design', 'Illustration', 'Character design', 'Arabic typography', 'Poster design', 'UGC content', 'AI animation'],
      ...(sameAs.length ? { sameAs } : {}),
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${home()}#service`,
      name: `${site.name} — Graphic Design & Illustration`,
      url: home(),
      image,
      email: site.email,
      telephone: site.phone,
      founder: { '@id': personId() },
      address: { '@type': 'PostalAddress', addressRegion: 'South Lebanon', addressCountry: 'LB' },
      areaServed: countries.map((name) => ({ '@type': 'Country', name })),
      availableLanguage: ['Arabic', 'English'],
      description: en.home.seo.description,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Design services',
        itemListElement: en.services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.t, description: s.d, provider: { '@id': personId() } },
        })),
      },
    },
  ];
}

export const breadcrumb = (items: { name: string; url: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
});

export const faqSchema = (faq: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export const webPage = (type: string, lang: Lang, path: string, name: string, description: string) => ({
  '@type': type,
  '@id': `${abs(lang, path)}#page`,
  url: abs(lang, path),
  name,
  description,
  inLanguage: lang,
  isPartOf: { '@id': `${home()}#website` },
  about: { '@id': personId() },
});
