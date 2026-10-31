// Non-text data for the three case studies. All copy lives in src/i18n/*.ts → cases.
export const caseSlugs = ['mielle-dor', 'fig-and-olive', 'king-of-the-game'] as const;
export type CaseSlug = (typeof caseSlugs)[number];

export interface CaseMeta {
  slug: CaseSlug;
  /** brand colours used for the card and page theme */
  bg: string;
  ink: string;
  accent: string;
  cover: string;
  /** image shown in the arch on the home-page card */
  arch: string;
  year?: string;
  logos: [string, string][]; // [image, caption key]
  palette: string[];
  gallery: [string, string][];
  gallerySecond?: [string, string][];
  pack?: string;
  video?: string;
  videoPoster?: string;
}

export const cases: Record<CaseSlug, CaseMeta> = {
  'mielle-dor': {
    slug: 'mielle-dor',
    bg: '#432312',
    ink: '#f6ead3',
    accent: '#de8f2b',
    cover: 'mielle-story',
    arch: 'mielle-story',
    logos: [
      ['mielle-logo', 'logo'],
      ['mielle-logo-black', 'black'],
      ['mielle-icon', 'icon'],
      ['mielle-elements', 'elements'],
    ],
    palette: ['#432312', '#d7c964', '#4b553a', '#de8f2b'],
    pack: 'mielle-box',
    gallery: [
      ['mielle-story', 'story'],
      ['mielle-forest', 'forest'],
      ['mielle-drizzle', 'drizzle'],
      ['mielle-open-box', 'open'],
    ],
    video: 'mielle-drizzle',
    videoPoster: 'vposter-mielle-drizzle',
  },
  'fig-and-olive': {
    slug: 'fig-and-olive',
    bg: '#464821',
    ink: '#f4ecd8',
    accent: '#f2a7b9',
    cover: 'fig-grandmother',
    arch: 'fig-grandmother',
    logos: [
      ['fig-logo', 'logo'],
      ['fig-logo-black', 'black'],
      ['fig-elements', 'elements'],
    ],
    palette: ['#464821', '#770f30', '#6c6a30'],
    gallery: [
      ['fig-grandmother', 'grandmother'],
      ['fig-milk-bottles', 'milk'],
      ['fig-jars', 'jars'],
      ['fig-zaatar', 'zaatar'],
      ['fig-seasoned', 'seasoned'],
      ['fig-sign', 'sign'],
    ],
    video: 'fig-and-olive-film',
    videoPoster: 'vposter-fig-and-olive-film',
  },
  'king-of-the-game': {
    slug: 'king-of-the-game',
    bg: '#161616',
    ink: '#fff8eb',
    accent: '#ffc400',
    cover: 'kotg-scene',
    arch: 'kotg-scene',
    logos: [['kotg-logo', 'logo']],
    palette: ['#FFC400', '#161616', '#FFF8EB', '#2E9E5B', '#2F6FDB', '#E5322D'],
    gallery: [
      ['kotg-scene', 'scene'],
      ['kotg-gaming', 'gaming'],
      ['kotg-table', 'table'],
    ],
    gallerySecond: [
      ['kotg-maze-front', 'mazeF'],
      ['kotg-maze-back', 'mazeB'],
      ['kotg-pixel-front', 'pixelF'],
      ['kotg-pixel-back', 'pixelB'],
    ],
  },
};
